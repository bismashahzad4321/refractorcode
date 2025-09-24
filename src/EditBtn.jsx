import React from 'react'

const EditBtn = ({editBtn, index }) => {
    return (
        <div>
            <button onClick={() => (editBtn(index))} >Edit</button>

        </div>
    )
}

export default EditBtn