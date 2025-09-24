import React, { useEffect, useState } from 'react'
import ResetButton from './ResetButton'
import ReloadBtn from './ReloadBtn'
import InputData from './InputData'
import "./App.css"
const Input = () => {
    const [task, setTask] = useState("")
    const [array, setArray] = useState([])
    const [message, setMessage] = useState("")
    const [edit, setEdit] = useState(null)


    useEffect(() => {
        const getData =
            localStorage.getItem("Task")
        if (getData) {
            setArray(JSON.parse(getData))

        }
    }, [])

    const addBtn = () => {
        if (task.length === 0) {
            setMessage("No Task Avaliable")
        }
        else if (array.includes(task)) {
            setMessage("Task Has Already Added")
        }
        else if (edit !== null) {
            const update = [...array]
            update[edit] = task
            setArray(update)
            setEdit(null)
            setTask("")
            setMessage("Your Task Has Been Edited")
            localStorage.setItem("Task", JSON.stringify(update))

        }
        else {
            const updatedArray = [...array, task];
            setArray(updatedArray);
            setTask("")
            setMessage("Your Task Has Been Saved")
            localStorage.setItem("Task", JSON.stringify(updatedArray))

        }

    }
    const deleteBtn = (i) => {
        const update = [...array]
        update.splice(i, 1)
        setArray(update)
        // localStorage.setItem("Task", JSON.stringify(update))

    }

    const editBtn = (index) => {
        setTask(array[index])
        setEdit(index)
        setMessage("Task in Edit Mode")
    }

    const reloadOldData = () => {
        const reloadData = localStorage.getItem("Task")
        if (reloadData) {
            setArray(JSON.parse(reloadData))
            setMessage("Old Data Reloaded")
        }
        else {
            setMessage("No Data Found")
        }
    }

    const resetBtn = () => {
        setArray([])
        setMessage("All Task Cleared")
        localStorage.removeItem("Task")
    }
    return (
        <div className='mainDiv'>
            {/* <input type="text" placeholder='Enter Your Task'
                value={task} onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addBtn}>{edit !== null ? "Update" : "Add"}</button>
            <p>{message}</p>
            {array.map((item, i) => (
                <div key={i}>{item}
                    <button onClick={() => (deleteBtn(i))} >Delte</button>
                    <button onClick={() => (editBtn(i))} >Edit</button>
                </div>
            ))
            } */}
            {/* <button onClick={resetBtn}>Delet All Task Permanently</button> */}
            <InputData className='inputData' task={task}
                setTask={setTask}
                array={array}
                addBtn={addBtn}
                deleteBtn={deleteBtn}
                editBtn={editBtn} edit={edit} message={message} />
            <ResetButton clearAll={resetBtn} />
            {/* <button onClick={reloadOldData}>Reload Item</button> */}
            <ReloadBtn relaodOldData={reloadOldData} message={message} />

        </div>
    )
}

export default Input