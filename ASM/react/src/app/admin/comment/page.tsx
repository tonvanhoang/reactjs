'use client'
import { useEffect, useState } from 'react';
import '../../css/admin/product.css';
import Navbaradmin from '../nav/page';
import NavbarleftAdmin from '../navleft/page';
import Link from 'next/link';
export default function ProductAdmin() {
  const [comments, setComments] = useState<Comment[]>([]);
  const fetchComment = async () => {
      const res = await fetch('http://localhost:3000/comment/all');
      const data = await res.json();
      setComments(data);
  };
  useEffect(() => {
      fetchComment();
  }, []);
  const deleteComment = async (id: string) => {
      const res = await fetch(`http://localhost:3000/comment/delete/${id}`, {
          method: 'DELETE',
      });
      if (res.ok) {
        // alert('xóa thành công!!!')
          fetchComment();
      }
  };
  return (
    <>
      <Navbaradmin />
      <div>
        <div className="container-bottom d-flex">
          <NavbarleftAdmin />
          <div className="container-bottom-right border">
            <div className="content-con">
              <div className="cart container m-auto">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="my-4">Comment Management</h4>
                </div>
                <div className="overflow-auto">
                  <table className="table caption-top">
                    <thead>
                      <tr>
                        <th scope="col-3">Comment information</th>
                        <th scope="col-2">Comment</th>
                        <th scope="col-2">Rep</th>
                        <th scope='col-3'>Date Comment</th>
                        <th scope="col-1">Other</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comments.map((p) => (
                        <tr key={p._id}>
                          <td>
                              <a>ID: {p._id}</a>
                          </td>
                          <td>
                            <a>{p.comment}</a>
                          </td>
                          <td>
                            <a>{p.rep_comment}</a>
                            </td>
                            <td>
                            <a>{p.datecomment}</a>
                            </td>
                          <td>
                            <button type="button"className="btn btn-outline-danger" onClick={()=>deleteComment(p._id)}>Delete</button>
                            <br />
                            <button type="button" className="btn btn-outline-danger mt-2" ><Link className='text-dark text-decoration-none' href={`/admin/formeditcomment/${p._id}`}>🖋️</Link></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
