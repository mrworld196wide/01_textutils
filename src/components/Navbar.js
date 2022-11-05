import React from 'react'
import PropTypes from 'prop-types' //using snippet impt

export default function Navbar(props)   //using snippet rfc
{
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>  {/* template literals here */}
      <div className="container-fluid">
        <a className="navbar-brand" href="/"> {props.title} </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"> {props.aboutText} </a>
            </li>
          </ul>
          {/* ternary operator is used here along with template literals*/}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} `}>   
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode}</label>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          </div>
        </div>
      </div>
    </nav>
  )
}

// proptypes
Navbar.propTypes = { //it sets properties of props so here it is restricting args to be string type only
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string //used snippet pts to get PropTypes.string
}

/*
To set default propTypes use 
Navbar.defaultProps = {
    title: "Navbar 101",
    aboutText: "About Navbar"
}
*/
