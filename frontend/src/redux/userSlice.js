import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    otherUsers: null,
    selectedUser: null
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },

    setOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },  
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const { setUser, logout, setOtherUsers, setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
