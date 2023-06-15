import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import img from '../assets/images/images.png';
import Header from './Header';
import axios from 'axios';
export default function Address() {
    const navigate = useNavigate();

    const [addrss, setAddrs] = useState({
        name: "",
        email: "",
        mobileno: "",
        address: "",
        pincode: "",
        city: "",
    });

    const [userValidation, setUserValidation] = useState({
        nameMessage: "",
        emailMessage: "",
        pincodeMessage: "",
        mobilenoMessage: "",
        addressMessage: "",
        cityMessage: "",
    });

    function setUserData(e) {
        e.preventDefault();
        setAddrs({ ...addrss, [e.target.id]: e.target.value });
    }

    function save(e) {
        e.preventDefault();

        let validated = true;
        let nameMessage = "";
        let emailMessage = "";
        let mobilenoMessage = "";
        let pincodeMessage = "";
        let addressMessage = "";
        let cityMessage = "";

        if (addrss.name === "") {
            nameMessage = "Please EnterFirst  Name";
            validated = false;
        }

        if (addrss.email.trim() === "") {
            emailMessage = "Please Enter Email";
            validated = false;
        }
        else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(addrss.email)) {
            emailMessage = "Please Enter Valid Email";
            validated = false;
        }

        if (addrss.mobileno === "") {
            mobilenoMessage = "Please Enter mobile number";
            validated = false;
        }
        else if (!/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/.test(addrss.mobileno)) {
            mobilenoMessage = "Please Enter valid Mobileno";
            validated = false;
        }


        if (addrss.address === "") {
            addressMessage = "Please Enter Address";
            validated = false;
        }

        if (addrss.city === "") {
            cityMessage = "Please Enter Password";
            validated = false;
        }
        if (addrss.pincode === "") {
            pincodeMessage = "Please Enter mobile number";
            validated = false;
        }

        setUserValidation({
            nameMessage: nameMessage,
            emailMessage: emailMessage,
            mobilenoMessage: mobilenoMessage,
            pincodeMessage: pincodeMessage,
            addressMessage: addressMessage,
            cityMessage: cityMessage
        })
        if (validated) {

            if (addrss) {
                axios.post('http://localhost:8081/shippingaddress/', {
                    name: addrss.name,
                    email: addrss.email,
                    mobileno: addrss.mobileno,
                    address: addrss.address,
                    pincode: addrss.pincode,
                    city: addrss.city
                }).then((response) => {
                    if (response) {
                        navigate('/orderplaced');
                    }
                });

            }
        }
    }

    return (
        <div>
            <Header />
            <div className="container text-dark mt-0 ">
                <h1 className='text-center '>shipping Address</h1>

                <div className="row">
                    <div className="col-lg-6 ml-5">
                        <div className="container m-5">
                            <img src={img} className='mt-4 ml-2' width='400px' height='400px' />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Form className=''>

                            <div className="form-group">

                                <label>Enter Name </label>
                                <input type="text" className="form-control" id='name' name='name' placeholder="Enter Name" onChange={(e) => { setUserData(e) }} />
                                <span className='text-danger'>{userValidation.nameMessage}</span>

                            </div>
                            <br />
                            <div className="form-group">
                                <label>Enter your email</label>
                                <input type="email" className="form-control" id='email' name='email' placeholder="Enter email" onChange={(e) => { setUserData(e) }} />
                                <span className='text-danger'>{userValidation.emailMessage}</span>

                            </div>
                            <br />

                            <div className="form-group">
                                <label>Enter  Mobile Number</label>
                                <input type="number" className="form-control" id='mobileno' name='mobileno' placeholder="Enter Your Number" onChange={(e) => { setUserData(e) }} />
                                <span className='text-danger'>{userValidation.mobilenoMessage}</span>

                            </div>
                            <br />

                            <div className="form-group">
                                <label>Address</label>
                                <input type="textarea" className="form-control" id='address' name='address' placeholder="Enter Your Address" onChange={(e) => { setUserData(e) }} />
                                <span className='text-danger'>{userValidation.addressMessage}</span>

                            </div>
                            <br />

                            <div className="form-group">
                                <label> Pincode</label>
                                <input type="number" className="form-control" id='pincode' name='pincode' placeholder="Enter Pincode" onChange={(e) => { setUserData(e) }} />
                                <span className='text-danger'>{userValidation.pincodeMessage}</span>

                            </div>
                            <br />
                            <div className="form-group">
                                <label>Enter City</label>
                                <input type="text" className="form-control" id='city' name='city' placeholder="Enter City" onChange={(e) => { setUserData(e) }} />
                                <span className='text-danger'>{userValidation.cityMessage}</span>

                            </div>
                            <br />

                            <Link to='/orderplaced'><button className="btn btn-primary mb-3 text-left text-white border " value="Place Order" onClick={(e) => { save(e) }} >Place Order</button></Link>

                        </Form>

                    </div>
                </div>
            </div>


        </div>
    )
}
