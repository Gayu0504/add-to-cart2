import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'


export default function OrderPlaced() {

    return (
        <div>
            <Header/>
            <div className="container bg-light mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className='mt-5 mb-5'>
                         <Link to='/'>   <button className='btn btn-primary'>Log Out</button></Link>
                            <h1 className='text-warning'> Order  Placed</h1>
                            <hr />
                            <h1 className='text-primary'>thank  you...!  </h1>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
