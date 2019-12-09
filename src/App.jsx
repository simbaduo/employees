import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import NewEmployeePage from './pages/NewEmployeePage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import EmployeeDetails from './pages/EmployeeDetails'

const App = () => {
  return (
    <Router>
      <header className="backgroundHeader">
        <h1>The Incredible Company</h1>
        <nav>
          <ul className="navList">
            <li className="navLi">
              <Link to="/">About</Link>
            </li>
            <li className="navLi">
              <Link to="/1">Employee Page</Link>
            </li>
            <li className="navLi">
              <Link to="/Employee/NewEmployee">Add New Employee</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/:id" component={EmployeeDetails}></Route>
        <Route
          exact
          path="/Employee/NewEmployee"
          component={NewEmployeePage}
        ></Route>
        {/* <Route path="*" component={NotFound}></Route> */}
      </Switch>
    </Router>
  )
}

export default App
