import { Link } from "react-router-dom";
import useWishList from "../../hooks/useWishList";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const WishLists = () => {
    const [wish, refetch] = useWishList();
    const axiosSecure = useAxiosSecure();
    
    console.log(wish)

    const handleDelete = id => {
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

                axiosSecure.delete(`/wishes/${id}`)
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
            <div className="flex justify-evenly">
                <h2 className="text-4xl">Items: {wish.length}</h2>
                {/* <h2 className="text-4xl">Total Price: $ {totalPrice}</h2> */}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10">
                {
                    wish?.map(wishOne => <div key={wishOne._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="w-full h-14" src={wishOne?.image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {wishOne?.name}
                                <div className="badge badge-secondary">{wishOne?.price}</div>
                            </h2>
                            <p>{wishOne?.location}</p>
                            <p>{wishOne?.status}</p>
                            <div className="card-actions justify-between">
                                <div className="">{wishOne?.agent}</div>
                                <div ><img className="rounded-full h-10 w-10" src={wishOne?.agent_photo} alt="" /></div>
                            </div>
                        </div>
                        <div className="mx-5 mb-6 border">
                            <Link to={`/dashboard/wishUpdate/${wishOne?._id}`}>
                                <button className="btn btn-success w-full">Make an Offer</button>
                            </Link>
                        </div>
                        <div className="mx-5 mb-6 border">

                            <button onClick={() => handleDelete(wishOne?._id)} className="btn btn-success w-full">Remove</button>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WishLists;