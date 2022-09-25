import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import postSlice from './postSlice/postSlice.js';

const store = configureStore({
   reducer:{
      users:userSlice,
      posts:postSlice,
      
   }    
})

export default store;

