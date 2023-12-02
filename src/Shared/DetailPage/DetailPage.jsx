import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const DetailPage = () => {
    const [detailProperty, setDetailProperty] = useState([]);
    const params = useParams();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    useEffect(()=>{
        fetch(`http://localhost:5000/properties/${params.id}`)
        .then(res=>res.json())
        .then(data=>setDetailProperty(data))
    },[])
 

    const handleAddToWishList = food =>{
        console.log(food, user.email)
        if(user && user?.email){
            //data send to database
            const wishItem ={
                itemId: detailProperty._id,
                email: user.email,
                name: food.title,
                image: food.image,
                price: food.price,
                agent: food.agent,
                photo: food.agent_photo,
                location: food.location,
                status: food.status

                
            }
            axiosSecure.post('/wishes', wishItem)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        icon: 'Success!',
                        title: 'Success!',
                        text:  'Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                      })
                }
            })
            
        }else{
            Swal.fire({
                title: "Please Login!",
                text: "You are not logged in!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes,Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
              });
        }
    }

    return (
        <div>           
            <div className="card w-2/3 mx-auto my-20 bg-base-100 shadow-xl">
                <figure><img className="w-full h-14" src={detailProperty?.image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {detailProperty?.title}
                        <div className="badge badge-secondary">{detailProperty?.price}</div>
                    </h2>
                    <p>{detailProperty?.location}</p>
                    <p>{detailProperty?.status}</p>
                    <div className="card-actions justify-between">
                        <div className="">{detailProperty?.agent}</div>
                        <div ><img className="rounded-full h-10 w-10" src={detailProperty?.agent_photo} alt="" /></div>
                    </div>
                </div>
                <button onClick={()=> handleAddToWishList(detailProperty)}
                className="btn btn-success">Add To Wishlist</button>
            </div>

        </div>
    );
};

export default DetailPage;