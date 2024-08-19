'use client'
import NavbarleftAdmin from "../navleft/page";
import Navbaradmin from "../nav/page";
import { useEffect, useState } from "react";
import '../../css/admin/product.css';
import Link from "next/link";
export default function Order(){
    const [orders,setOrders]= useState<any>([])
    useEffect(()=>{
        const fetchOrder = async ()=>{
            const res = await fetch('http://localhost:3000/order/all');
            const data = await res.json()
            setOrders(data)
        }
        fetchOrder()
    },[])
    return(
            <>
              <Navbaradmin />
              <div>
                <div className="container-bottom d-flex">
                  <NavbarleftAdmin />
                  <div className="container-bottom-right border">
                    <div className="content-con">
                      <div className="cart container m-auto">
                        <div className="d-flex justify-content-between align-items-center">
                          <h4 className="my-4">Order Management</h4>
                        </div>
                        <div className="overflow-auto">
                          <table className="table caption-top">
                            <thead>
                              <tr>
                                <th scope="col-3">Order information</th>
                                <th scope="col-2">Name</th>
                                <th scope="col-2">Phone Number</th>
                                <th scope="col-2">Address</th>
                                <th scope="2">Status</th>
                                <th scope="2">Date</th>
                                <th scope="col-1">Other</th>
                              </tr>
                            </thead>
                            <tbody>
                              {orders.map((order:any) => (
                                <tr key={order._id}>
                                    <td>ID: {order._id}</td>
                                  <td>{order.name}</td>
                                  <td>{order.phonenumber}</td>
                                  <td>{order.address}</td>
                                  <td>{order.status}</td>
                                  <td>{order.date}</td>
                                  <td>
                                  <button type="button" className="btn btn-outline-danger mt-2" ><Link className='text-dark text-decoration-none' href={`/admin/detailOrder/${order._id}`}>View</Link></button>
                                    <button type="button" className="btn btn-outline-danger mt-2" ><Link className='text-dark text-decoration-none' href={`/admin/formEditOrder/${order._id}`}>🖋️</Link></button>
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
              </div>
            </>
          );
}