import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicAxios, privateAxios } from "../../utils/axios";
import { AUTH_JWT_CREATE } from "../../constants/endpoints";

const initialState = {
  accessToken: localStorage.getItem("accessToken") || false,
  isAuth: !!localStorage.getItem("accessToken") || false,
  isLoading: false,
  error: null,
};

export const signInAsync = createAsyncThunk(
  "auth/signInAsync",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await publicAxios.post(AUTH_JWT_CREATE, body);

      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);

      privateAxios.defaults.headers.Authorization = `Bearer ${data.access}`;

      return data;
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
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
