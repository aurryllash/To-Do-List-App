import React from 'react'

const todoForm = () => {
  return (
    <form className='todo-form'>
      <input type="text" className='todo-input' placeholder='What am I supposed to do today?'/>
      <button type='submit' className='todo-btn'>Do It</button>
    </form>
  )
}

export default todoForm