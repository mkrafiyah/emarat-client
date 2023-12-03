import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useWishList from "../../hooks/useWishList";


const ManageReview = () => {
    const [review, setReview] = useState([]);
    const [ refetch] = useWishList();
    const axiosSecure = useAxiosSecure();
    useEffect(()=>{
        fetch('https://emarat-server.vercel.app/reviews')
        .then(res=> res.json())
        .then(data=>setReview(data))
    },[])
    const handleDeleteReview =( id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/reviews/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <h2 className="text-4xl text-center font-bold my-10">Reviews</h2>
   <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Reviews</th>
        <th>Ratings</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {
        review.map(oneReview=> <tr key={oneReview._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={oneReview.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{oneReview.name}</div>
                  <div className="text-sm opacity-50">{oneReview.email}</div>
                </div>
              </div>
            </td>
            <td>
             {oneReview.details}
              <br/>
              <span className="badge badge-ghost badge-sm">Desktop </span>
            </td>
            <td>{oneReview.rating}</td>
            <th>
              <button onClick={()=>handleDeleteReview(oneReview._id)} className="btn btn-ghost btn-xs text-red-500"><FaTrashAlt className="text-xl"></FaTrashAlt></button>
            </th>
          </tr>)
     }
      
    </tbody> 
  </table>
</div>   
        </div>
    );
};

export default ManageReview;