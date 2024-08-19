'use client'
import React, { useEffect, useState } from "react"
import Navbar from "../user/nav/page"
export default function Register(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phoneNumber,setPhonenumber] = useState('')
    const [password,setPassword] = useState('')
    const AddAccount = async (e:React.FormEvent)=>{
        e.preventDefault()
            const newAccount={
                name,
                email,
                phoneNumber:parseFloat(phoneNumber),
                password,
            }
            const res = await fetch('http://localhost:3000/account/register',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newAccount)
            });
            alert('Đăng kí tài khoản thành công')
        }
    return(
        <>
        <Navbar/>
         <div className="container container-account p-0 my-5">
        <div className="theh3">
            <h4 className="text-center m-0 my-2">Register</h4>
        </div>
        <form onSubmit={AddAccount} className="mx-4 mt-3">
            <div className="mb-2">
                <label  className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" onChange={(e)=>setName(e.target.value)} aria-describedby="nameHelp"/>
              </div>
            <div className="mb-2">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp"/>
            </div>

            <div className="mb-2">
                <label className="form-label">Phone number</label>
                <input type="text" className="form-control" id="phonenumber" onChange={(e)=>setPhonenumber(e.target.value)} aria-describedby="phonenumberHelp"/>
              </div>
            <div className="mb-2">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} id="password"/>
            </div>
      
            <div className="text-center mb-4">
                <button type="submit" className="btn btn-outline-dark">Save</button>

            </div>
        </form>
     </div>
        </>
    )
}