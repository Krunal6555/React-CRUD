import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const DisplayUser = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phoneNo: '',
        url: '',
        userName: ''
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(res.data);
    };
    return (
        <>
            <div className="container py-2">
                <Link className="fullwidth btn btn-outline-info" to="/">
                    <i class="fas fa-arrow-circle-left"> Back</i>
                </Link>
                <hr />
                <h1 className="display-5">User Id: {id}</h1>
                <hr />
                <ul className="list-group w-50">
                    <div className=" input-group-prepend">
                        <li className="list-group-item">
                            <div className=' '>
                                <span className="fw-bolder ">Name : </span> {user.name}
                            </div>

                        </li>
                        <br />
                        {/*  */}

                        <div className='list-group-text'>
                            <li className="list-group-item">
                                <span className="fw-bolder ">Email :</span> {user.email}
                            </li>
                        </div>

                        <br />
                        <div className='list-group-text'>

                            <li className="list-group-item">
                                <span className=" fw-bolder">Contact No. :</span> {user.phoneNo}

                            </li>
                        </div>

                        {/* <br /> */}
                        <br />
                        <div className='list-group-text'>
                            <li className="list-group-item">
                                <span className=" fw-bolder">Website : </span> {user.url}
                            </li>
                        </div>
                        <br />

                        <div className='list-group-text'>
                            <li className="list-group-item">
                                <span className=" fw-bolder">Username : </span> {user.userName}

                            </li>
                        </div>


                    </div>
                </ul>
            </div>
        </>
    )
}

export default DisplayUser
