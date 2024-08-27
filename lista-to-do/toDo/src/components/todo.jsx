import React from 'react'
import '../App.css'; 
// Certifique-se de que o caminho do arquivo CSS esteja correto

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <div className="text-container">
        <p>{todo.text}</p>
        <p className="category">{todo.category}</p>
      </div>
      <div className="button-container">
        <button className='complete'>Completar</button>
        <button className='remove'>x</button>
      </div>
    </div>
  );
};

export default Todo;
