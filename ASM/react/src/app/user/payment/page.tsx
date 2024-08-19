'use client'
import Navbar from "../nav/page";
import '../../css/user/payment.css'
import { useSelector } from "react-redux";
import React, { useState } from "react";

export default function Payment() {
    const cart = useSelector((state: any) => state.cart);
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const account = localStorage.getItem('taikhoan');
    if (account) {
       var acc = JSON.parse(account);
    }
    console.log(cart)
    const idpro = cart.map((item: any) => item._id);
    const addOrder = async (e: React.FormEvent) => {
        e.preventDefault();
            const newOrder = {
                address,
                name,
                phonenumber,
                id_account: acc._id,
                id_product: idpro
            };
            const res = await fetch('http://localhost:3000/order/addorder', {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newOrder),
                method: 'POST'
            });
            const createdOrder = await res.json();
            const newDetail = {
                idOrder: createdOrder._id, 
                product: cart.map((item: any) => ({
                    id_product: item._id,
                    setQuantity: parseFloat(item.setQuantity),
                    setsize: item.setsize,
                    img: item.img,
                    price: item.price,
                    name:item.name
                }))
            };
            const detailRes = await fetch('http://localhost:3000/orderdetail/add', {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newDetail),
                method: 'POST'
            });
            alert('Mua hàng thành công!');
      
    };
    if (cart.length === 0) {
        return (
            <>
                <Navbar />
                <div className="container container-payment py-5">
                    <div className="py-5">
                        <h5 className="text-center my-5 py-5">Bạn không có sản phẩm cần thanh toán!</h5>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="container container-payment py-5">
                <h4 className="text-center">Payment</h4>
                <form onSubmit={addOrder}>
                    <div className="row">
                        <div className="col-7">
                            <h5 className="text-center mb-4">Delivery information</h5>
                            <div>
                                <div className="mb-3">
                                    <label className="form-label">Consignee name</label>
                                    <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />
                                    <div className="form-text text-danger">Please enter the consignee's name!</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" id="phonenumber" onChange={(e) => setPhonenumber(e.target.value)} />
                                    <div className="form-text text-danger">Please enter the phone number!</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Delivery address</label>
                                    <input type="text" className="form-control" id="address" onChange={(e) => setAddress(e.target.value)} />
                                    <div className="form-text text-danger">Please enter delivery address!</div>
                                </div>
                            </div>
                        </div>

                        <div className="payment-right overflow-auto col-5">
                            <div className="payment-right-top">
                                <h5 className="text-center mb-4">Payment products</h5>
                                <div className="my-3">
                                    <div className="chia2ben my-2">
                                        <a>Subtotal</a><a>1000USD</a>
                                    </div>
                                    <div className="chia2ben my-2">
                                        <a>Delivery/Shipping</a><a>20USD</a>
                                    </div>
                                    <div className="gach-payment">
                                        <div className="chia2ben my-2">
                                            <a>Total</a><a>1020USD</a>
                                        </div>
                                    </div>
                                    <div>
                                        {
                                            cart.map((p: any) => (
                                                <div key={p._id} className="payment-right-bottom d-flex my-4">
                                                    <div className="img">
                                                        <img src={p.img} alt="" />
                                                    </div>
                                                    <div className="product">
                                                        <a href="#" className="fw-bold text-black">{p.name}</a>
                                                        <a>Size: {p.setsize}</a>
                                                        <a>Color: res</a>
                                                        <a>Quantity: {p.setQuantity}</a>
                                                        <a>Price: {p.price}USD</a>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="btn-pay text-center my-3">
                                <button type="submit" className="btn btn-outline-dark">Pay</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
