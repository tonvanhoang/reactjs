'use client'
import { useEffect, useState } from "react";
import NavbarleftAdmin from "../navleft/page";
import Navbaradmin from "../nav/page";
import Link from "next/link";
export default function CategoryAdmin(){
    const [categories,setCategories] = useState<Category[]>([]);
       const fetchCate = async ()=>{
            const res = await fetch('http://localhost:3000/category/allcate');
            const data = await res.json()
            setCategories(data)
        }
    useEffect(()=>{
      fetchCate()
    },[])
    const deleteCate = async (id:string)=>{
        const res = await fetch(`http://localhost:3000/category/deletecate/${id}`,{
          method:'DELETE',
          headers:{
            'content-type':'application/json'
          }
        })
        alert('xóa thành công')
        fetchCate()
    }
    return(
        <>
        <Navbaradmin/>
        <div className="">
        <div className="container-bottom d-flex">
           <NavbarleftAdmin/>
            <div className="container-bottom-right border">
                <div className="content-con">
                    <div className="cart container m-auto"> 
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="my-4">Category Management</h4>
                            <button className="btn btn-outline-dark btn-addproduct"><Link href="/admin/formaddcate">Add new categories</Link></button>
                        </div>
                        <div className="overflow-auto">
                            <table className="table caption-top">
                                <thead>
                                  <tr>
                                    <th scope="col-3">ID</th>
                                    <th scope="col-2">Name category</th>
                                    <th scope="col-1">Other</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    categories.map((cate)=>(
                                      <tr key={cate._id}>
                                    <td>
                                      <a >{cate._id}</a>
                                    </td>
                                    <td>
                                        <a>{cate.name}</a>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-outline-danger" onClick={()=>{deleteCate(cate._id)}}>Delete</button>
                                        <br/>
                                        <button type="button" className="btn btn-outline-danger mt-2" ><Link className='text-dark text-decoration-none' href={`/admin/formeditcate/${cate._id}`}>🖋️</Link></button>
                                    </td>
                                  </tr>    
                                    ))
                                  }
                                 

                                </tbody>
                              </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}