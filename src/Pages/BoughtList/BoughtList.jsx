import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BoughtList = () => {
    const [offerList, setOfferList] = useState([]);
    useEffect(()=>{
        fetch('https://emarat-server.vercel.app/wishBought')
        .then(res=>res.json())
        .then(data=>setOfferList(data))
    },[])
    return (
        <div >
            <h2 className="text-4xl my-6 text-center font-bold">Offer List</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 my-10">
          {
            offerList.map(list=> <div key={list._id} className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full h-14" src={list?.image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {list?.name}
                    <div className="badge badge-secondary">{list?.price}</div>
                </h2>
                <p>{list?.location}</p>
                <p>{list?.status}</p>
                <div className="card-actions justify-between">
                    <div className="">{list?.agent}</div>
                    <div ><img className="rounded-full h-10 w-10" src={list?.agent_photo} alt="" /></div>
                </div>
            </div>
            <div className="mx-5 mb-6 border">
                <Link>
                    <button className="btn btn-success w-full">Accepted</button>
                </Link>
            </div>
            <div className="mx-5 mb-6 border">

                <button className="btn btn-success w-full">Pay</button>

            </div>
        </div>)
           }
          </div>
        </div>
    );
};

export default BoughtList;