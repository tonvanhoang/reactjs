'use client';
import '../../../css/admin/product.css';
import NavbarLeftAdmin from '../../navleft/page';
import Navbaradmin from '../../nav/page';
import { useEffect, useState } from 'react';


export default function DetailOrder({ params }: { params: { id: string } }) {
  const [orderdetails, setorderdetails] = useState<any>([]);
  useEffect(() => {
    const detail = async () => {
        const res = await fetch(`http://localhost:3000/orderdetail/detail/${params.id}`)
        const productData = await res.json()
        setorderdetails(productData)
    };
    detail();
  }, [params.id]);
  return (
    <>
      <Navbaradmin />
      <div className="">
        <div className="container-bottom d-flex">
          <NavbarLeftAdmin />
          <div className="container-bottom-right border">
            <div className="content-con">
              <div className="cart container m-auto">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="my-4">Order detail</h4>
                </div>
                <div className="overflow-auto">
                  <table className="table caption-top">
                    <thead>
                      <tr>
                        <th scope="col-3">Product</th>
                        <th scope="col-3">Quantity</th>
                        <th scope="col-3">Size</th>
                        <th scope='col-2'>Price</th>
                        <th scope='col-2'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderdetails.map((or:any) => (
                            or.product.map((item:any)=>(
                              <tr>
                                <td className="pro-info">
                            <div className="img">
                              <img src={item.img} alt={item.name} />
                            </div>
                            <div >
                              <a className="tenpro d-block">{item.name}</a>
                              <i>ID:{item._id}</i>
                            </div>
                          </td>
                                <td><a>{item.setQuantity}</a></td>
                                <td><a>{item.setsize}</a></td>
                                <td><a>{item.price} USD</a></td>
                                <td><a>{item.price * item.setQuantity}USD</a></td>
                              </tr>
                            ))
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
