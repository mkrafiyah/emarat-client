import { Link } from "react-router-dom";


const Property = ({ property }) => {

    return (
        <div>
            <div className="card w-96 bg-sky-100 shadow-xl mb-10">
                <figure><img className="w-full h-14" src={property?.image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {property?.title}
                        <div className="badge badge-secondary">{property?.price}</div>
                    </h2>
                    <p>{property?.location}</p>
                    <p>{property?.status}</p>
                    <div className="card-actions justify-between">
                        <div className="">{property?.agent}</div>
                        <div ><img className="rounded-full h-10 w-10" src={property?.agent_photo} alt="" /></div>
                    </div>
                </div>
                <div className="mx-5 mb-6 border">
                <Link to={`/properties/${property?._id}`}>
                <button className="btn bg-sky-600 text-white w-full">Details</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Property;