import { createSlice } from "@reduxjs/toolkit";

const savedUsers=JSON.parse(localStorage.getItem("users"));


const initialState=savedUsers?savedUsers:[];

const userSlice=createSlice({
    name:"users",
    initialState:initialState,
    reducers:{
        addUser:(state,action)=>{
          state.push(action.payload);
          localStorage.setItem("users", JSON.stringify(state));
        },
        updateUser:(state,action)=>{
          const {id,name,email,phone,references}=action.payload;
          
          state[id].name=name;
          state[id].email=email;
          state[id].phone=phone;
          state[id].references=references;
          localStorage.setItem("users", JSON.stringify(state));
        },
        deleteUser:(state,action)=>{
          const {id}=action.payload;
          state.splice(id,1);
          localStorage.setItem("users", JSON.stringify(state));
        },
        updateRef:(state,action)=>{
          const {id,references}=action.payload;
          state[id].references=references;
          localStorage.setItem("users", JSON.stringify(state));
        }
    }
})

export const {addUser,updateUser,deleteUser,updateRef}=userSlice.actions;
export default userSlice.reducer;