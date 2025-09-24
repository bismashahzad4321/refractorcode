import React from 'react'

const ReloadBtn = ({relaodOldData}) => {
  return (
    <div>
        <button onClick={relaodOldData}>Reload Item</button>
    </div>
  )
}

export default ReloadBtn