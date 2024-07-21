import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Todos {
  task: string,
  id: string,
  removeTask: (id: string) => void,
  makeComplete: (id: string) => void,
  completed: boolean
}
const Todo = ({ id, task, removeTask, makeComplete, completed }: Todos) => {
  return (
    <div className='TodoComp'>
      <div className='Todo'>
      <p className={ completed === true ? 'text-white completed' : "text-white" }
        onClick={() => makeComplete(id)}>{ task }</p>
      <div>
      <FontAwesomeIcon icon={ faPenToSquare } className='FontAwesomeIcon'  onClick={() => console.log(id)}/>
      <FontAwesomeIcon icon={ faTrash } className='FontAwesomeIcon' onClick={() => removeTask(id)}/>
      </div>
      </div>
    </div>
  )
}

export default Todo