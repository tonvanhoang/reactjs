'use client'
import React, { useState } from "react";
import Navbaradmin from "../nav/page";
import NavbarLeftAdmin from "../navleft/page";
export default function AddCategory(){
    const [name,setName]= useState('');
    const BTNadd = async (e:React.FormEvent)=>{
        e.preventDefault()
        const newCate = {
            name
        }
        const res = await fetch('http://localhost:3000/category/addcate',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCate)
        })
        alert('Thêm category thành công');
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
                            <form onSubmit={BTNadd}>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} />
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