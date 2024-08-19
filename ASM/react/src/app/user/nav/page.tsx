'use client'
import { useEffect, useState } from 'react';
import '../../css/user/navbar.css';
import Link from 'next/link';
export default function Navbar(){
  const [taikhoan, setTaikhoan] = useState<any>([]);

  useEffect(() => {
      const showtaikhoan = localStorage.getItem('taikhoan');
      if (showtaikhoan) {
          const aa = JSON.parse(showtaikhoan);
          setTaikhoan(aa);
          (document.getElementById('anlisignin')as HTMLElement).style.display = 'none'
          console.log('taikhoan', aa);     
      }else{
        (document.getElementById('tttk')as HTMLElement).style.display = 'none'
      }
  }, []);

  const dangxuat = ()=>{
    if(confirm('đăng xuất')){
      localStorage.removeItem('taikhoan');
      localStorage.removeItem('role')
      localStorage.removeItem('token')
      window.location.href="/user/homePage"
    }
  }
  
    return(
      <nav id="navbar_HT_home" className="navbar navbar-expand-lg bg-white container py-0">
      <div className="container-fluid">
        <a className="navbar-brand" id="logoshop" href="#">HT Shop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/user/homePage">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/user/product">Product</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Men</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Women</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Kids</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sale</a>
            </li>
            <li className="account-navbar nav-item li-con">
              <a className="nav-link dropdown" href="#">Account <i className="fa-solid fa-user"></i></a>
              <ul className="con-ul-account p-0 d-block">
                <li className='taikhoan' id='tttk'>
                  <img src={taikhoan?.avata||""} alt="" />
                  <div>
                  <span>{taikhoan?.name||""}</span>
                  <span>{taikhoan?.email||""}</span>
                  </div>
                </li>
                <li className="nav-item" id='anlisignin'>
                <Link className="nav-link p-0 mt-1" href="/login">Sign In</Link>
                </li>
                <li className="nav-item ">
                <Link className="nav-link p-0 mt-1" href="/register">Sign Up</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link p-0 mt-1" href="/user/myorder">My Order</Link>
                </li>
                <li className="nav-item ">
                  <a className="nav-link p-0 mt-1" href='#' onClick={dangxuat}>Sign Out</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/user/cart">Cart <i className="fa-solid fa-cart-shopping"></i></Link>
            </li>
            
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    )
}