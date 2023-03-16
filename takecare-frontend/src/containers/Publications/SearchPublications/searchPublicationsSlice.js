import { createSlice } from "@reduxjs/toolkit";

export const searchPublicationsSlice = createSlice({
  name: "publication",
  initialState: {
    movies: [],
  },
  reducers: {
    addSearch: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    cleanSearch: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { addSearch, cleanSearch } = searchPublicationsSlice.actions;
export const searchPublicationData = (state) => state.publication;
export default searchPublicationsSlice.reducer;
