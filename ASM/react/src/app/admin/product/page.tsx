'use client'
import { useEffect, useState } from 'react';
import '../../css/admin/product.css';
import Navbaradmin from '../nav/page';
import NavbarleftAdmin from '../navleft/page';
import Link from 'next/link';
export default function ProductAdmin() {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchProducts = async () => {
      const res = await fetch('http://localhost:3000/product/allproduct');
      const data = await res.json();
      setProducts(data);
  };
  useEffect(() => {
      fetchProducts();
  }, []);
  const deleteProduct = async (id: string) => {
      const res = await fetch(`http://localhost:3000/product/deleteproduct/${id}`, {
          method: 'DELETE',
      });
      if (res.ok) {
          fetchProducts();
      } else {
          alert('Failed to delete the product');
      }
  };

  return (
    <>
      <Navbaradmin />
      <div>
        <div className="container-bottom d-flex">
          <NavbarleftAdmin />
          <div className="container-bottom-right border">
            <div className="content-con">
              <div className="cart container m-auto">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="my-4">Product Management</h4>
                  <button className="btn btn-outline-primary btn-addproduct"><Link className='text-dark text-decoration-none' href="/admin/formaddpro">Add new products</Link></button>
                </div>
                <div className="overflow-auto">
                  <table className="table caption-top">
                    <thead>
                      <tr>
                        <th scope="col-3">Product information</th>
                        <th scope="col-2">Price</th>
                        <th scope="col-2">Quantity</th>
                        <th scope="col-1">Other</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((p) => (
                        <tr key={p._id}>
                          <td className="pro-info">
                            <div className="img">
                              <img src={p.img} alt={p.name} />
                            </div>
                            <div >
                              <a className="tenpro d-block">{p.name}</a>
                              <i>ID:{p._id}</i>
                            </div>
                          </td>
                          <td>{p.price}</td>
                          <td>{p.quantity}</td>
                          <td>
                            <button type="button"className="btn btn-outline-danger" onClick={()=>deleteProduct(p._id)}>Delete</button>
                            <br />
                            <button type="button" className="btn btn-outline-danger mt-2" ><Link className='text-dark text-decoration-none' href={`/admin/formeditpro/${p._id}`}>🖋️</Link></button>
                          </td>
                        </tr>
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
