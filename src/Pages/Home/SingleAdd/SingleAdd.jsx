import { Link } from "react-router-dom";


const SingleAdd = ({advertise}) => {
    return (
        <div className="mx-auto">
            <div className="card w-96 bg-sky-100 shadow-xl">
                <figure><img className="w-full h-14" src={advertise?.image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {advertise?.title}
                        <div className="badge badge-secondary">{advertise?.price}</div>
                    </h2>
                    <p>{advertise?.location}</p>
                    <p>{advertise?.status}</p>
                    {/* <div className="card-actions justify-between">
                        <div className="">{advertise?.agent}</div>
                        <div ><img className="rounded-full h-10 w-10" src={advertise?.agent_photo} alt="" /></div>
                    </div> */}
                </div>
             <div  className="mx-5 mb-6 border">
             <Link to={`/properties/${advertise?._id}`}>
              <button className="btn bg-sky-600 text-white w-full">Details</button>
              </Link>
             </div>
            </div>
        </div>
    );
};

export default SingleAdd;