import { useEffect, useState } from "react";
import Property from "../Property/Property";


const AllProperties = () => {
    const [propertiesAll, setPropertiesAll] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/properties')
        .then(res=>res.json())
        .then(data=>setPropertiesAll(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 shadow-xl my-15 mt-20">
            {
                propertiesAll.map(property=> <Property 
                    key={property._id}
                    property={property}
                ></Property>)
            }
        </div>
    );
};

export default AllProperties;