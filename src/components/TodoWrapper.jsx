import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
			setTodos([...todos, {id: Math.floor(Math.random() * 100000000), 
				task: todo, 
				completed: false, 
				isEditing: false				
			 }])
    }

    return (
    <div className='TodoWrapper'>
			<h1>Get Things done</h1>
      <TodoForm addTodo={addTodo}/>
			{todos.map((todo, index) => 
			<Todo task={todo} key={index} />)}
    </div>
  )
}