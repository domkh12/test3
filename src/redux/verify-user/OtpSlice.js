import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../feature/api";

const otpInitialState = {
  isVerified: false,
  isLoading: false,
  error: null,
};

export const verifyOtp = createAsyncThunk(
  "otp/verifyOtp",
  async ({ email, otp_code }) => {
    try {
      const body = JSON.stringify({ email, otp_code });
      console.log("Request payload:", body);

      const response = await fetch(`${BASE_URL}verify-otp/`, {
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

const otpSlice = createSlice({
  name: "otp",
  initialState: otpInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.isLoading = false;
        state.isVerified = true;
        state.error = null;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to verify OTP";
      });
  },
});

export default otpSlice.reducer;
