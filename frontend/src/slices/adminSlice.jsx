import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "../services/adminService";

const initialState = {
  admin: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

export const getAdminProfile = createAsyncThunk(
  "admin/profile",
  async (admin, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await adminService.profile(admin, token);
    return data;
  },
);

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    // get admin profile
    builder.addCase(getAdminProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAdminProfile.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.admin = payload;
      state.success = true;
    });
  },
});

export const { resetMessage } = adminSlice.actions;
export default adminSlice.reducer;
