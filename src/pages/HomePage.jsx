import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EmployeesComp from '../components/EmployeesComp'

const HomePage = () => {
  const [employees, getEmployees] = useState([])
  const getApiData = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Company/SwandersAuto'
    )
    console.log(resp.data)
    getEmployees(resp.data)
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <>
      <h1>Hi</h1>
      <ul>
        {employees.map((CurrentEmployee, index) => {
          return (
            <EmployeesComp
              id={CurrentEmployee.id}
              key={CurrentEmployee.id}
              firstName={CurrentEmployee.firstName}
              lastName={CurrentEmployee.lastName}
            />
          )
        })}
      </ul>
    </>
  )
}

export default HomePage
