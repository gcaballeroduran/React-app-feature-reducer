import React from 'react';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle}) => {
  

  return (
    <li key={todo.id} className='list-group-item'>
      <p onClick={ (c) => {
        c.preventDefault();
        handleToggle(todo);
      }} 
        style ={{ textDecoration: todo.done === true ?'line-through': null}}>
        
        {index + 1}. {todo.desc}
        
      </p>
      <button
        className='btn btn-danger'
        onClick={ (c) => {
          c.preventDefault();
          handleDelete(todo);
        }}
      >
        Borrar
      </button>
    </li>
  );
};

