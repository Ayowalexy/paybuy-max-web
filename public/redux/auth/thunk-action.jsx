import { createAsyncThunk } from "@reduxjs/toolkit";
import useAxios from "../../config/useaxios";
import { BASE_URL } from "../../config/API.JSX";

export const signUpUser = createAsyncThunk(
    "auth/signup",
    async (data, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/login`,
          method: "post",
          data: data
        })
        toast.success("happy maro");
        return response.data.data
      } catch (error) {
        console.log(error)
        toast.error("error");
        if (axios.isAxiosError(error) && error.response) {
          return thunkAPI.rejectWithValue(error.response);
        } else {
          return thunkAPI.rejectWithValue(String(error));
        }
      }
    }
  )