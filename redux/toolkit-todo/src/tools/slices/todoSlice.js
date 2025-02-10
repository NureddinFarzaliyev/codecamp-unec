import { createSlice } from '@reduxjs/toolkit';


const initialState = []

const todoSlice = createSlice({
  name:"todo",
  initialState,
  reducers:{
    add:(state,action)=>{
      const newTodo = {id:crypto.randomUUID(),title:action.payload};
      state.push(newTodo);
    },
    remove: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    edit: (state, action) => {
      const { id, title } = action.payload;
      const todo = state.find(todo => todo.id === id);
      if (todo) {
      todo.title = title;
      }
    },
  }
})


export default todoSlice.reducer;
export const {add, remove, edit} = todoSlice.actions;
