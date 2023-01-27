import {createSlice} from "@reduxjs/toolkit"; 

export const contractsSlice = createSlice ({
    name: "contracts",
    initialState: {
        details: {},
        search: []
    },
    reducers: {
        addContract: (state,action) => {
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

export const { addContract, addSearch } = contractsSlice.actions;

export const contractdata = (state) => state.contract;

export default contractsSlice.reducer;