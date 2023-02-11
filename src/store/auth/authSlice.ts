import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
import { RootState } from '../store'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user') as any)

type StateType = {
  user: string;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string
}

const initialState: StateType = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}


// Login user
export const login = createAsyncThunk(
  'auth/login',
  async (user:string, thunkAPI) => {
    try {
      return await authService.login(user)
    } catch (error) {
      console.log(error)
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  })


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state:StateType) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(login.pending, (state:StateType) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state:StateType, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state:StateType, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })

  },
})

export const { reset } = authSlice.actions
export const authSelector = (store: RootState) => store.auth
export default authSlice.reducer