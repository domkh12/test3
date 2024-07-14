import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../feature/api";

const initialState = {
  user: null,
  accessToken: localStorage.getItem("access") || null,
  refreshToken: localStorage.getItem("refresh") || null,
  isLoading: false,
  error: null,
};

export const fetchLogin = createAsyncThunk(
  "user/fetchLogin",
  async ({ email, password }) => {
    try {
      const body = JSON.stringify({ email, password });
      console.log("Request payload:", body);

      const response = await fetch(`${BASE_URL}login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.log("Error response:", errorText);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success response:", data);
      return data;
    } catch (error) {
      console.error("Fetch error:", error.message);
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.error = null;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch";
      });
  },
});

export default userSlice.reducer;
