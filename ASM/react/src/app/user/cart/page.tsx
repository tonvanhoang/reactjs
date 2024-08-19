"use client";
import Navbar from "../nav/page";
import '../../css/user/cart.css';
import { useDispatch, useSelector } from "react-redux";
import { removeItem, removeCart, updateSetQuantity } from "../redux/slices/cartSilce";
import Link from "next/link";
export default function Mycart() {
  const cart = useSelector((state:any) => state.cart);

  const dispatch = useDispatch();
  const tongtien = () => {
    return cart.reduce((total: number, item: any) => {
      return total + item.price * item.setQuantity;
    }, 0);
  };
  const thaydoisoluong = (productId: string, newQuantity: number , setsize:string) => {
    dispatch(updateSetQuantity({ product: { _id: productId }, setQuantity: newQuantity,setsize }));
  };
  if(cart ==''){
    return(
      <>
      <Navbar />
      <div className="cart container m-auto my-5 py-5">
      <div className="py-5">
      <h5 className="my-5 text-center">Bạn chưa có sản phẩm nào trong giỏ hàng</h5>
      </div>
      </div>
    </>
    )
  }
  return (
    <>
      <Navbar />
      <div className="cart container m-auto my-5">
        <h4>My cart</h4>
        <button className="btn btn-tongtien btn-dark" onClick={() => dispatch(removeCart(cart))}>
          Xóa tất cả
        </button>
        <table className="table caption-top">
          <thead>
            <tr>
              <th scope="col-3">Product information</th>
              <th scope="col-2">Price</th>
              <th scope="col-2">Size</th>
              <th scope="col-2">Quantity</th>
              <th scope="col-2">Into money</th>
              <th scope="col-1">Other</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((pro: any) => (
              <tr key={pro._id}>
                <td className="pro-info">
                  <div className="img">
                    <img src={pro.img} alt={pro.name} />
                  </div>
                  <div>
                    <a className="tenpro">{pro.name}</a>
                    <i>ID: {pro._id}</i>
                  </div>
                </td>
                <td>
                  <a>{pro.price} USD</a>
                </td>
                <td>
                  <a>{pro.setsize}</a>
                </td>
                <td>
                  <input 
                    type="number" 
                    min="1" 
                    max={pro.quantity} 
                    value={pro.setQuantity} 
                    onChange={(e) => thaydoisoluong(pro._id, Number(e.target.value),pro.setsize)}
                  />
                </td>
                <td>
                  <a>{pro.price * pro.setQuantity} USD</a>
                </td>
                
                <td>
                  <button type="button" className="btn btn-outline-danger" onClick={() => dispatch(removeItem({ product: pro }))}>
                  X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5} className="text-end">
                <div className="btntongtien">
                  <button type="button" className="btn btn-tongtien btn-dark">
                    Total amount: {tongtien()} USD
                  </button>
                  <button type="button" className="btn btn-outline-dark">
                   <Link href="/user/payment">Buy now</Link>
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
