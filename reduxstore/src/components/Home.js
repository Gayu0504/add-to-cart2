import React, { useState } from 'react'
import image1 from '../assets/images/body lotion.png';
import image2 from '../assets/images/neil paint.png';
import image3 from '../assets/images/spray.png';
import { useDispatch } from 'react-redux';
import { AddCard } from '../reduxstore/Cartsystem';
// const products = [
//     { id: 1, thumbnail: image1, title: "Canon Camera Eos Series Digital", price: 24999, qty: 0, },
//     { id: 2, thumbnail: image2, title: "ipod music and many more", price: 2999, qty: 0 },
//     { id: 3, thumbnail: image3, title: "i'watch smart watch", price: 5999, qty: 0 },
// ];
function Home() {
    let data = [{ id: 1, thumbnail: image1, title: "Body Lossion For Sun cream lossion", price: 1999, qty: 0, },
    { id: 2, thumbnail: image2, title: "neil paint for more shiny neils", price: 2999, qty: 0 },
    { id: 3, thumbnail: image3, title: "Spray Bottle For More Deodrant Fregrance", price: 5999, qty: 0 }]
    let [products, setproducts] = useState(data);

    const dispatch = useDispatch();
    let [total, setTotal] = useState(0);

    function decrease(e, product) {
        e.preventDefault();
        let newArr = JSON.parse(JSON.stringify(products));
        let newProd = JSON.parse(JSON.stringify(product));
       
        let productarray = newArr.map((p) => {
            if (newProd.id === p.id && p.qty > 0)
                p.qty -= 1;
            return p;
        });
        calculateTotal();
        setproducts(productarray);
        totalCalculation();
    }

    function calculateTotal(pd) {
        let t = 0;
        products.map((p) => {
            if (pd === p.id) {
                t += p.qty * p.price;
            }
            return true;
        });
        totalCalculation();

    }

    function increase(e, product) {
        e.preventDefault();
        let productarray = products.map((p) => {
            if (product.id === p.id)
                p.qty += 1;
            return p;
        });
        setproducts(productarray);
        calculateTotal(product.id);
        totalCalculation();
    }

    const totalCalculation = () => {
        let grantTotal = 0;

        products.map((prod, i) => {
            grantTotal += (prod.qty * prod.price)
            return true;
        })
        setTotal(grantTotal);
    }

    function addcart(e) {
        e.preventDefault();
        let arrayprod = products.filter((p) => { return p.qty > 0 })
        dispatch(AddCard(arrayprod));
    }

    return (

        <div>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-lg-12">
                        <table className='table table-bordered table-striped  '>
                            <thead>
                                <tr className=' text-white bg-info text-left'>
                                    <th width={'100px'}>No</th>
                                    <th width={'400px'}>Products</th>
                                    <th width={'300px'} >quantity</th>
                                    <th width={'200px'}> Total Price</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, i) => {
                                        return (
                                            <tr key={i}>
                                                <th scope='row'>{i + 1}</th>
                                                <td><img height={"80px"} src={product.thumbnail} alt="" />
                                               <br /> {product.title} <br />
                                               <td id={"price_" + i}><b> Price $</b> {product.price}</td>
                                                </td>
                                                

                                                <td  ><button type="button" onClick={(e) => decrease(e, product)} className="btn btn-danger border text-white">-</button>{product.qty}
                                                <button type="button" onClick={(e) => increase(e, product)} className="btn btn-success border text-white">+</button></td>
                                                
                                                <td className='text-left'>$ {(product.qty * product.price).toFixed(2)}</td>

                                            </tr>

                                        )
                                    })
                                }



                                <tr className='border bg-info'>
                                    <td colSpan={8} className='text-end'>
                                        <button className='btn btn-secondary text-white border' onClick={(e) => addcart(e)}>Add To Cart</button>
                                    </td>
                                </tr>

                            </tbody>


                        </table>
                    </div>
                </div>
                <hr />
            </div>



        </div>
    )
}

export default Home