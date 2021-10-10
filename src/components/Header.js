import React from 'react'
import '../App.css';
import EditButton from './EditButton'

function Header(props) {
    let { fullName, position, goal, editMode } = props.content
    const { handleEditButton, name } = props
    const nameHeader = editMode ? <input type='text' name="fullName" placeholder={fullName}></input> : <h1>{fullName}</h1>
    const positionHeader = editMode ? <input type='text' name="position" placeholder={position}></input> : <h2>{position}</h2>
    const goalDescription = editMode ? <input type='text' name="goal" placeholder={goal}></input> : <p>{goal}</p>

    return (
        <div className="header sectionContainer">
            {nameHeader}
            {positionHeader}
            {goalDescription}
            <EditButton editMode={editMode} handleEditButton={handleEditButton} name={name} />
        </div>
    )
}



export default Header