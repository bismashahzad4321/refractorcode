import React from 'react'

const ResetButton = ({ clearAll }) => {
    return (
        <div>
            <button onClick={clearAll}>Delet All Task Permanently</button>
        </div>
    )
}

export default ResetButton