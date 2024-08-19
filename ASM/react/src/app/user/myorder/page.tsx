'use client';
import { useEffect, useState } from "react";
import Navbar from "../nav/page";
import Link from "next/link";

export default function MyOrder() {
    const [orders, setOrders] = useState<any[]>([]);
    
    
        const account = localStorage.getItem('taikhoan');
        if (account) {
            var acc = JSON.parse(account);
        }
        const fetchOrder = async () => {
            const res = await fetch(`http://localhost:3000/order/orderbyid/${acc._id}`);
            const data = await res.json();
            setOrders(data);
        }
        useEffect(() => {
            fetchOrder();
    }, []);
    
    const huyhang = async (id: string) => {
        const newstatus = {
            status: 'đã hủy hàng'
        };
        const res = await fetch(`http://localhost:3000/order/editorder/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newstatus),
            method: 'PUT'
        });
        if (res.ok) {
            alert('hủy hàng thành công');
            fetchOrder()
        }
    };
    return (
        <>
            <Navbar />
            <div className="container my-5">
                <div className="container-bottom-right border">
                    <div className="content-con">
                        <div className="cart container m-auto">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="my-4">My Order</h4>
                            </div>
                            <div className="overflow-auto">
                                <table className="table caption-top text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col-3">ID Order</th>
                                            <th scope="col-2">Recipient Name</th>
                                            <th scope="col-2">Phone Number</th>
                                            <th scope="col-2">Address</th>
                                            <th scope="col-2">Status</th>
                                            <th scope="col-2">Date</th>
                                            <th scope="col-1">Other</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order: any) => (
                                            <tr key={order._id}>
                                                <td>{order._id}</td>
                                                <td>{order.name}</td>
                                                <td>{order.phonenumber}</td>
                                                <td>{order.address}</td>
                                                <td style={{fontWeight:'bold'}}>{order.status}</td>
                                                <td>{order.date}</td>
                                                <td>
                                                    <button type="button" className="btn btn-outline-danger mt-2">
                                                        <Link className='text-dark text-decoration-none' href={`/user/orderDetail/${order._id}`}>View</Link>
                                                    </button>
                                                    {['Đang chờ xử lí'].includes(order.status) && (
                                                        <button type="button" className="btn btn-outline-danger mt-2" onClick={() => huyhang(order._id)}>
                                                            Abort Order
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
