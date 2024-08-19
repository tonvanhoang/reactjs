'use client'
import React, { useState, useEffect } from "react";
import '../../css/admin/nav.css';

export default function Navbaradmin() {
    const [taikhoan, setTaikhoan] = useState<any>(null);

    useEffect(() => {
        const showtaikhoan = localStorage.getItem('taikhoan');
        if (showtaikhoan) {
            const account = JSON.parse(showtaikhoan);
            setTaikhoan(account);
        }
        // set quyền
        const quyen = localStorage.getItem('role');
        if (!quyen) {
            alert('Bạn không có quyền vào trang này!');
            window.location.href = '/user/homePage';
        }
        // else if (quyen !== 'admin') {
        //     alert('Bạn không có quyền vào trang này!');
        //     window.location.href = '/user/homePage';
        // }
    }, []);
    const dangxuat = () => {
        if (window.confirm('Bạn có muốn đăng xuất không?')) {
            localStorage.removeItem('taikhoan');
            localStorage.removeItem('role');
            localStorage.removeItem('token')
            window.location.href = "/user/homePage";
        }
    };
    return (
        <div className="container-top d-flex align-items-center">
            <div className="div-h4 d-flex align-items-center">
                <h4 className="m-0">HT Shop</h4>
            </div>
            <div className="div-input d-flex justify-content-between">
                <div className="container-input input-group d-flex align-items-center">
                    <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    <button className="btn btn-outline-secondary p-0" type="button" id="button-addon1">Search</button>
                </div>
                <div className="container-account d-flex align-items-center">
                    <div className="img">
                        <img src={taikhoan?.avata || 'không có dữ liệu'} alt="" />
                    </div>
                    <div className="mx-2">
                        <a href="#" className="text-decoration-none text-black fw-semibold">
                            {taikhoan?.email || 'không có dữ liệu'}
                        </a>
                        <p className="m-0">
                            {taikhoan?.name || "không có dữ liệu"}
                        </p>
                    </div>
                    <ul>
                        <li><a href="#" onClick={dangxuat}>Đăng xuất</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
