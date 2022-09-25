import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name:'user',
    initialState:{
        email:null,
        id:null,
    },reducers:{
        addUser(state,action){
            state.email = action.payload.email;
            state.id = action.payload.id;
        },removeUser(state){
            state.email = null;
            state.id = null;
        }
    }
})


export const {addUser,removeUser} = userSlice.actions;


export default userSlice.reducer;