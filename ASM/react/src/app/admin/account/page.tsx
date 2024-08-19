'use client'
import '../../css/admin/product.css';
import NavbarLeftAdmin from '../navleft/page';
import Navbaradmin from '../nav/page';
import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function Account(){
    const [account,setAccount]= useState<Account[]>([])
    useEffect(()=>{
        const fetchAccount = async()=>{
            const res = await fetch('http://localhost:3000/account/allaccount');
            const data = await res.json()
            setAccount(data)
        }
        fetchAccount()
    },[])
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
                            <h4 className="my-4">Account Management</h4>
                        </div>
                        <div className="overflow-auto">
                            <table className="table caption-top">
                                <thead>
                                  <tr>
                                    <th scope="col-3">Account information</th>
                                    <th scope="col-2">Phone Number</th>
                                    <th scope="col-2">Email</th>
                                    <th scope="col-1">Role</th>
                                    <th scope="col-1">Other</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    account.map(acc=>(
                                        <tr key={acc._id}>
                                    <td className="pro-info">
                                        <div className="img">
                                            <img src={acc.avata} alt=""/>
                                        </div>
                                        <div>
                                            <a className="tenpro d-block">{acc.name}</a>
                                            <i>ID:{acc._id}</i>
                                        </div>
                                    </td>
                                    <td>
                                        <a>{acc.phoneNumber}</a>
                                    </td>
                                    <td>
                                      <a>{acc.email}</a>
                                    </td>
                              
                                    <td>
                                        <a>{acc.role}</a>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-outline-danger">Delete</button>
                                        <br/>
                                        <button type="button" className="btn btn-outline-danger mt-2"><Link href={`/admin/formeditaccount/${acc._id}`}>🖋️</Link></button>
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