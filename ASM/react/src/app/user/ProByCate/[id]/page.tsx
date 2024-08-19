'use client'
import ProductCard from '@/app/user/proq/product';
import '../../../css/user/allproduct.css'
import { useEffect, useState } from 'react';
import Navbar from '../../nav/page';
import Link from 'next/link';
export default function AllProduct({ params }: { params: { id: string } }) {
  const [posts, setPosts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [catedetails, setCatedetails] = useState<Category|null>(null);
  useEffect(() => {
    const fetchPro = async () => {
      const res = await fetch(`http://localhost:3000/product/productBYcate/${params.id}`);
      const data = await res.json();
      setPosts(data);
    }
    fetchPro();
  }, [params.id]);
  useEffect(() => {
    const fetchCate = async () => {
      const res = await fetch('http://localhost:3000/category/allcate');
      const dataCate = await res.json();
      setCategories(dataCate);
    }
    fetchCate();
  }, []);
  useEffect(() => {
    const detailCate = async () => {
      const res = await fetch(`http://localhost:3000/category/catebyid/${params.id}`);
      const cateById = await res.json();
      setCatedetails(cateById);
    }
    detailCate();
  }, [params.id]);

  return (
    <>
      <Navbar />
      <div id="all-product" className="container-fluid p-0 py-5">
        <div className="row m-auto">
          <div className="col-2 p-0 overflow-auto">
            {catedetails && (
              <h4>{catedetails.name}</h4>
            )}
            <div className="gachsp candivleft">
              {categories.map((cate) => (
                <Link key={cate._id} href={`/user/ProByCate/${cate._id}`}>
                  {cate.name}
                </Link>
              ))}
            </div>
            <div className="gachsp candivleft">
              <a className="dropdown-toggle m-0 py-3" data-bs-toggle="collapse" href="#collapseGender" aria-expanded="false" aria-controls="collapseGender">Gender</a>
              <div className="collapse" id="collapseGender">
                <div className="candivleft m-auto">
                  <a href="#">Men</a>
                  <a href="#">Women</a>
                  <a href="#">Kid</a>
                </div>
              </div>
            </div>
            <div className="gachsp candivleft">
              <a className="dropdown-toggle m-0 py-3" data-bs-toggle="collapse" href="#collapsePrice" aria-expanded="false" aria-controls="collapsePrice">Product By Price</a>
              <div className="collapse" id="collapsePrice">
                <div className="candivleft m-auto">
                  <a href="#">50USD - 100USD</a>
                  <a href="#">100USD - 300USD</a>
                  <a href="#">300USD - 500USD</a>
                  <a href="#">500USD - 1000USD</a>
                  <a href="#">1000USD - 3000USD</a>
                </div>
              </div>
            </div>
            <div className="gachsp candivleft">
              <a className="dropdown-toggle m-0 py-3" data-bs-toggle="collapse" href="#collapseColor" aria-expanded="false" aria-controls="collapseColor">Product By Color</a>
              <div className="collapse" id="collapseColor">
                <div className="candivleft m-auto">
                  <a href="#">Black</a>
                  <a href="#">Blue</a>
                  <a href="#">Red</a>
                  <a href="#">White</a>
                  <a href="#">Green</a>
                  <a href="#">Pink</a>
                  <a href="#">Purple</a>
                  <a href="#">Yellow</a>
                  <a href="#">Orange</a>
                  <a href="#">Grey</a>
                  <a href="#">Brown</a>
                </div>
              </div>
            </div>
            <div className="gachsp candivleft">
              <a className="dropdown-toggle m-0 py-3" data-bs-toggle="collapse" href="#collapseBrand" aria-expanded="false" aria-controls="collapseBrand">Product By Brand</a>
              <div className="collapse" id="collapseBrand">
                <div className="candivleft m-auto">
                  <a href="#">Nike Sportswear</a>
                  <a href="#">Chanel</a>
                  <a href="#">Gucci</a>
                  <a href="#">Adidas</a>
                </div>
              </div>
            </div>
            <div className="gachsp candivleft">
              <a className="dropdown-toggle m-0 py-3" data-bs-toggle="collapse" href="#collapseSport" aria-expanded="false" aria-controls="collapseSport">Sport</a>
              <div className="collapse" id="collapseSport">
                <div className="candivleft m-auto">
                  <a href="#">Lifestyle</a>
                  <a href="#">Golf</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 p-0 m-auto">
            {
              posts.length === 0 ?(
               
                  <h5 className="text-danger">Không có sản phẩm</h5>
               
              ):(
                posts.map((p) => (
                  <ProductCard
                    key={p._id}
                    modelProducts={p}
                  />
                ))
              )
            }
            
          </div>
        </div>
      </div>
    </>
  );
}
