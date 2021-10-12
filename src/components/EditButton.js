import React from 'react'
import '../App.css';

function EditButton(props) {
    const { editMode, name } = props
    const editButton = editMode === true ?
        <button name={name}
            className="editButton"
            onClick={(e) => props.handleEditButton(e)}>
            Submit
        </button> :
        <button name={name}
            className="editButton"
            onClick={(e) => props.handleEditButton(e)}>
            Edit
        </button>
    return (
        editButton

    )
}



export default EditButton