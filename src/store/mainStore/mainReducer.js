// Example with createReducer. Should remove in the future!

import { createReducer, createAction } from "@reduxjs/toolkit";

export const login = createAction("LOGIN");
export const logout = createAction("LOGOUT");

const initialState = {
  isAuth: !!localStorage.getItem("isAuth") || false,
};

const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state) => {
      state.isAuth = true;
    })
    .addCase(logout, (state) => {
      state.isAuth = false;
    });
});

export default mainReducer;
