'use client'
import NavbarLeftAdmin from "../../navleft/page"
import Navbaradmin from "../../nav/page"
import { useEffect, useState } from "react"
export default function editComment({params}:{params:{id:string}}){
    const [role,setRole] = useState('')
    const [password,setPassword] = useState('')
    useEffect(()=>{
        const fetchcomment = async ()=>{
            const res = await fetch(`http://localhost:3000/account/accountbyid/${params.id}`)
            const data = await res.json()
            setRole(data.role)
            setPassword(data.password)
        }
        fetchcomment()
    },[params.id])
    const editcomment = async(e:React.FormEvent)=>{
        e.preventDefault()
        const newaccount ={
            role,
            password
        }
        const res = await fetch(`http://localhost:3000/account/edit/${params.id}`,{
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newaccount),
            method:'PUT'
        })
            alert('sửa thành công!!!')
            window.location.href="/admin/account"
        
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
                            <h4 className="my-4">Comment Management</h4>
                        </div>
                        <div className="overflow-auto">
                            {
                                role&&(
                                    <form onSubmit={editcomment}>
                                <div className="mb-3">
                                                <label className="form-label">Role</label>
                                                <select className="form-select" aria-label="Default select example" value={role} onChange={(e)=>setRole(e.target.value)} >
                                                <option value="admin">Admin</option>
                                                <option value="user">User</option>
                                                </select>
                                </div>
                                <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input type="text" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-outline-dark">Submit</button>
                            </form>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}