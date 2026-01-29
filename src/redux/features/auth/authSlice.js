import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { refresh } from "next/cache";
import { act } from "react";

/* ================= LOGIN ================= */
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:8000/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (!res.ok) {
        return rejectWithValue(data.detail || "Login failed");
      }

      // 🔐 Save tokens
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);

      return {
        user: {username:data.username, role: data.role},
        access:data.access,
        refresh:data.refresh,
      };
    } catch (err) {
      return rejectWithValue(err.message || "Network error");
    }
  }
);

/* ================= REGISTER ================= */
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:8000/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.username) {
          return rejectWithValue(`Username: ${data.username}`);
        }
        if (data.email) {
          return rejectWithValue(`Email: ${data.email}`);
        }
        if (data.password) {
          return rejectWithValue(`Password: ${data.password}`);
        }
        return rejectWithValue(data.detail || "Registration failed");

      }

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    role:null,
    access:null,
    refresh:null,
    isAuthenticated:null,
    redirectTo: null,
    loading: false,
    error: null,
    registerSuccess: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.access = null;
      state.refresh = null;
      state.isAuthenticated = null;
      state.redirectTo = "/auth/login";
      state.registerSuccess = false;
      localStorage.clear();
    },
    clearError: (state) => {
      state.error = null;
    },
    clearRedirect: (state) => {
      state.redirectTo = null;
    },
    resetRegisterSuccess: (state) => {
      state.registerSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.role = action.payload.role;
        state.access = action.payload.access
        state.refresh = action.payload.refresh
        state.isAuthenticated = true
        state.redirectTo = action.payload.redirect_to;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.registerSuccess = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.redirectTo = action.payload.redirect_to;
        state.registerSuccess = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.registerSuccess = false;
      });
  },
});

export const { logout, clearError, clearRedirect, resetRegisterSuccess } = authSlice.actions;
export default authSlice.reducer;
