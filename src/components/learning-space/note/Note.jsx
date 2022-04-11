import React from 'react'

const Note = () => {
  return (
    <div>
        <input type="text" disabled placeholder='Create new note at '/>
        <div className="list-note-container col">
            <div className="note-header row">
                <div className="at-time col col-sm-1">
                    5:01
                </div>
                <div className="of-course col col-sm-9">
                    Learning HTML
                </div>
                <div className="note-action col col-sm-2">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div className="note-content row">
                <div className="col col-sm-1">

                </div>
                <div className="col col-sm-11">
                    This is to ...
                </div>
            </div>
        </div>
    </div>
  )
}

export default Note