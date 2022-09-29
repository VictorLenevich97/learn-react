import { createReducer, createAction } from "@reduxjs/toolkit";
import { privateAxios } from "../../utils/axios";
import { AUTH_USERS_ME } from "../../constants/endpoints";

const fetchUserLoading = createAction("fetchUserLoading");
const fetchUserSuccess = createAction("fetchUserSuccess");
const fecthUserError = createAction("fecthUserError");

export const fetchUserDetailAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserLoading());
      const { data } = await privateAxios.get(AUTH_USERS_ME);

      dispatch(fetchUserSuccess(data));
    } catch (error) {
      dispatch(fecthUserError(error));
    }
  };
};

const initialState = { userDetail: null, isLoading: false, error: null };

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUserLoading, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchUserSuccess, (state, action) => {
      state.isLoading = false;
      state.userDetail = action.payload;
    })
    .addCase(fecthUserError, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
});

export default userReducer;
