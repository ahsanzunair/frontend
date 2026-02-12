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
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("role", data.user.role)

      console.log("Data Fetch", data);
      

      return {
        user: data.user,
        role: data.user.role,
        access: data.access,
        refresh: data.refresh,
        redirect_to: data.redirect_to,
        message: data.message
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

      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("role", data.user.role);
      }

      return {
        user: data.user,
        role: data.user?.role,
        token: data.token,
        redirect_to: data.redirect_to,
        message: data.message
      };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    role: null,
    access: null,
    refresh: null,
    isAuthenticated: false,
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
      sessionStorage.clear();
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
    loadUserFromStorage: (state) => {
      const userData = localStorage.getItem("user");
      const role = localStorage.getItem("role");
      const access = localStorage.getItem("access_token");

      if (userData && access) {
        state.user = JSON.parse(userData);
        state.role = role;
        state.access = access;
        state.isAuthenticated = true;
      }
    }
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
        state.role = action.payload.user?.role;
        state.access = action.payload.access;
        state.refresh = action.payload.refresh;
        state.isAuthenticated = true;
        state.redirectTo = action.payload.redirect_to;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.registerSuccess = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.role = action.payload.role;
        state.access = action.payload.access;
        state.isAuthenticated = true;
        state.redirectTo = action.payload.redirect_to;
        state.registerSuccess = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.registerSuccess = false;
      });
  },
});

export const { logout, clearError, clearRedirect, resetRegisterSuccess, loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;
