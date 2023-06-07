import React from 'react'

function Todocount({todolist}) {
  return (
    <div>
        <h1 className="display-4">Count</h1>
        <p>{todolist.length}</p>
    </div>
  )
}

export default Todocount