import { createAsyncThunk } from "@reduxjs/toolkit";
import useAxios from "../../config/useaxios";
import { BASE_URL } from "../../config/API.JSX";
import { toast } from "react-toastify";

export const userTransaction = createAsyncThunk(
    "auth/transaction",
    async (data, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/transactions`,
          method: "get",
        })
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