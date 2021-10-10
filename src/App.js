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
      },
      experienceInfo: {
        editMode: false,
        jobs: [
          {
            title: "Community Corrections Officer",
            employer: "Washington State",
            employmentLength: 4,
            duties: 'manage caseload blah blah blah blah'
          }
        ]


      }
    }
    this.handleEditButton = this.handleEditButton.bind(this)
  }

  handleEditButton(e) {
    const { name } = e.target
    console.log(name)
    console.log(e.target.parentElement)
    const editLabel = `${name}EditMode`
    const sectionInfo = `${name}Info`
    console.log(sectionInfo)
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
            const parentElement = e.target.parentElement
            parentElement.childNodes.forEach(child => {
              if (child.className === 'jobContainer') {
                child.childNodes.forEach(input => {
                  console.log(input)
                })

              }
            })
            const currJobs = prevState[sectionInfo][key]
            currJobs.forEach(job => {
            })
          }
          else {
            for (let input of e.target.parentElement.childNodes) {

              if (key === input.name && input.tagName === "INPUT") {
                console.log('inside if statement')
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

  render() {
    return (
      <div className='appUI'>
        <Header content={this.state.headerInfo} handleEditButton={this.handleEditButton} name='header' />
        <ContactInfo content={this.state.contactInfo} handleEditButton={this.handleEditButton} name='contact' />
        <Experience content={this.state.experienceInfo} handleEditButton={this.handleEditButton} name='experience' />
        <Education content={this.state.educationInfo} handleEditButton={this.handleEditButton} name='education' />
        <SkillsMisc content={this.state.skillsMiscInfo} handleEditButton={this.handleEditButton} name='skillsMisc' />
      </div>
    );
  }

}

export default App;
