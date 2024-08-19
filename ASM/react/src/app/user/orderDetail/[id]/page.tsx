'use client'
import { useEffect, useState } from "react"
import Navbar from "../../nav/page"
export default function orderDetail({params}:{params:{id:string}}){
    const [products,setProducts]=useState<any>([])
    useEffect(()=>{
        const fetchproduct =async ()=>{
            const res =await fetch(`http://localhost:3000/orderdetail/detail/${params.id}`);
            const data = await res.json()
            setProducts(data)
        }
        fetchproduct()
    },[params.id])
    return(
        <>
        <Navbar/>
                <div className="container my-5 py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="my-4">Order Detail</h4>
                </div>
                  <table className="table caption-top">
                    <thead>
                      <tr>
                        <th scope="col-3">Product</th>
                        <th scope="col-3">Quantity</th>
                        <th scope="col-3">Size</th>
                        <th scope="2">Price</th>
                        <th scope="2">Total</th>

                      </tr>
                    </thead>
                    <tbody>
                      {products.map((or:any) => (
                            or.product.map((item:any)=>(
                            <>
                              <tr key={or._id}>
                                <td className="pro-info d-flex">
                            <div className="img">
                              <img style={{width:'80px',height:'80px',}} src={item.img} alt={item.name} />
                            </div>
                            <div >
                              <a className="tenpro d-block text-decoration-none text-black fw-bold">{item.name}</a>
                              <i>ID:{item._id}</i>
                            </div>
                          </td>
                                <td><a>{item.setQuantity}</a></td>
                                <td><a>{item.setsize}</a></td>
                                <td><a>{item.price} USD</a></td>
                                <td><a>{item.price * item.setQuantity} USD</a></td>
                              </tr>
                             
                            </>
                            ))
                      ))}
                    </tbody>
                  </table>
                </div>
          
        </>
    )
}