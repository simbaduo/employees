import React, { useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

const NewEmployeePage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [hiredate, setHireDate] = useState('')
  const [jobtitle, setJobTitle] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  // const [pto, setPto] = useState()
  // const [image, setImage] = useState('')

  const submitFunction = async e => {
    e.preventDefault()
    const response = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/SwandersAuto/Employees',
      {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        hiredDate: hiredate,
        jobTitle: jobtitle,
        jobDescription: description,
        address: address,
        phoneNumber: number,
        email: email,
        emergencyContactPerson: contact,
        // ptoHours: pto,
        // profileImage: image,
      }
    )
    // const resp = response.data.results
  }

  return (
    <>
      <h2>Add New Employee!</h2>
      <div className="formPageContainer">
        <form onSubmit={submitFunction} className="addEmployeeForm">
          <input
            type="text"
            // name="fname"
            placeholder="First Name"
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value)
            }}
          />
          <input
            type="text"
            // name="fname"
            placeholder="Last Name"
            value={lastName}
            onChange={e => {
              setLastName(e.target.value)
            }}
          />
          <input
            type="date"
            min="1960-01-01"
            max="2020-01-01"
            // name="bday"
            placeholder="Birthday"
            value={birthday}
            onChange={e => {
              setBirthday(e.target.value)
            }}
          />
          <input
            type="date"
            // name="hire"
            value={hiredate}
            placeholder="Hired Date"
            onChange={e => {
              setHireDate(e.target.value)
            }}
          />
          <input
            type="text"
            // name="jobtitle"
            value={jobtitle}
            placeholder="Job Title"
            onChange={e => {
              setJobTitle(e.target.value)
            }}
          />
          <input
            type="text"
            // name="description"
            value={description}
            placeholder="Job Description"
            onChange={e => {
              setDescription(e.target.value)
            }}
          />
          <input
            type="text"
            // name="address"
            value={address}
            placeholder="Full Address"
            onChange={e => {
              setAddress(e.target.value)
            }}
          />
          <input
            type="text"
            // name="number"
            value={number}
            placeholder="Phone Number"
            onChange={e => {
              setNumber(e.target.value)
            }}
          />
          <input
            type="text"
            // name="email"
            placeholder="E-mail"
            value={email}
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
          <input
            type="text"
            // name="contact"
            placeholder="Emergency Contact"
            value={contact}
            onChange={e => {
              setContact(e.target.value)
            }}
          />
          {/* <input
            type="number"
            // name="pto"
            placeholder="PTO Hours"
            value={pto}
            onChange={e => {
              setPto(e.target.value)
            }}
          /> */}
          {/* <input
            type="text"
            name="image"
            placeholder="Profile Image"
            value={image}
            onChange={e => {
              setImage(e.target.value)
            }}
          /> */}
          <div className="submitContainer">
            {/* <input type="submit" value="Submit" title="Upload Profile Pic" /> */}
            <button type="submit">Submit Here</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default NewEmployeePage
