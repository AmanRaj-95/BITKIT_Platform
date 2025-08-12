// import { createSlice } from '@reduxjs/toolkit';

// export const usersSlice = createSlice({
//     name: 'users',
//     initialState: {
//         user: null,
//     },
//     reducers: {
//         setUser: (state, action) => {
//             state.user = action.payload;
//         },
//     }
// });

// export const {setUser} = usersSlice.actions;

// export default usersSlice.reducer;
// redux/usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    forumUser: null,
    buySellUser: null,
  },
  reducers: {
    setForumUser: (state, action) => {
      state.forumUser = action.payload;
    },
    setBuySellUser: (state, action) => {
      state.buySellUser = action.payload;
    },
    logoutUsers: (state) => {
      state.forumUser = null;
      state.buySellUser = null;
    },
  },
});

export const { setForumUser, setBuySellUser, logoutUsers } = usersSlice.actions;
export default usersSlice.reducer;
