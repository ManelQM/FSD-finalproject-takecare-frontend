import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'user',
    initialState: {
      credentials: {
        token: "",
        mail: "",
        role:""
      }
    },
    reducers: {
      login: (state, action) => {
        return {
          ...state,
          ...action.payload,
          loggedIn: true
        }
      },
      userout: (state, action) => {
        return {
          ...state,
          ...action.payload,
          loggedIn: false
        }

      }
      
    }
    
});

export const { login, userout } = profileSlice.actions;

export const userData = (state) => state.user;

export default profileSlice.reducer;