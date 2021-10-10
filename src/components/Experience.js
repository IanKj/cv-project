import React from 'react'
import '../App.css';
import EditButton from './EditButton'

function Experience(props) {
    const { handleEditButton, name } = props
    const { editMode, jobs } = props.content
    let jobsDOM = []
    jobs.forEach((job, index) => {
        const { title, duties, employer, employmentLength } = job
        const titleDOM = editMode ? <input type='text' name="title" placeholder={title}></input> : <h2>{title}</h2>
        const employerDOM = editMode ? <input type='text' name="employer" placeholder={employer}></input> : <h2>{employer}</h2>
        const employmentLengthDOM = editMode ? <input type='text' name="employmentLength" placeholder={employmentLength}></input> : <h2>Employment Length: {employmentLength} years</h2>
        const dutiesDOM = editMode ? <input type='text' name="duties" placeholder={duties}></input> : <h2>{duties}</h2>
        jobsDOM.push(<div className='jobContainer' key={`job${index}`}>
            {titleDOM}
            {employerDOM}
            {employmentLengthDOM}
            {dutiesDOM}
        </div>)



    })
    return (
        <div className="experience sectionContainer">
            <h1>Experience</h1>
            {jobsDOM}
            <EditButton editMode={editMode} handleEditButton={handleEditButton} name={name} />
        </div>
    )

}



export default Experience