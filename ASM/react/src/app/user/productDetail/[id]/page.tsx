'use client';

import React, { useEffect, useState } from 'react';
import '../../../css/user/detailproduct.css';
import Navbar from '../../nav/page';
import { useDispatch } from 'react-redux';
import { addItem } from "../../redux/slices/cartSilce";

export default function Detail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:3000/product/productByID/${params.id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [params.id]);

  const dispatch = useDispatch();
  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };
  const [comment,setComments] = useState('');
  const [rep_comment,setrepComments] = useState('');

  const addComment = async (e:React.FormEvent)=>{
    e.preventDefault()
    const account = localStorage.getItem('taikhoan')
    if(account){
      var acc = JSON.parse(account)
    }
    const newComment={
      comment,
      rep_comment,
      id_account: acc._id, 
      id_product:params.id
    }
    const res = await fetch('http://localhost:3000/comment/add',{
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newComment),
      method:'POST'
    })
    if(res.ok){
     (document.getElementById('comment') as HTMLInputElement).value = '';
     commentByProduct()
      accountBycomment()
    }
  }
  const [cmts,setCmt] = useState<Comment[]>([])
      const commentByProduct = async ()=>{
        const res = await fetch(`http://localhost:3000/comment/commentbyid/${params.id}`)
        const cmt = await res.json()
        setCmt(cmt);
      }
    const [accs, setAccs] = useState<any>(null)
      const accountBycomment = async ()=>{
        const res = await fetch(`http://localhost:3000/account/accountbyid/6661192e056c245599fd23e1`)
        const accountCmt = await res.json()
        setAccs(accountCmt)
      }
    useEffect(()=>{
      commentByProduct()
      accountBycomment()
    },[params.id])
  return (
    <>
      <Navbar />
      <div className="detailproduct m-auto my-5">
        {product && (
          <div className="row">
            <div className="col-6 pe-0">
              <div className="img">
                <img src={product.img} alt={product.name} />
              </div>
            </div>
            <div className="col-6 p-0 col6-right">
              <div className="consanpham m-auto py-4">
                <a href="#" className="theatensp">{product.name}</a>
                <label className="lb">Quantity: <i>{product.quantity}</i></label>
                <label className="lb">Price: <span className="thespan_price">{product.price}</span>USD <del>200USD</del></label>
                <label className="lb">Short description: <span className="thespan_p">{product.short_description}</span></label>
                <label className="lb"><a data-bs-toggle="modal" data-bs-target="#exampleModal-productdescription">Click to see product description</a></label>
                <div className="modal fade" id="exampleModal-productdescription" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5">Product Description</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        {product.description}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="size">
                  <label className="lb">Size: </label>
                  <div>
                    {product.size.map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={`btn btn-outline-secondary ${selectedSize === size ? 'active' : ''}`}
                        onClick={() => handleSizeClick(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="btn-addtocart">
                  <button type="button" className="btn btn-outline-dark" onClick={()=>dispatch(addItem({ product, setQuantity: 1, setsize: selectedSize }))}>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
      <div className="container-comment container my-5">
        <h4 className="m-0 pb-4">Comment</h4>
        <div className="row">
          <div className="col-md-8">
            <div className=" align-items-center mb-3">
              
             
               {
                cmts.map((comment)=>(
                  <div key={comment._id} className='d-flex my-3'>
                {
                  accs&&(
                    <div>
                            <img
                            src={accs.avata}
                            alt="Avatar"
                            className="me-3"
                            style={{ width: '50px', height: '50px' }}/>
                </div>
                  )
                }
                  <div>
                     {
                      accs&&(
                        <h5 className="mb-0">{accs.name}</h5>
                      )
                     }
                     <span style={{fontSize:'14px',marginLeft:'10px',color:'gray'}}>{comment.datecomment}</span>
                     <p className="m-0">{comment.comment}</p>
                     <p style={{marginLeft:'20px',color:'#333'}}>{comment.rep_comment}</p>
                  </div>
                  </div>
                ))
               }
              
            </div>
           
            <form onSubmit={addComment}>
              <div className="mb-3">
                <label className="form-label">Enter Comments</label>
                <input className="form-control" id="comment" onChange={(e)=>setComments(e.target.value)} required/>
              </div>
              <div className="btn-comment text-end">
                <button type="submit" className="btn btn-outline-dark">
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
