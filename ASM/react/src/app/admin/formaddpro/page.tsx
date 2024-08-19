'use client'
import { useEffect, useState } from 'react';
import '../../css/admin/product.css'
import NavbarLeftAdmin from '../navleft/page';
import Navbaradmin from '../nav/page';
export default function AddProduct(){
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [short_description, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');
    const [id_cate, setCategory] = useState('');
    const addBTN = async(e: React.FormEvent) => {
        e.preventDefault();
        const arraysize = size.split(',').map(i=>i.trim())
        const newProduct = {
            name,
            img,
            price: parseFloat(price),
            quantity: parseFloat(quantity),
            short_description,
            description,
            size:arraysize,
            id_cate,
      
        };
        const res = await fetch('http://localhost:3000/product/addproduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        });
          alert('Thêm sản phẩm thành công!')
        window.location.href="/admin/product"
    }
    const [categories,setCategories]=useState<Category[]>([])
    useEffect(()=>{
      const fetchCate = async ()=>{
        const res = await fetch('http://localhost:3000/category/allcate');
        const data = await res.json();
        setCategories(data)
      }
      fetchCate()
    },[])
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
                                    <h4 className="my-4">Product Management</h4>
                                </div>
                                <div className="overflow-auto">
                                    <form onSubmit={addBTN}>
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Price</label>
                                            <input type="text" className="form-control"  onChange={(e) => setPrice(e.target.value)} 
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Quantity</label>
                                            <input type="text" className="form-control" onChange={(e) => setQuantity(e.target.value)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Images</label>
                                            <input type="text" className="form-control" onChange={(e) => setImg(e.target.value)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Description</label>
                                            <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} 
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Short description</label>
                                            <input type="text" className="form-control" onChange={(e) => setShortDescription(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Size (add ,)</label>
                                            <input type="text" className="form-control" onChange={(e) => setSize(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Category</label>
                                            <select className="form-select form-select-lg mb-3" onChange={(e) => setCategory(e.target.value)}>
                                            <option selected>Open this select menu</option>
                                                {categories.map((cate) => (
                                                    <option key={cate._id} value={cate._id}>{cate.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-outline-dark">Submit</button>
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
