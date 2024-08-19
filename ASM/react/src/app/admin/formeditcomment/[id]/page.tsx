'use client'
import NavbarLeftAdmin from "../../navleft/page"
import Navbaradmin from "../../nav/page"
import { useEffect, useState } from "react"
export default function editComment({params}:{params:{id:string}}){
    const [rep_comment,setComments] = useState('')
    useEffect(()=>{
        const fetchcomment = async ()=>{
            const res = await fetch(`http://localhost:3000/comment/cmtbyid/${params.id}`)
            const data = await res.json()
            setComments(data.rep_comment)
        }
        fetchcomment()
    },[params.id])
    const editcomment = async(e:React.FormEvent)=>{
        e.preventDefault()
        const newcomment ={
            rep_comment
        }
        const res = await fetch(`http://localhost:3000/comment/edit/${params.id}`,{
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newcomment),
            method:'PUT'
        })
            alert('sửa thành công!!!')
            window.location.href="/admin/comment"
        
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
                        <form onSubmit={editcomment}>
                            {
                                rep_comment&&(
                               
                             <>
                                <div className="mb-3">
                                                <label className="form-label">Rep comment</label>
                                                <input type="text" className="form-control" value={rep_comment} onChange={(e)=>setComments(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-outline-dark">Submit</button>
                             </>
                                )
                            }
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