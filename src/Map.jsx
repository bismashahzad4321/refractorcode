import React from 'react'
import EditBtn from './EditBtn'
import DeleteBtn from './DeleteBtn'
const Map = ({array, deleteBtn, editBtn}) => {
  return (
    <div>
        {array.map((item, i) => (
                <div key={i}>{item}
                    {/* <button onClick={() => (deleteBtn(i))} >Delte</button> */}
                    <DeleteBtn  deleteBtn={deleteBtn} index={i} />
                    {/* <button onClick={() => (editBtn(i))} >Edit</button> */}
                    <EditBtn  editBtn={editBtn} index={i}/>
                </div>
            ))
            }
    </div>
  )
}

export default Map