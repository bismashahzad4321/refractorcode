import React from 'react'
// import DeleteBtn from './DeleteBtn'
// import EditBtn from './EditBtn'
import Map from './Map'
import AddBtn from './AddBtn'
import Message from './Message'
const InputData = ({ task, setTask, array, addBtn, deleteBtn, editBtn, edit, message, }) => {
    return (
        <div>
            <input type="text" placeholder='Enter Your Task'
                value={task} onChange={(e) => setTask(e.target.value)}
            />
            {/* <button onClick={addBtn}>{edit !== null ? "Update" : "Add"}</button> */}
            <AddBtn addBtn ={addBtn} edit={edit}/>
            {/* <p>{message}</p> */}
            <Message message={message}/>
            {/* {array.map((item, i) => (
                <div key={i}>{item}
                    <button onClick={() => (deleteBtn(i))} >Delte</button>
                    <DeleteBtn  deleteBtn={deleteBtn} index={i} />
                    <button onClick={() => (editBtn(i))} >Edit</button>
                    <EditBtn  editBtn={editBtn} index={i}/>
                </div>
            ))
            } */}
            <Map array={array} deleteBtn={deleteBtn} editBtn={editBtn} />
        </div>
    )
}

export default InputData