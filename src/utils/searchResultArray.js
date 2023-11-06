import { createSlice } from "@reduxjs/toolkit";

const searchResultArray=createSlice({
    name:"ResultArray",
    initialState:{
        searchResult:[]
    },
    reducers:{
        addSearchResults:(state,action)=>{
            state.searchResult.push(action.payload)
        }
    }
})


export const {addSearchResults} = searchResultArray.actions
export default searchResultArray.reducer