import React from 'react'

const DeleteBtn = ({deleteBtn, index}) => {
  return (
    <div>
         <button onClick={() => (deleteBtn(index))} >Delte</button>
    </div>
  )
}

export default DeleteBtn