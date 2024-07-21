import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Todos {
  task: string,
}
const Todo = ({ task }: Todos) => {
  return (
    <div className='TodoComp'>
      <div className='Todo'>
      <p className='text-white'>{ task }</p>
      <div>
      <FontAwesomeIcon icon={ faPenToSquare } className='FontAwesomeIcon'/>
      <FontAwesomeIcon icon={ faTrash } className='FontAwesomeIcon'/>
      </div>
      </div>
      
    </div>
  )
}

export default Todo