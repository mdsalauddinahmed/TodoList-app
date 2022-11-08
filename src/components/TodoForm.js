import React, { useState } from 'react';

const TodoForm = () => {
    const [input,setInput] =useState('')
    return (
        <>
        <form  className="todo-form">
            <input type="text"name='text' placeholder='Add a todo'value={input} className="todoInput" />
            <button className="todo-button">Add todo</button>
        </form>
            
        </>
    );
};

export default TodoForm;