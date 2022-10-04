import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { privateAxios } from "../../utils/axios";
import { AUTH_USERS_ME } from "../../constants/endpoints";

export const fetchUserDetailAsync = createAsyncThunk(
  "user/fetchUserDetailAsync",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await privateAxios.get(AUTH_USERS_ME);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = { userDetail: null, isLoading: false, error: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [fetchUserDetailAsync.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUserDetailAsync.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.userDetail = action.payload;
    },
    [fetchUserDetailAsync.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
