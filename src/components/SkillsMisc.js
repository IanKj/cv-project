import React from 'react'
import '../App.css';
import EditButton from './EditButton'

function SkillsMisc(props) {

    const { handleEditButton, name } = props
    const { editMode, skills, awards } = props.content
    console.log(props.content)
    const skillsDOM = skills.map(skill => {
        return editMode ?
            <input
                type='text'
                name="skill"
                placeholder={skill}>
            </input> :
            <li>{skill}</li>
    })

    const awardsDOM = awards.map(award => {
        return editMode ?
            <div>
                <input
                    type='text'
                    name={`${award.name}`}
                    placeholder={award.name}>
                </input>
                <input
                    type='text'
                    name={`${award.location}`}
                    placeholder={award.location}>
                </input>
                <input
                    type='text'
                    name={`${award.whenOccurred}`}
                    placeholder={award.whenOccurred}>
                </input>
            </div>
            : <div>
                <ul>
                    <li>{award.name}</li>
                    <li>{award.location}</li>
                    <li>{award.whenOccurred}</li>
                </ul>
            </div>


    })


    return (
        <div className="skillsMisc sectionContainer">
            <h2>Awards</h2>
            <div>{awardsDOM}</div>
            <h2>Skills</h2>
            <ul>{skillsDOM}</ul>


            <EditButton editMode={editMode} handleEditButton={handleEditButton} name={name} />
        </div>
    )

}



export default SkillsMisc