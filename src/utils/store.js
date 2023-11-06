import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import searchResultQuerySlice from "./searchResultQuerySlice";
import searchResultArray from "./searchResultArray";



const store =configureStore({
reducer:{
    app:appSlice,
    search:searchSlice,
    searchResult:searchResultQuerySlice,
    ResultArray:searchResultArray,
},
})

export default store