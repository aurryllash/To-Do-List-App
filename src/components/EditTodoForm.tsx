import React, { useState, FormEvent } from 'react'

interface TodoFormProps {
  id: string,
  editTodo: (todo: string, id: string) => void,
  getValue: string
}

const editTodoForm = ({ editTodo, id, getValue}: TodoFormProps) => {

  const [value, setValue] = useState<string>(getValue)
  
  const handleTask = (event: FormEvent) => {
    event.preventDefault();

    if (value.trim()) { 
      editTodo(value, id);
      
    }
  }

  return (
    <form className='Edit-Todo-form' onSubmit={handleTask}>
      <input type="text" className='todo-input' value={value} placeholder='What am I supposed to update today?'
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>UPDATE</button>
    </form>
  )
}

export default editTodoForm