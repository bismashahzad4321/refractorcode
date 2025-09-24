import React from 'react'

const AddBtn = ({addBtn, edit}) => {
  return (
    <div>
        <button onClick={addBtn}>{edit !== null ? "Update" : "Add"}</button>
    </div>
  )
}

export default AddBtn