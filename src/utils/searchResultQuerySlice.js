import { createSlice } from "@reduxjs/toolkit";

const searchResultQuerySlice=createSlice({
    name:'searchResult',
    initialState:{
        searchQuery:''
    },
    reducers:{
        addSearchQuery:(state,action)=>{
          state.searchQuery=action.payload
        }
    }

})

export const {addSearchQuery}=searchResultQuerySlice.actions
export default searchResultQuerySlice.reducer