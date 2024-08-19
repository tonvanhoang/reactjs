import '../../css/admin/navleft.css'
import Link from 'next/link'
export default function NavbarLeftAdmin(){
    return(
        <div className="container-bottom-left">
                <ul className="ul-admin p-0">
                    <li><Link href="/admin/product">Product Management</Link></li>
                    <li><Link href="/admin/category">Categories Management</Link></li>
                    <li><Link href="/admin/account">Account Management</Link></li>
                    <li><Link href="/admin/comment">Comment Management</Link></li>
                    <li><Link href="/admin/order">Order Management</Link></li>
                </ul>
            </div>
    )
}