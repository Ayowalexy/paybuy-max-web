import { createAsyncThunk } from "@reduxjs/toolkit";
import useAxios from "../../config/useaxios";
import { BASE_URL } from "../../config/API.JSX";
import { toast } from "react-toastify";

export const getBanks = createAsyncThunk(
    "banks/getbanks",
    async (data, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/banks`,
          method: "get",
        })
        return response.data.data
      } catch (error) {
        console.log(error.response.data)
        const message = error.response.data
        toast.error(message);
        if (axios.isAxiosError(error) && error.response) {
          return thunkAPI.rejectWithValue(error.response);
        } else {
          return thunkAPI.rejectWithValue(String(message));
        }
      }
    }
  )
  export const createBank = createAsyncThunk(
    "banks/createbanks",
    async (data, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/settings/accounts/store`,
          method: "post",
          data: data
        })
        toast.success("account successfully added");
        return response.data.data
      } catch (error) {
        console.log(error.response.data)
        const message = error.response.data
        toast.error(message);
        if (axios.isAxiosError(error) && error.response) {
          return thunkAPI.rejectWithValue(error.response);
        } else {
          return thunkAPI.rejectWithValue(String(message));
        }
      }
    }
  )
  export const showBanks = createAsyncThunk(
    "banks/showbanks",
    async (data, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/settings/accounts`,
          method: "get",
        })
        return response.data.data
      } catch (error) {
        console.log(error.response.data)
        const message = error.response.data
        toast.error(message);
        if (axios.isAxiosError(error) && error.response) {
          return thunkAPI.rejectWithValue(error.response);
        } else {
          return thunkAPI.rejectWithValue(String(message));
        }
      }
    }
  )
  export const deleteBanks = createAsyncThunk(
    "banks/deletebanks",
    async (data, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/settings/accounts/delete`,
          method: "post",
          data: data
        })
        toast.success("account successfully deleted");
        return response.data.data
      } catch (error) {
        console.log(error.response.data)
        const message = error.response.data
        toast.error(message);
        if (axios.isAxiosError(error) && error.response) {
          return thunkAPI.rejectWithValue(error.response);
        } else {
          return thunkAPI.rejectWithValue(String(message));
        }
      }
    }
  )