import {createSlice} from "@reduxjs/toolkit"; 

export const publicationsSlice = createSlice ({
    name: "publications",
    initialState: {
        details: {},
        search: []
    },
    reducers: {
        addPublication: (state,action) => {
            return{
                ...state,
                ...action.payload
            }
        },
        addSearch: (state,action) => {
            return{
                ...state,
                ...action.payload
            }
        },
    }
}); 

export const { addPublication, addSearch } = publicationsSlice.actions;

export const publicationData = (state) => state.publication;

export default publicationsSlice.reducer;