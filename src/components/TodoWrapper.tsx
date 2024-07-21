import { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo';
uuidv4();

interface Todos {
  id: string,
  task: string,
  completed: boolean,
  isEditing: boolean
}
const TodoWrapper = () => {
  const [todos, setTodos] = useState<Todos[]>([])

  const addTodo = (todo: string) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
  }
  const removeTask = (id: string) => {
    setTodos(todos.filter(todo => todo.id != id))
  }
  const makeComplete = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {
          ...todo, completed: !todo.completed 
        } : todo
      )
    )
  }

  return (
    <div className='todoWrapper' >
      <TodoForm addTodo={ addTodo }/>

      { todos.map((todo, index) => (
        <Todo makeComplete={ makeComplete } removeTask={ removeTask } id={todo.id} task={ todo.task } completed={ todo.completed } key={index}/>
      )) }
    </div>
  )
}

export default TodoWrapper