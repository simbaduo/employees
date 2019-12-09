import React from 'react'
import { Link } from 'react-router-dom'

const EmployeesComp = props => {
  return (
    <>
      <li>
        <Link to={`/${props.id}`}>{props.firstName}</Link>
      </li>
      <li>{props.lastName}</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </>
  )
}

export default EmployeesComp
