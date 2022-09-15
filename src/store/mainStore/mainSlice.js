import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: !!localStorage.getItem("isAuth") || false,
};

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
  extraReducers: {},
});

export const { login, logout } = mainSlice.actions;
export default mainSlice.reducer;
