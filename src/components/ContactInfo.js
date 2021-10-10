import React from 'react'
import '../App.css';
import EditButton from './EditButton'

function ContactInfo(props) {
    const { handleEditButton, name } = props
    const { editMode, email, phone, address } = props.content
    const emailDOM = editMode ? <input type='text' name="email" placeholder={email}></input> : <h2>{email}</h2>
    const phoneDOM = editMode ? <input type='text' name="phone" placeholder={phone}></input> : <h2>{phone}</h2>
    const addressDOM = editMode ? <input type='text' name="address" placeholder={address}></input> : <h2>{address}</h2>
    return (
        <div className="contactInfo sectionContainer">
            {emailDOM}
            {phoneDOM}
            {addressDOM}
            <EditButton editMode={editMode} handleEditButton={handleEditButton} name={name} />
        </div>
    )

}



export default ContactInfo