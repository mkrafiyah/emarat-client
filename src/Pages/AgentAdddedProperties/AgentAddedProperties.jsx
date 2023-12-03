import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const AgentAddedProperties = () => {
    const {user} = useContext(AuthContext)
    const [addedProperty, setAddedProperty] = useState([]);
    const params = useParams();
    useEffect(() => {
        fetch(`https://emarat-server.vercel.app/wishes?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAddedProperty(data))
    }, [])
    console.log(addedProperty)
    const handleAddUpdate = ()=>{
        //todo
    }
    return (
        <div className="grid grid-cols-1 gap-5">
           {
            addedProperty?.map(add=>  <div key={add._id} className="card w-2/3 mx-auto my-20 bg-base-100 shadow-xl">
            <figure><img className="w-full h-14" src={add?.image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {add?.name}
                    <div className="badge badge-secondary">{add?.price}</div>
                </h2>
                <p>{add?.location}</p>
                <p>{add?.status}</p>
                <div className="card-actions justify-between">
                    <div className="">{add?.agent}</div>
                    <div ><img className="rounded-full h-10 w-10" src={add?.agent_photo} alt="" /></div>
                </div>
            </div>
            <button onClick={() => handleAddUpdate(add._id)}
                className="btn btn-success">Update</button>
        </div>)
           }
        </div>
    );
};

export default AgentAddedProperties;