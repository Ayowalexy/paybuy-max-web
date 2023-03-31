import { createAsyncThunk } from "@reduxjs/toolkit";
import useAxios from "../../config/useaxios";
import { BASE_URL } from "../../config/API.JSX";
import { toast } from "react-toastify";

export const signUpUser = createAsyncThunk(
    "auth/signup",
    async (data, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/register`,
          method: "post",
          data: data
        })
        toast.success("Successfully registered");
        return response.data.data
      } catch (error) {
        console.log(error.response.data.errors.email)
        const message = error.response.data.errors.email[0]
        toast.error(message);
        if (axios.isAxiosError(error) && error.response) {
          return thunkAPI.rejectWithValue(error.response);
        } else {
          return thunkAPI.rejectWithValue(String(message));
        }
      }
    }
  )
  export const verifyOtp = createAsyncThunk(
    "auth/verifyotp",
    async (data, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/email/verification`,
          method: "post",
          data: data
        })
        toast.success("Successfully verified");
        return response.data.data
      } catch (error) {
        console.log(error.response.data.errors.email)
        const message = error.response.data.errors.email[0]
        toast.error(message);
        if (axios.isAxiosError(error) && error.response) {
          return thunkAPI.rejectWithValue(error.response);
        } else {
          return thunkAPI.rejectWithValue(String(message));
        }
      }
    }
  )
  export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (data, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/login`,
          method: "post",
          data: data
        })
        toast.success("Login successful");
    console.log(response.data)
    localStorage.setItem('token', response.data.token)
        return response.data.data
      } catch (error) {
        console.log(error.response.data.errors.email)
        const message = error.response.data.errors.email[0]
        toast.error(message);
        if (axios.isAxiosError(error) && error.response) {
          return thunkAPI.rejectWithValue(error.response);
        } else {
          return thunkAPI.rejectWithValue(String(message));
        }
      }
    }
  )
  export const userProfile = createAsyncThunk(
    "auth/userProfile",
    async (data, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/settings/profile`,
          method: "get",
        })
        console.log(response.data)
        return response.data.data
      } catch (error) {
        console.log(error.response.data.errors.email)
        const message = error.response.data.errors.email[0]
        toast.error(message);
        if (axios.isAxiosError(error) && error.response) {
          return thunkAPI.rejectWithValue(error.response);
        } else {
          return thunkAPI.rejectWithValue(String(message));
        }
      }
    }
  )
  export const updateUserProfile = createAsyncThunk(
    "auth/updateUserProfile",
    async (data, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/settings/profile`,
          method: "post",
          data: data
        })
        toast.success("Update successful");
        console.log(response.data)
        return response.data.data
      } catch (error) {
        console.log(error.response.data.errors.email)
        const message = error.response.data.errors.email[0]
        toast.error(message);
        if (axios.isAxiosError(error) && error.response) {
          return thunkAPI.rejectWithValue(error.response);
        } else {
          return thunkAPI.rejectWithValue(String(message));
        }
      }
    }
  )
  export const logoutUser= createAsyncThunk(
    "auth/logoutUser",
    async (data, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/logout`,
          method: "post",
          data: data
        })
        console.log(response.data)
        return response.data.data
      } catch (error) {
        console.log(error.response.data.errors.email)
        const message = error.response.data.errors.email[0]
        toast.error(message);
        if (axios.isAxiosError(error) && error.response) {
          return thunkAPI.rejectWithValue(error.response);
        } else {
          return thunkAPI.rejectWithValue(String(message));
        }
      }
    }
  )
  export const resendOtp= createAsyncThunk(
    "auth/resendOtp",
    async (data, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/email/resend/otp`,
          method: "post",
          data: data
        })
        toast.success("otp has been resent");
        console.log(response.data)
        return response.data.data
      } catch (error) {
        console.log(error.response.data.errors.email)
        const message = error.response.data.errors.email[0]
        toast.error(message);
        if (axios.isAxiosError(error) && error.response) {
          return thunkAPI.rejectWithValue(error.response);
        } else {
          return thunkAPI.rejectWithValue(String(message));
        }
      }
    }
  )
  