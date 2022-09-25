import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name:'user',
    initialState:{
        email:null,
        id:null,
        name:null,
        secondname:null,
    },reducers:{
        addUser(state,action){
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.secondname = action.payload.secondname;
           
        },removeUser(state){
            state.email = null;
            state.id = null;
            state.name = null;
            state.secondName=null;
        }
    }
})


export const {addUser,removeUser} = userSlice.actions;


export default userSlice.reducer;