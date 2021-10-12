import './App.css';
import Header from './components/Header'
import ContactInfo from './components/ContactInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import SkillsMisc from './components/SkillsMisc'
import React from 'react';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      contactInfoEditMode: false,
      educationEditMode: false,
      experienceEditMode: false,
      skillsMiscEditMode: false,
      headerInfo: {
        fullName: 'Ian',
        position: 'Front End Web Developer',
        goal: 'this is where text goals go',
        editMode: false,
      },
      contactInfo: {
        editMode: false,
        email: 'i-a-n-kjera@gmail.com',
        phone: '555-555-5555',
        address: '12345 Cherry Ln Nowhere, AL'
      },
      educationInfo: {
        editMode: false,
        school: "University of Alaska Fairbanks",
        degree: 'BA in Psychology',
        gpa: 3.5,
        graduationYear: 2013
      },
      skillsMiscInfo: {
        editMode: false,
        awards: [
          {
            name: "employee of the quarter",
            location: 'Department of Corrections',
            whenOccurred: 'December, 2021'
          },
          {
            name: "employee of the quarter",
            location: 'Department of Corrections',
            whenOccurred: 'December, 2021'
          }
        ],
        skills:
          [
            'verbal deescalation',
            'firearm proficiency',
            'teamwork'
          ]
      },
      experienceInfo: {
        editMode: false,
        jobs: [
          {
            title: "Community Corrections Officer",
            employer: "Washington State",
            employmentLength: 4,
            duties: 'manage caseload blah blah blah blah',
            id: 0
          }
        ]
      }
    }
    this.handleEditButton = this.handleEditButton.bind(this)
    this.handleAddJob = this.handleAddJob.bind(this)
    this.handleDeleteJob = this.handleDeleteJob.bind(this)
  }

  handleEditButton(e) {
    const { name } = e.target
    const editLabel = `${name}EditMode`
    const sectionInfo = `${name}Info`
    const editModeActive = this.state[sectionInfo].editMode
    if (!editModeActive) {
      this.setState({
        [sectionInfo]: {
          ...this.state[sectionInfo],
          editMode: !this.state[sectionInfo].editMode
        }
      })
    }

    if (editModeActive) {
      this.setState(prevState => {
        let updatedSectionInfo = {}
        for (let [key, value] of Object.entries(prevState[sectionInfo])) {
          if (key === 'jobs') {
            const jobArr = []
            const parentElement = e.target.parentElement
            parentElement.childNodes.forEach(child => {
              if (child.className === 'jobContainer') {
                const job = {}
                child.childNodes.forEach(input => {
                  job[input.name] = input.value ? input.value : input.placeholder
                })
                jobArr.push(job)
              }

            })
            updatedSectionInfo[key] = jobArr
          }
          else {
            for (let input of e.target.parentElement.childNodes) {

              if (key === input.name && input.tagName === "INPUT") {
                if (!input.value) {
                  value = input.placeholder

                }
                else {
                  value = input.value
                }
                updatedSectionInfo[key] = value
              }
            }
          }
        }

        updatedSectionInfo[editLabel] = false
        return { [sectionInfo]: updatedSectionInfo }
      })
    }
  }

  handleAddJob() {
    console.log('clicked add job button!')
    this.setState(prevState => {
      const newJob = {
        title: "Sample Job Here",
        employer: "Employer",
        employmentLength: 'how long employed?',
        duties: 'what did you do?',
        id: prevState.experienceInfo.jobs.length
      }
      const updatedJobs = [...prevState.experienceInfo.jobs, newJob]
      const updatedExperience = { editMode: true }
      updatedExperience.jobs = [...updatedJobs]
      return { experienceInfo: updatedExperience }
    })
  }

  handleDeleteJob(e) {
    const jobToDelete = e.target.parentElement.id
    this.setState(prevState => {
      const updatedExperience = { editMode: true }

      let updatedJobs = prevState.experienceInfo.jobs
        .filter(job => {
          return job.id !== parseInt(jobToDelete)
        })
        .map((job, index) => {
          return {
            id: index,
            title: job.title,
            employer: job.employer,
            employmentLength: job.employmentLength,
            duties: job.duties,
          }
        })


      console.log(updatedJobs)
      updatedExperience.jobs = [...updatedJobs]
      console.log(updatedExperience)
      return { experienceInfo: updatedExperience }
    })
  }

  render() {
    return (
      <div className='appUI'>
        <Header content={this.state.headerInfo} handleEditButton={this.handleEditButton} name='header' />
        <ContactInfo content={this.state.contactInfo} handleEditButton={this.handleEditButton} name='contact' />
        <Experience content={this.state.experienceInfo} handleDeleteJob={this.handleDeleteJob} handleAddJob={this.handleAddJob} handleEditButton={this.handleEditButton} name='experience' />
        <Education content={this.state.educationInfo} handleEditButton={this.handleEditButton} name='education' />
        <SkillsMisc content={this.state.skillsMiscInfo} handleEditButton={this.handleEditButton} name='skillsMisc' />
      </div>
    );
  }

}

export default App;
