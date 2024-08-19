import '../../css/user/home.css';
import Navbar from '../nav/page';
import React from "react";
export default function HomePage(){
   return(
    <>
    <Navbar/>
    <div id="tieudechinh" className="py-4 m-auto text-center d-block">
      <p className="fs-6 fw-semibold my-1">Lifestyle Running Shoes</p>
      <h4 className="fs-1 fw-bold my-2">EXTRA-ORDINARY</h4>
      <span className="fs-6 fw-semibold my-1">Meet the latest collection of retro running inspired shoes.The unlikely heroes of your easiest styling hack.</span>
      <div className="mt-2 btn-tieudechinh">
        <button className="btn btn-dark rounded-pill"><a href="#" className="text-decoration-none fs6 text-white fw-semibold">Buy It</a></button>
        <button className="btn btn-dark rounded-pill"><a href="#" className="text-decoration-none fs6 text-white fw-semibold">Style It</a></button>
      </div>
    </div>
    <header id="header_HT_home" className="py-4">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/banner1.png" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/banner2.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/banner3.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </header>
    <div id="air-max-dn" className="py-4 m-auto text-center d-block">
      <p className="fs-6 fw-semibold my-1">Just In</p>
      <h4 className="fs-1 fw-bold my-2">AIR MAX DN</h4>
      <span className="fs-6 fw-semibold my-1">Step into the unreal worlds of Sha'Carri Richardson and Erling Haaland.</span>
      <div className="mt-2 btn-air-max-dn">
        <button className="btn btn-dark rounded-pill"><a href="#" className="text-decoration-none fs6 text-white fw-semibold">Shop Now</a></button>
      </div>
    </div>
    <div id="trending_HT" className="py-4 container chiacontainer">
      <h4 className="my-4">Trending</h4>
      <div className="row">
        <div className="col-6">
          <div className="img">
            <img src="/img/giaynike.jpg" alt=""/>
            <div className="child-btn-trending mx-5">
              <p className="text-black fw-semibold">Own Your Summer In Style</p>
              <button className="btn btn-dark text-center"><a href="#" className="text-white text-decoration-none fw-semibold">Shop</a></button>
            </div>
          </div>
        </div>
        <div className="col-6">
         <div className="img">
          <img src="/img/nikenam.jpg" alt=""/>
          <div className="child-btn-trending">
            <p className="text-black fw-semibold">Kids Aqua Swoosh</p>
            <button className="btn btn-dark text-center"><a href="#" className="text-white text-decoration-none fw-semibold">Shop</a></button>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div id="dont-miss" className="container chiacontainer py-4">
      <h4 className="my-4">Dont's Miss</h4>
      <div className="img">
        <img src="/img/Don'tMiss.jpg" alt=""/>
      </div>
    </div>
     <div id="feel-sculpted" className="py-4 m-auto text-center d-block">
      <p className="fs-6 fw-semibold my-1">Nike Indy Bra</p>
      <h4 className="fs-1 fw-bold my-2">FEEL SCULPTED</h4>
      <span className="fs-6 fw-semibold my-1">Light, medium or high support for every move, for every body.</span>
      <div className="mt-2 btn-feel-sculpted">
        <button className="btn btn-dark rounded-pill"><a href="#" className="text-decoration-none fs6 text-white fw-semibold">Shop Now</a></button>
      </div>
    </div>
    </>
   )
}