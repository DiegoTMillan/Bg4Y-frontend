import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const loginURL = "http://127.0.0.1:8000/login";
const userURL = "http://127.0.0.1:8000/users";

const defaultData = {
  data: {},
  loading: false,
  isLogged: false,
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
      // console.log(userURL + "/" + data._id);
      console.log(data)
      const response = await fetch(userURL + "/" + data._id, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "authorization":"Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTY1NzExMjgzNCwiZXhwIjoxNjU3MTEzNzM0fQ.WSJnYWfaj8-8FPdl3fJY0wIE6gcedkugQR5_OyoK3Sg"
        },
      });
      return response.json();
    } catch (error) {
      return rejectWithValue("Failed to fetch, trying to update profile");
    }
  }
);

// export const getBoardgames = createAsyncThunk(
//   "login/getBoardgames",
//   async (data, { rejectWithValue }) => {
//     try {
//       // console.log(userURL + "/" + data._id);
//       console.log(data)
//       const response = await fetch(userURL + "/" + data._id, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       return response.json();
//     } catch (error) {
//       return rejectWithValue("Failed to fetch, trying to update profile");
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
      state.login.data = action.payload;
      state.login.loading = false;
      state.status = "succeeded";
    },
    [updateProfile.rejected]: (state, action) => {
      state.login.loading = false;
      state.status = "rejected";
      state.error = action.payload;
    },
  //   [getBoardgames.pending]: (state) => {
  //     state.login.loading = true;
  //     state.status = "loading";
  //   },
  //   [getBoardgames.rejected]: (state, action) => {
  //     state.login.loading = false;
  //     state.status = "rejected";
  //     state.error = action.payload;
  //   },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
