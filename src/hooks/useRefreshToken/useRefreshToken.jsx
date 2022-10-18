import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { privateAxios, publicAxios } from "../../utils/axios";
import { AUTH_JWT_VERIFY, AUTH_JWT_REFRESH } from "../../constants/endpoints";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants/common";
import { logout } from "../../store/authStore/authSlice";

export const useRefreshToken = () => {
  const { accessToken, isAuth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const getAuthorizationToken = (token) => `Bearer ${token}`;

  useLayoutEffect(() => {
    if (isAuth) {
      const requestIntercept = privateAxios.interceptors.request.use(
        async (config) => {
          try {
            await publicAxios.post(AUTH_JWT_VERIFY, {
              token: accessToken,
            });
          } catch (error) {
            try {
              // Maybe should check 401-http status code

              const { data } = await publicAxios.post(AUTH_JWT_REFRESH, {
                refresh: localStorage.getItem(REFRESH_TOKEN),
              });

              localStorage.setItem(ACCESS_TOKEN, data.access);

              privateAxios.defaults.headers.Authorization =
                getAuthorizationToken(data.access);

              config.headers = {
                ...config.headers,
                Authorization: getAuthorizationToken(data.access),
              };
            } catch (error) {
              dispatch(logout());
              Promise.reject(error);
            }
          }

          return config;
        },
        (error) => {
          Promise.reject(error);
        }
      );

      return () => {
        privateAxios.interceptors.request.eject(requestIntercept);
      };
    }
  });

  return null;
};
