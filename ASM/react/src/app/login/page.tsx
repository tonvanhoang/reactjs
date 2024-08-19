'use client'
import React, { useState } from "react"
import Navbar from "../user/nav/page"
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const btnlogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            email,
            password
        };
            const res = await fetch('http://localhost:3000/account/login', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data)
            });
            if (res.ok) {
                const quyen = await res.json();
                const showtoken = quyen.token;
                const taikhoan = quyen.account;
                const quyenrole = quyen.role;
                localStorage.setItem('role',JSON.stringify(quyenrole))
                localStorage.setItem('taikhoan', JSON.stringify(taikhoan));
                localStorage.setItem('token',JSON.stringify(showtoken))
                if (quyenrole === 'user') {
                    window.location.href="/user/homePage"
                } else if (quyenrole === 'admin') {
                    window.location.href="/admin/product"
                }
            } else {
               alert('Đăng nhập thất bại')
            }
    };

    return (
        <>
            <Navbar />
            <div className="container container-account p-0 my-5">
                <div className="theh3">
                    <h4 className="text-center m-0 my-2">Login</h4>
                </div>
                <form onSubmit={btnlogin} className="mx-4 mt-3">
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            onChange={(e) => setEmail(e.target.value)}
                            aria-describedby="emailHelp"
                            value={email}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <div className="text-center mb-4">
                        <button type="submit" className="btn btn-outline-dark">Login</button>
                    </div>
                </form>
            </div>
        </>
    );
}
