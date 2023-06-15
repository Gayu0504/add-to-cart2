import React from 'react'
import {  Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img from '../assets/images/images.png';
export default function Address() {

    return (
        <div>
            <div className="container text-dark mt-0 ">
                <h1 className='text-center '>Shipping Address</h1>

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
                                <input type="text" className="form-control" id='name' placeholder="Enter Name" required />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Enter your email</label>
                                <input type="email" className="form-control" id='last' placeholder="Enter email" required />
                            </div>
                            <br />

                            <div className="form-group">
                                <label>Enter  Mobile Number</label>
                                <input type="number" className="form-control" id='mobile' placeholder="Enter Your Number" required />
                            </div>
                            <br />

                            <div className="form-group">
                                <label>Address</label>
                                <input type="textarea" className="form-control" id='address' placeholder="Enter Your Address" required />
                            </div>
                            <br />

                            <div className="form-group">
                                <label> Pincode</label>
                                <input type="number" className="form-control" id='pincode' placeholder="Enter Pincode" required />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Enter City</label>
                                <input type="text" className="form-control" id='city' placeholder="Enter City" required />
                            </div>
                            <br />

                            <Link to='/orderplaced'><button className="btn btn-primary mb-3 text-left text-white border " value="Place Order" >Place Order</button></Link>

                        </Form>

                    </div>
                </div>
            </div>
            

        </div>
    )
}
