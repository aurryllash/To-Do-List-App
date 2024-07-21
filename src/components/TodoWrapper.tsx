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
  console.log(todos)
  return (
    <div className='todoWrapper' >
      <TodoForm addTodo={ addTodo }/>
      { todos.map((todo, index) => (
        <Todo task={ todo.task }/>
      )) }
    </div>
  )
}

export default TodoWrapper