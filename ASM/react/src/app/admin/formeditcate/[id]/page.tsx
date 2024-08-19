'use client'
import '../../../css/admin/product.css';
import NavbarLeftAdmin from '../../navleft/page';
import Navbaradmin from '../../nav/page';
import React, {useEffect, useState } from 'react';
export default function EditCategory({params}:{params:{id:string}}){
    const [name,setName] = useState('');
    useEffect(()=>{
        const fetchDetailCate = async ()=>{
            const res =await fetch(`http://localhost:3000/category/catebyid/${params.id}`);
            const data = await res.json()
            setName(data.name)
            }
            fetchDetailCate()
    },[params.id])
    const Edit = async (e:React.FormEvent)=>{
        e.preventDefault()
        const Updatecate = {
            name:name
        };
        const res = await fetch(`http://localhost:3000/category/editbyid/${params.id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(Updatecate)
        })
        alert('sửa thành công');
        window.location.href="/admin/category"
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
                            <h4 className="my-4">Category Management</h4>
                        </div>
                        <div className="overflow-auto">
                            <form onSubmit={Edit}>
                                <div className="mb-3">
                                                <label className="form-label">Name</label>
                                                <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                                </div>
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