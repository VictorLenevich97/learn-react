import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicAxios, privateAxios } from "../../utils/axios";
import { AUTH_JWT_CREATE, AUTH_ACTIVATE } from "../../constants/endpoints";
import { UserStatus } from "../../types/auth";

interface IAuthSliceIntialState {
  accessToken: string | null;
  isAuth: boolean;
  isLoading: boolean;
  error: any;
  isActivationLoading: boolean;
  activationStatus: UserStatus | null;
}

const initialState: IAuthSliceIntialState = {
  accessToken: localStorage.getItem("accessToken"),
  isAuth: !!localStorage.getItem("accessToken") || false,
  isLoading: false,
  error: null,
  isActivationLoading: true,
  activationStatus: null,
};

export const signInAsync = createAsyncThunk(
  "auth/signInAsync",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await publicAxios.post(AUTH_JWT_CREATE, body);

      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);

      privateAxios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.access}`;

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const activateAsync = createAsyncThunk(
  "auth/activateAsync",
  async (
    { token, uid }: { token: string; uid: number },
    { rejectWithValue }
  ) => {
    try {
      await publicAxios.post(AUTH_ACTIVATE, { token, uid });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      state.accessToken = "";
    },
  },
  extraReducers: {
    [signInAsync.pending.type]: (state) => {
      state.isLoading = true;
    },
    [signInAsync.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.accessToken = action.payload.access;
    },
    [signInAsync.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [activateAsync.fulfilled.type]: (state) => {
      state.isActivationLoading = false;
      state.activationStatus = UserStatus.ACTIVE;
    },
    [activateAsync.rejected.type]: (state) => {
      state.isActivationLoading = false;
      state.activationStatus = UserStatus.NO_ACTIVE;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
