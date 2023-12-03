import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useWishList from "../../hooks/useWishList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const WishUpdate = () => {
    const [wish, refetch] = useWishList();
    const [offerWish, setOfferWish] = useState([]);
    const axiosSecure = useAxiosSecure();
    const params = useParams();
    

    useEffect(()=>{
        fetch(`https://emarat-server.vercel.app/wishUpdate/${params.id}`)
        .then(res=>res.json())
        .then(data=>setOfferWish(data))
    },[])
    console.log(offerWish)
    // const {email, name, price, agent, location, image} = wish;
    const handleUpdate = () => {
        event.preventDefault();

        const form = event.target;
        const buyer = form.buyer.value;
        const price = form.price.value;
        const location = form.location.value;
        const agent = form.agent.value;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const photo = form.photo.value;
        
        const offer = {buyer, name, price, location, agent, email, date, photo}
        console.log(offer)

        axiosSecure.post('/wishBought', offer)
                    .then(res => {
                        if (res.data.insertedId) {
                            refetch();
                            Swal.fire({
                                icon: 'Success!',
                                title: 'Success!',
                                text: 'Added Offer successfully',
                                icon: 'success',
                                confirmButtonText: 'Done'
                              })
                        }
                    })

    }
    return (
        <div>
            <h2 className="text-3xl text-sky-900 font-bold text-center mb-8 mt-8">Make An Offer</h2>

            <form onSubmit={()=>handleUpdate(offerWish._id)} className="bg-sky-100 mb-20 p-24">
                {/* form Agent and location row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Agent</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="agent" defaultValue={offerWish.agent} placeholder="agent" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> Property location</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="location" defaultValue={offerWish.location} placeholder="location" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form title and Price row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Property Title</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="name" defaultValue={offerWish.name}  className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Offered price</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="price"  placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form email and buyer row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Buyer email</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="email" defaultValue={offerWish.email} placeholder="email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Buyer name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="buyer"  placeholder="buyer name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form date row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Buying date</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="date" placeholder="Date" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="photo" defaultValue={offerWish.image} placeholder="Photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
    
                <input type="submit" value="Offer" className="btn btn-block bg-sky-900 text-white" />
            </form>
        
        </div>
    );
};

export default WishUpdate;