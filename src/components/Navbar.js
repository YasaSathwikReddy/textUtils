import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form> */}
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className={`form-check-label text-${props.mode==='light'? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                        {/* <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Themes
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" onClick={props.darkMode}>Dark Mode</a></li>
                                <li><a className="dropdown-item" onClick={props.lightMode}>Light Mode</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.protoTypes = {
    title: PropTypes.string,
    about: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "Set title here",
    about: "About Text",
}