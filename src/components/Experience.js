import React from 'react'
import '../App.css';
import EditButton from './EditButton'

function Experience(props) {
    const { handleEditButton, handleAddJob, handleDeleteJob, name } = props
    const { editMode, jobs } = props.content
    let jobsDOM = []
    jobs.forEach((job, index) => {
        const { title, duties, employer, employmentLength, id } = job
        const titleDOM = editMode ?
            <input
                type='text'
                name="title"
                placeholder={title}>
            </input> :
            <h2>{title}</h2>
        const employerDOM = editMode ?
            <input
                type='text'
                name="employer"
                placeholder={employer}>
            </input> :
            <h3>{employer}</h3>
        const employmentLengthDOM = editMode ?
            <input
                type='text'
                name="employmentLength"
                placeholder={employmentLength}>
            </input> :
            <h3>Employment Length: {employmentLength} years</h3>
        const dutiesDOM = editMode ?
            <input
                type='text'
                name="duties"
                placeholder={duties}>
            </input> :
            <h3>{duties}</h3>

        const deleteJobButton = editMode ?
            <button
                className="deleteJobButton"
                onClick={(e) => handleDeleteJob(e)}>
                Delete this job
            </button> :
            ''

        jobsDOM.push(<div className='jobContainer' id={id} key={`job${index}`}>
            {titleDOM}
            {employerDOM}
            {employmentLengthDOM}
            {dutiesDOM}
            {deleteJobButton}
        </div>)
    })

    const addJobButton = editMode ?
        <button
            className="addJobButton"
            onClick={e => handleAddJob()}
        >Add Job</button> :
        ""


    return (

        <div className="experience sectionContainer">
            <h1>Experience</h1>
            {jobsDOM}
            <EditButton editMode={editMode} handleEditButton={handleEditButton} name={name} />
            {addJobButton}
        </div>
    )

}



export default Experience