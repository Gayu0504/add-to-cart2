import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './Header';

export default function Order() {

    const { carts } = useSelector((state) => state.product);
    console.log(carts);
    let [total, setTotal] = useState(0);

    function calculateTotal(pd) {
        let t = 0;
        carts.map((p) => {
            if (pd === p.id) {
                console.log(p.qty, p.price);
                t += p.qty * p.price;
                console.log(typeof t);
            }
            return true;
        });
        totalCalculation();

    }
    const totalCalculation = () => {
        let grantTotal = 0;

        carts.map((prod, i) => {
            grantTotal += (prod.qty * prod.price)
            return true;
        })
        console.log(grantTotal);
        setTotal(grantTotal);
    }

    useEffect(() => {
        calculateTotal();
    }, [])

    return (
        <div>

            <Header />


            <br />

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr className='bg-info text-white'>
                                    <th>No.</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>

                                </tr>

                            </thead>
                            <tbody>
                                {
                                    carts.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td><img height={"80px"} src={item.thumbnail} alt="" />
                                                    {item.title}
                                                </td>
                                                <td>{item.qty}</td>
                                                <td>$ {item.price}</td>
                                            </tr>

                                        )
                                    })
                                }
                                <tr>
                                    <td colSpan={3} className='text-left'> <b> Total</b></td>
                                    <td className='text-left'><b>$ {total.toFixed(2)}</b></td>
                                </tr>
                                <tr className='bg-info border'>
                                    <td colSpan={8} className='text-end'>
                                        <Link to='/shipped'><button className='btn btn-secondary text-white border'>Continue To Checkout</button></Link>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>





        </div>
    )
}
