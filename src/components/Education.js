import React from 'react'
import '../App.css';
import EditButton from './EditButton'

function Education(props) {
    const { handleEditButton, name } = props
    const { editMode, school, gpa, degree, graduationYear } = props.content
    const schoolDOM = editMode ? <input type='text' name="school" placeholder={school}></input> : <h2>{school}</h2>
    const gpaDOM = editMode ? <input type='text' name="gpa" placeholder={gpa}></input> : <h2>GPA: {gpa}</h2>
    const degreeDOM = editMode ? <input type='text' name="degree" placeholder={degree}></input> : <h2>{degree}</h2>
    const graduationYearDOM = editMode ? <input type='text' name="graduationYear" placeholder={graduationYear}></input> : <h2>{graduationYear}</h2>
    return (
        <div className="education sectionContainer" >
            {schoolDOM}
            {degreeDOM}
            {gpaDOM}
            {graduationYearDOM}
            <EditButton editMode={editMode} handleEditButton={handleEditButton} name={name} />
        </div>
    )

}



export default Education