import React from 'react'
import '../App.css';
import EditButton from './EditButton'

function SkillsMisc(props) {

    const { handleEditButton, name } = props
    const { skillsMiscEditMode } = props.content
    return (
        <div className="skillsMisc sectionContainer">
            <h2>Skills and Awards</h2>
            <h2>Skills and Awards</h2>
            <h2>Skills and Awards</h2>
            <EditButton editMode={skillsMiscEditMode} handleEditButton={handleEditButton} name={name} />
        </div>
    )

}



export default SkillsMisc