import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUser] = useState([])

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3001/users')
        // setUser(result.data.reverse())
        setUser(result.data.reverse());
        // console.log(result.data)
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        // if(window.confirm('Are you sure to delete this record ?')
        // == true)
        // {
        //     return true
        // } else {
        //     return false;
        // }   
        alert('Your Record going to be deleted!')
        loadUsers();
    }
    return (
        <>
            <div className='container'>
                <h2 className='text-center text-info'>
                    Company Members
                </h2>
                <table class="table table-primary  table-striped table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email ✉</th>
                            <th scope="col">Contact No. 📲</th>
                            <th scope="col">Website ✉</th>
                            <th scope="col">Username 🤵</th>
                            {/* <th scope="col">Company</th> */}

                            <th className='d-flex justify-content-center'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.username}</td>
                                {/* <td>{user.company.name}</td> */}

                                <td className='d-flex justify-content-center'>
                                    <Link title='User Detail' className='button btn btn-outline-secondary' to={`/users/${user.id}`}>
                                        <i className="fas fa-eye">
                                        </i>
                                    </Link>
                                    <Link title='Update' to={`/edituser/${user.id}`} className='button btn btn-outline-primary'>

                                        <i className="fas fa-edit">
                                        </i>
                                    </Link>
                                    <Link title='Delete' className='button btn btn-outline-danger '
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        <i class="fas fa-trash-alt">
                                        </i>
                                    </Link>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                    {/* <tr><th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>*/}
                </table>

            </div>
        </>
    )
}

export default Home