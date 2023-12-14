import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

const admin = JSON.parse(localStorage.getItem("admin"));

const initialState = {
  user: admin ? admin : null,
  error: false,
  success: false,
  loading: false,
};

// register an admin
export const regAdmin = createAsyncThunk(
  "auth/regAdmin",
  async (admin, thunkAPI) => {
    const data = await authService.regAdmin(admin);
    //check for error
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  },
);

// login an admin

export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async (admin, thunkAPI) => {
    const data = await authService.loginAdmin(admin);
    //check for error
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  },
);

// logout an admin

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    // register admin
    builder.addCase(regAdmin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(regAdmin.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.user = action.payload;
    });
    builder.addCase(regAdmin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // login admin
    builder.addCase(loginAdmin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginAdmin.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.user = action.payload;
    });
    builder.addCase(loginAdmin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
