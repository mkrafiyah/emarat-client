import { useEffect, useState } from "react";
import SingleAdd from "../SingleAdd/SingleAdd";


const AdvertisementSection = () => {
    const [add, setAdd] = useState([]);
    useEffect(()=>{
        fetch('https://emarat-server.vercel.app/properties')
        .then(res=>res.json())
        .then(data=>setAdd(data))
    },[])
    return (
        <>
        <h2 className="text-4xl text-sky-600 text-center my-10 font-bold">Advertisement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 shadow-xl my-15 mt-20 mx-auto  mt-15 mb-20">
        {
            add.slice(0, 4).map(advertise => <SingleAdd 
                key={advertise._id}
                advertise={advertise}>

                </SingleAdd>)
        }
        </div>
        </>
    );
};

export default AdvertisementSection;