import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'

export default function Header() {
    const { carts } = useSelector((state) => state.product);

    return (
        <div>
            <Navbar bg="secondary" expand="sm" className='border'>
                <Container>
                    <Navbar.Brand>
                        <div className='container'>
                            <img src={require('../assets/images/logo2.jpg')} height='70px' width='80px' />
                            <h6 className='text-center   text-dark hover  text-white ' style={{ cursor: 'pointer' }}>Shopping Cart</h6>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <div className='container text-right ' >
                    <div className="row ">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-2"><br />
                            <Link to='/orderdetails'>
                                <button className='btn btn-primary   text-white m-2 text-end' style={{ display: 'flex', justifyContent: 'right' }} data-toggle="tooltip" data-placement="bottom" title="cart" >
                                &nbsp;Cart<sub><span class="badge rounded-pill bg-warning text-white">{carts.length}</span></sub>    </button></Link>
                                
                        </div>
                    </div>
                </div>
            </Navbar>

            <div className="col-lg-10 mx-auto">
                <Outlet />
            </div>


        </div>
    )
}
