import { createAsyncThunk } from "@reduxjs/toolkit";
import useAxios from "../../config/useaxios";
import { BASE_URL } from "../../config/API.JSX";
import { toast } from "react-toastify";

export const userWallet = createAsyncThunk(
    "auth/userWallet",
    async (data, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/wallets`,
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
  export const currenciesList = createAsyncThunk(
    "auth/currencies",
    async (data, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/currencies`,
          method: "get",
        })
    console.log(response.data.data)
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
  export const newWallet = createAsyncThunk(
    "auth/newWallet",
    async (data, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/wallet/store`,
          method: "post",
          data: data

        })
        toast.success("wallet successfully created");
    console.log(response.data.data)
        return response.data.data
      } catch (error) {
        console.log(error.response.data)
        const message = error.response.data.message
        toast.error(message);
        if (axios.isAxiosError(error) && error.response) {
          return thunkAPI.rejectWithValue(error.response);
        } else {
          return thunkAPI.rejectWithValue(String(message));
        }
      }
    }
  )