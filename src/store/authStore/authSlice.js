import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicAxios, privateAxios } from "../../utils/axios";
import { AUTH_JWT_CREATE } from "../../constants/endpoints";

const initialState = {
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

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
  extraReducers: {
    [signInAsync.pending.type]: (state) => {
      state.isLoading = true;
    },
    [signInAsync.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
    },
    [signInAsync.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { login, logout } = mainSlice.actions;
export default mainSlice.reducer;
