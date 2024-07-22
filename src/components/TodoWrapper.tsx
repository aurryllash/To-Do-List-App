import { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
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
  const isEditing = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {
          ...todo, isEditing: !todo.isEditing 
        } : todo
      )
    )
  }
  const editTodo = (value: string, id: string) => {
    setTodos(todos.map(todo => (
      todo.id === id ? {
        ...todo, task: value, isEditing: !isEditing
      } : todo
    )))
  }
  return (
    <div className='todoWrapper' >
      <TodoForm addTodo={ addTodo }/>
      { todos.map((todo, index) => (
        todo.isEditing ? <EditTodoForm editTodo={editTodo} id={ todo.id } getValue={todo.task} key={todo.id}/> : 
        <Todo makeComplete={ makeComplete } removeTask={ removeTask } isEditing={ isEditing } 
        id={todo.id} task={ todo.task } completed={ todo.completed } key={index}/>
      )) }
    </div>
  )
}

export default TodoWrapper