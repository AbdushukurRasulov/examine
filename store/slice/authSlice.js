import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import authService from '../actions/authActions'

// Get user from localStorage
const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    return await authService.register(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

export const userInfo = createAsyncThunk('auth/userInfo', async () => {
  await authService.userInfo()
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true
    },
    [register.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = payload
    },
    [register.rejected]: (state, payload) => {
      state.isLoading = false
      state.isError = true
      state.message = payload
      state.user = null
    },
    [login.pending]: (state) => {
      state.isLoading = true
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = payload
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.isError = true
      state.message = payload
      state.user = null
    },
    [logout.fulfilled]: (state) => {
      state.user = null
    },
    [userInfo.fulfilled]: (state, { payload }) => {
      state.user = payload
    },
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer

export const useAuthSelector = () => useSelector((state) => state.auth)
