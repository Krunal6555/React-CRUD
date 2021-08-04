import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
// import { NavLink, Link } from 'react-router-dom';
// import  from 'react'

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState(
        {
            name: '',
            email: '',
            phoneNo: '',
            url: '',
            userName: ''
        });

    // object destructuring
    const { name, email, phoneNo, userName, url } = user;

    const onInputChange = (e) => {
        // console.log(e.target.value);
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    };

    useEffect(() => {
        loadUser();
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3001/users/${id}`, user);
        history.push("/");
    };


    // const Update = () => {
    //     alert('User Updated')
    // }
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
    }

    return (
        <>
        {/* Dark Navbar  */}
            {/* <div className="container-fluid nav-bg ">
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
 */}

{/* Edit User */}
             <div className='container'>
                <h1 className='d-flex justify-content-center'>Edit New User</h1>
                {/* 1 */}

                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="col">
                        <div className="input-group  input-group-sm">
                            <div className=" input-group-prepend">
                                <span className="mb-2 p-2 input-group-text">Employee Name</span>
                            </div>
                            <input type="name" className=" m-2  form-control" name='name' value={name}
                                onChange={(e) => {
                                    onInputChange(e)
                                }}
                                placeholder="Employee Name..." required />
                        </div>
                    </div>
                    <br />
                    <br />

                    <div className="row">
                        {/* 2 */}
                        <div className="col">
                            <div className="input-group  input-group-sm">
                                <div className=" input-group-prepend">
                                    <span className="mb-2 p-2 input-group-text">Email Id</span>
                                </div>
                                <input type="email" className=" m-2 form-control" name='email' value={email} onChange={(e) => {
                                    onInputChange(e)
                                }} placeholder="@gmail.com" />
                            </div>
                        </div>
                        {/* 3 */}

                        <div className="col">
                            <div className="input-group  input-group-sm">
                                <div className=" input-group-prepend">
                                    <span className="mb-2 p-2 input-group-text">Contact No.</span>
                                </div>
                                <input type="number" className=" m-2  form-control" name='phoneNo' value={phoneNo}
                                    onChange={(e) => {
                                        onInputChange(e)
                                    }} placeholder="Phone Number" />
                            </div>
                        </div>
                    </div>

                    <br />
                    <br />
                    {/* 4 */}
                    {/* <div className="col">
                            <div className="input-group  input-group-sm">
                                <div className=" input-group-prepend">
                                    <span className="mb-2 p-2 input-group-text">Company</span>
                                </div>
                                <input type="name" className=" m-2  form-control" name='cmpName' value={cmpName} onChange={(e) => {
                                    onInputChange(e)
                                }} placeholder="Company Name" />
                            </div>
                        </div> */}
                    {/* 5 */}

                    <div className='row'>
                        <div className="col">
                            <div className="input-group  input-group-sm">
                                <div className=" input-group-prepend">
                                    <span className="mb-2 p-2 input-group-text">Username</span>
                                </div>
                                <input type="name" className=" m-2  form-control" name='userName' value={userName} onChange={(e) => {
                                    onInputChange(e)
                                }} placeholder="xyz12@#4" required />
                            </div>
                        </div>

                        <br />
                        <br />
                        {/* 7 */}
                        <div className="col">
                            <div className="input-group  input-group-sm">
                                <div className=" input-group-prepend">
                                    <span className="mb-2 p-2 input-group-text">Company URL</span>
                                </div>
                                <input type="url" className=" m-2  form-control" name='url' value={url} onChange={(e) => {
                                    onInputChange(e)
                                }} placeholder="Paste URL Here..." required />
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />

                    <div className='d-flex justify-content-center'>
                        <button className="col-10 btn fullwidth btn-outline-secondary"
                        // onClick = {Update}
                        >Edit User</button>
                    </div>
                </form>
            </div>

        </>
    )
}
export default EditUser
