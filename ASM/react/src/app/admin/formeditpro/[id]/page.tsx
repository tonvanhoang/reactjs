'use client';
import NavbarLeftAdmin from "../../navleft/page";
import Navbaradmin from "../../nav/page";
import '../../../css/admin/product.css';
import { useEffect, useState } from "react";

export default function EditProduct({ params }: { params: { id: string } }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [sizes, setSizes] = useState<string[]>(['']);

    useEffect(() => {
        const fetchProductDetails = async () => {
            const res = await fetch(`http://localhost:3000/product/productByID/${params.id}`);
            const data = await res.json();
            setName(data.name);
            setPrice(data.price);
            setQuantity(data.quantity);
            setImg(data.img);
            setDescription(data.description);
            setShortDescription(data.short_description);
            setSizes(data.size);
        };
        fetchProductDetails();
    }, [params.id]);

    const addInput =()=> setSizes([...sizes,'']); //thêm trường để add vào
    const deteleSize=(index:number)=>{
        const newSizes = sizes.filter((_,i)=>i !== index) // đật index để tìm vị trí nếu mà không phải thì giữ lại còn phải thì xóa
        setSizes(newSizes)
    }
    const  addSize=(index:number,value:string)=>{
        const newSizes = [...sizes] // add size 
        newSizes[index] = value; // lấy giá trị
        setSizes(newSizes)
    }


    const editpro = async (e: React.FormEvent) => {
        e.preventDefault();
        const updatedProduct = {
            name,
            price,
            quantity,
            img,
            description,
            short_description: shortDescription,
            size: sizes,
        };
        const res = await fetch(`http://localhost:3000/product/editpro/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        });
        alert('Sửa sản phẩm thành công!')
        window.location.href = "/admin/product";
    };

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
                                    <form onSubmit={editpro}>
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Price</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Quantity</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={quantity}
                                                onChange={(e) => setQuantity(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Images</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={img}
                                                onChange={(e) => setImg(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Description</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Short description</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={shortDescription}
                                                onChange={(e) => setShortDescription(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Sizes</label>
                                            {sizes.map((size, index) => (
                                                <div key={index} className="d-flex align-items-center mb-2">
                                                    <input
                                                        type="text"
                                                        className="form-control me-2"
                                                        value={size}
                                                        onChange={(e) => addSize(index, e.target.value)}
                                                    />
                                                    <button type="button" className="btn btn-danger" onClick={() => deteleSize(index)}>Remove</button>
                                                </div>
                                            ))}
                                            <button type="button" className="btn btn-secondary" onClick={addInput}>Add Size</button>
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
    );
}
