import { createSlice } from "@reduxjs/toolkit";

export const searchPublicationsSlice = createSlice({
  name: "publications",
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
export const searchPublicationData = (state) => state.publications;
export default searchPublicationsSlice.reducer;
