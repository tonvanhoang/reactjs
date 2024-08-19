'use client'
import '../../../css/admin/product.css';
import NavbarLeftAdmin from '../../navleft/page';
import Navbaradmin from '../../nav/page';
import React, { useEffect, useState } from 'react';
export default function EditOrder({params}:{params:{id:string}}){
    const [status,setStatus] = useState<any>(null)
    useEffect(()=>{
        const fetchOrder = async()=>{
            const res = await fetch(`http://localhost:3000/order/chitiet/${params.id}`)
            const data = await res.json()
            setStatus(data)
            setStatus(data.status)
        }
        fetchOrder()
    },[params.id])
    const EditStatus = async (e:React.FormEvent)=>{
        e.preventDefault()
        const newOrder = {
            status
        }
        const res = await fetch(`http://localhost:3000/order/editorder/${params.id}`,{
            headers:{
                'content-type':'application/json'
            },
            method:'PUT',
            body:JSON.stringify(newOrder)
        })
        if(res.ok){
            alert('thay đổi thành công');
            window.location.href='/admin/order'
        }
    }
    return(
        <>
        <Navbaradmin/>
        <div className="">
        <div className="container-bottom d-flex">
            <NavbarLeftAdmin/>
            <div className="container-bottom-right border">
                <div className="content-con">
                    <div className="cart container m-auto">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="my-4">Order Management</h4>
                        </div>
                        <div className="overflow-auto">
                            <form onSubmit={EditStatus}>
                                <select className="form-select" aria-label="Default select example" value={status} onChange={(e)=>setStatus(e.target.value)}>
                                    <option selected>Open this select menu</option>
                                    <option value="Đang chờ xử lí">Đang chờ xử lí</option>
                                    <option value="Xác nhận đơn hàng">Xác nhận đơn hàng</option>
                                    <option value="đang vận chuyển">Đang vận chuyển</option>
                                    <option value="đang giao hàng">Đang giao hàng</option>
                                    <option value="đã nhận được hàng">Đã nhận được hàng</option>
                                    <option value="hủy hàng">Hủy hàng</option>
                                    </select>
                                <button type="submit" className="btn btn-outline-dark">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}