import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// import  from 'react'

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState(
        {
            name: '',
            email: '',
            phoneNo: '',
            userName: '',
            url: ''
        });

    // object destructuring
    const { name, email, phoneNo,  userName, url } = user;

    const onInputChange = (e) => {
        // console.log(e.target.value);
        setUser({...user,
            [e.target.name]: e.target.value
        });

    };

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3001/users', user);
        history.push("/");
    };
    return (
        <>
            <div className='container'>
                <h1 className='d-flex justify-content-center'>Add New User</h1>
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
                                <input type="number" className=" m-2  form-control" name='phoneNo' 
                                placeholder="Phone Number" 
                                value= { phoneNo }
                                    onChange={(e) => {
                                        onInputChange(e)
                                    }} />
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
                        <button className="col-10 btn fullwidth btn-outline-info" >Add User</button>
                    </div>
                </form>
            </div>

        </>
    );
};
export default AddUser;









{/* <form onsubmit=" onFormSubmit();" className="inline" autocomplete="off">
                <div className="form-group">

                    <div className="form-row">

                        <div className="col">

                            <div className="input-group mt-2 md-2 input-group-sm">
                                <div className="input-group-prepend">
                                    <div className="validation-error hide" >
                                        <span className="input-group-text">Employee Name</span>
                                    </div>
                                </div>
                                <input type="text" className="form-control"  contenteditable="true"
                                    name="fullNname" name = 'name' value = {}                         onChange = { (e) => {
                            onInputChange(e)
                        }} placeholder="Emp name..." required />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col">
                            <div className="input-group mt-5 md-2 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Email Id</span>
                                </div>
                                <input type="email" className="form-control" name = 'name' value = {}                         onChange = { (e) => {
                            onInputChange(e)
                        }} placeholder="@gmail.com"  />
                            </div>
                        </div>

                        <div className="col">
                            <div className="input-group mt-5 mb-2 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" >Phonoe Number</span>
                                </div>
                                <input type="number" className="form-control"  name = 'name' value = {}                         onChange = { (e) => {
                            onInputChange(e)
                        }} placeholder="(+91) 00000-00000" required />
                            </div>
                        </div>
                    </div>



                    <textarea name="address"  cols="150" rows="4" name = 'name' value = {}                         onChange = { (e) => {
                            onInputChange(e)
                        }} placeholder="Address..."></textarea>

                    <div className="form-row">
                        <div className="col">
                            <div className="input-group mt-2 md-2 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text city">City</span>
                                </div>
                                <input type="text" className="form-control"  />
                            </div>
                        </div>


                        <div className="col">
                            <div className="input-group mt-2 md-2 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">State</span>
                                </div>
                                <input type="text" className="form-control"  />
                            </div>
                        </div>
                    </div>


                    <div className="input-group mt-2 md-2 input-group-sm">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Employee ID</span>
                        </div>
                        <input type="number" className="form-control"  name = 'name' value = {}                         onChange = { (e) => {
                            onInputChange(e)
                        }} placeholder="EmployeeID..." required />
                    </div>



                    <div className="input-group mt-2 md-2 input-group-sm">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Employee Salary</span>
                        </div>
                        <input type="number" className="form-control"  name = 'name' value = {}                         onChange = { (e) => {
                            onInputChange(e)
                        }} placeholder="Salary..." required />
                    </div>

                

                </div>
        </form> */}
