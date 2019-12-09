import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EmployeeDetails = props => {
  const [singleEmployee, setSingleEmployee] = useState({})
  const getApiData = async () => {
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/SwandersAuto/Employees/${props.match.params.id}`
    )
    console.log(resp.data.firstName)
    setSingleEmployee(resp.data)
  }

  useEffect(() => {
    getApiData()
  }, [props.match.params.id])

  return (
    <>
      <div>
        <ul>
          <li>{singleEmployee.firstName}</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  )
}

export default EmployeeDetails
