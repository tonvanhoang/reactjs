'use client'
import React, { useState } from "react";
import Link from "next/link";

interface ProductCardProps{
    modelProducts:{
        _id:string;
        name:string;
        price:number;
        img:string;
        quantity:number;
        short_description:string;
        description:string;
        // size:string[]
    }
}
export default function ProductCard({modelProducts}:ProductCardProps){
    const [likes,setlikes] = useState(0)
    const clickhand = ()=>{
        setlikes(likes+1)
    }
    return(
        <div className="item">
                        <div className="img">
                            <img src={modelProducts.img} alt={modelProducts.name}/>
                        </div>
                        <div className="consanpham">
                        <Link href={`/user/productDetail/${modelProducts._id}`}>
                            {modelProducts.name}
                            </Link>                            
                            <label>Quantity:<i> {modelProducts.quantity}</i> </label>
                            <label>Price: <span>{modelProducts.price}</span>USD <del>200USD</del> </label>
                        </div>
                        <button onClick={clickhand}>{likes} Like</button>
                    </div>
    )
}