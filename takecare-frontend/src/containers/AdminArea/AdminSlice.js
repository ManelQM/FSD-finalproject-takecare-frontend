import {createSlice} from "@reduxjs/toolkit"; 

export const adminUsersSlice = createSlice ({
    name: "users",
    initialState: {
        details: {},
        error: []
    },
    reducers: {
        addUsers: (state,action) => {
            return{
                ...state,
                ...action.payload
            }
        },
        setError: (state,action) => {
            return{
                ...state,
                ...action.payload
            }
        },
    }
}); 

export const { addUsers, setError } = adminUsersSlice.actions;

export const adminUsersData = (state) => state.user;

export default adminUsersSlice.reducer;