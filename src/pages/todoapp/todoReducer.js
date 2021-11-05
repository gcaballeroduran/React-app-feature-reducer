import { getSystemErrorMap } from "util";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'delete':
      console.log("delete")
      return state.filter((todo) => todo.id !== action.payload.id);

    case 'toggle':
     const updated = state.map((todo) =>
        action.payload.id === todo.id ? {
          ...todo,
          done: !todo.done
          
        } : { ...todo } 
      );
      console.log(updated);
      return [...updated];
      
    default:
      return state;
  }
};



