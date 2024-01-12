import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ userName, password }) => {
    const resp = await axios.post("https://dummyjson.com/auth/login", {
      username: userName,
      password: password
    })
    return resp.data
  }
)

const userAuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.user = action.payload
      localStorage.setItem("token", action.payload.token)
    })    
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.user = null
      localStorage.removeItem("token")
      state.error = action.error.message
    })
  }
})

export const authReducer = userAuthSlice.reducer