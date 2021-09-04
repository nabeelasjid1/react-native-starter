import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Toast from "react-native-simple-toast";
import axios from "../../config/axios";

export const Login = createAsyncThunk(
  "/user/signIn",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/auth/signin", user);
      Toast.show("Login successfull");
      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return thunkAPI.rejectWithValue({
          err: err.response.data,
          status: err.response.status,
        });
      } else {
        return thunkAPI.rejectWithValue({
          err: "Network Error",
        });
      }
    }
  }
);

export const SignUp = createAsyncThunk(
  "user/signUp",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/auth/signup", user);
      Toast.show("Signup successfull");
      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return thunkAPI.rejectWithValue({
          err: err.response.data,
          status: err.response.status,
        });
      } else {
        return thunkAPI.rejectWithValue({
          err: "Network Error",
        });
      }
    }
  }
);

export const ResetPassword = createAsyncThunk(
  "/user/resetpassword",
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(
        "/auth/resetpassword",
        { password: user.password },
        {
          headers: {
            Authorization: `bearer ${user.token}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return thunkAPI.rejectWithValue({
          err: err.response.data,
          status: err.response.status,
        });
      } else {
        return thunkAPI.rejectWithValue({
          err: "Network Error",
        });
      }
    }
  }
);

const auth = createSlice({
  name: "auth",
  initialState: {
    user: {},
    loading: false,
    err: "",
    token: null,
  },
  reducers: {
    SetState(state, { payload: { field, value } }) {
      state[field] = value;
    },
    ClearState(state, action) {
      return {
        user: {},
        loading: false,
        err: "",
        token: null,
      };
    },
    logout(state, action) {
      return {
        user: {},
        loading: false,
        err: "",
        token: null,
      };
    },
  },
  extraReducers: {
    [Login.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [Login.fulfilled]: (state, action) => {
      return {
        user: action.payload.user,
        token: action.payload.token.token,
        loading: false,
      };
    },
    [Login.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        err: action.payload.err,
      };
    },
    [SignUp.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [SignUp.fulfilled]: (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token.token,
        loading: false,   
      };
    },
    [SignUp.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        err: action.payload.err,
      };
    },
    [ResetPassword.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [ResetPassword.fulfilled]: (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    },
    [ResetPassword.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        done: false,
        err: action.payload.err,
      };
    },
  },
});

const { reducer, actions } = auth;

export const { SetState, ClearState, logout } = actions;

export default reducer;
