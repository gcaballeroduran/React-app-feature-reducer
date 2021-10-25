export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'delete':
      console.log("delete")
      return state.filter((todo) => todo.id !== action.payload.id);

    case 'toggle':
     console.log("tachar");
    return [
      ...state.map((todo) => {
        if(todo === action.payload){
          console.log("inic " + todo.done);
          todo.done = !todo.done;
          console.log("if " + todo.done);
        }
        return todo;
      })
    ];
      
    default:
      return state;
  }
};



