import '../../css/user/footer.css'
export default function Footer(){
    return(
        <footer className="container-fluid">
      <div className="row container m-auto pt-5 pb-4">
        <div className="col-3 p-0">
             <p>FIND A STORE</p>
            <a href="#">BECOME A MEMBER</a>
            <a href="#">SEND US FEEBACK</a>
        </div>
        <div className="col-3 p-0">
          <p>HELP</p>
          <a href="#">Get Help</a>
          <a href="#">Order Status</a>
          <a href="#">Delivery</a>
          <a href="#">Returns</a>
          <a href="#">Payment Options</a>
          <a href="3">Contact Us</a>
        </div>
        <div className="col-3 p-0">
          <p>ABOUT NIKE</p>
          <a href="#">About Nike</a>
          <a href="#">News</a>
          <a href="#">Careers</a>
          <a href="#">Investor</a>
          <a href="#">Sustainability</a>
        </div>
        <div className="col-3 p-0">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className="ft-bottom text-center pb-3">
        <span><i className="fa-solid fa-location-dot"></i> Việt Nam © 2024 Nike, Inc. All rights reserved</span>
      </div>
    </footer>
    )
}