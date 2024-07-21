import React, { useState, FormEvent } from 'react'

interface TodoFormProps {
  addTodo: (todo: string) => void
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [value, setValue] = useState<string>('')
  const handleTask = (event: FormEvent) => {
    event.preventDefault();

    if (value.trim()) { 
      addTodo(value);
      setValue('');
    }
  }
  return (
    <form className='Todo-form' onSubmit={handleTask}>
      <input type="text" className='todo-input' value={value} placeholder='What am I supposed to do today?'
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>Add It</button>
    </form>
  )
}

export default TodoForm