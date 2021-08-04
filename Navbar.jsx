import React from 'react'
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav-bg ">
                <div className="row">
                    <div className='col-10 mx-auto'>

                        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">React User</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mr-3">

                                        <li className="nav-item">
                                            <NavLink title='Home' className="nav-link active" aria-current="page" exact to="/"><span className='navHover'>
                                                Home    </span> </NavLink>
                                        </li>
                                    </ul>
                                    <form className="d-flex">
                                        <Link title='Add New User' className="addUser btn btn-outline-light" exact to='/newuser' >Add New Employee</Link>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar;