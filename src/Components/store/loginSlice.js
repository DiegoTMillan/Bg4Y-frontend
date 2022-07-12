import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const loginURL = "http://127.0.0.1:8000/login";
const userURL = "http://127.0.0.1:8000/users";

const defaultData = {
  data: {
    info: [],
    token: "",
    refresh_token: "",
  },
  loading: false,
  isLogged: false,
  updated: false,
};

export const addNewUser = createAsyncThunk(
  "login/addNewUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(loginURL + "/new", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      return rejectWithValue("Failed to fetch, trying to register a new user");
    }
  }
);

export const signIn = createAsyncThunk(
  "login/signIn",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(loginURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      return rejectWithValue("Failed to fetch, trying to sign in");
    }
  }
);
export const updateProfile = createAsyncThunk(
  "login/updateProfile",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(userURL + "/" + data._id, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "authorization": "Bearer: "  + data.token
        },
        
      });
      return response.json();
    } catch (error) {
      return rejectWithValue("Failed to fetch, trying to update profile");
    }
  }
);

// export const getFriends = createAsyncThunk(
//   "login/getFriends",
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await fetch(userURL + "/", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           // "authorization": "Bearer " +
//         },
//       });
//       // console.log(response.json())
//       return response.json();
//     } catch (error) {
//       return rejectWithValue("Failed to fetch, trying to get friends");
//     }
//   }
// );

export const loginSlice = createSlice({
  name: "login",
  initialState: { login: defaultData, status: "idle", error: null },
  reducers: {
    logOut: (state) => {
      state.login = defaultData;
    },
    resetUpdate: (state) => {
      console.log(state.login.updated);
      state.login.updated = false;
      console.log(state.login.updated);
    },
  },
  extraReducers: {
    [addNewUser.pending]: (state) => {
      state.login.loading = true;
      state.status = "loading";
    },
    [addNewUser.fulfilled]: (state, action) => {
      state.login.data = action.payload;
      state.login.loading = false;
      state.status = "succeeded";
    },
    [addNewUser.rejected]: (state, action) => {
      state.login.loading = false;
      state.status = "rejected";
      state.error = action.payload;
    },
    [signIn.pending]: (state) => {
      state.login.loading = true;
      state.status = "loading";
    },
    [signIn.fulfilled]: (state, action) => {
      state.login.data = action.payload;
      state.login.loading = false;
      state.login.isLogged = true;
      state.status = "succeeded";
    },
    [signIn.rejected]: (state, action) => {
      state.login.loading = false;
      state.status = "rejected";
      state.error = action.payload;
    },
    [updateProfile.pending]: (state) => {
      state.login.loading = true;
      state.status = "loading";
    },
    [updateProfile.fulfilled]: (state, action) => {
      // let info = [action.payload.data];
      // console.log(state.login.data);
      // console.log(action);
      // state.login.data = { ...state.login.data, info };
      console.log(action)
      
      state.login.data.info = [action.payload.data];
      state.login.loading = false;
      state.login.updated = true;
      state.status = "succeeded";
    },
    [updateProfile.rejected]: (state, action) => {
      state.login.loading = false;
      state.status = "rejected";
      state.error = action.payload;
    },
    // [getFriends.fulfilled]: (state, action) => {
    //   // console.log(action.payload)
    //   state.login.data.data = action.payload;
    //   state.login.loading = false;
    //   state.login.isLogged = true;
    //   state.status = "succeeded";
    // },
    // [getFriends.pending]: (state) => {
    //   state.login.loading = true;
    //   state.status = "loading";
    // },
    // [getFriends.rejected]: (state, action) => {
    //   state.login.loading = false;
    //   state.status = "rejected";
    //   state.error = action.payload;
    // },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
