import { FaHome } from "react-icons/fa";
import { MdOutlineHomeWork,  MdEditDocument} from "react-icons/md";
import { GiHouseKeys } from "react-icons/gi";


const WorkStyle = () => {
    return (
        <div className="my-20">
            <h2 className="text-4xl text-center text-sky-600 my-10 ml-20 font-bold">
            How It works?
    
            </h2>
            <div className="grid grid-cols-1 pl-7 md:pl-3 lg:pl-0 md:grid-cols-4 gap-4">
                <div className="border-r-2">
                    <MdOutlineHomeWork className="text-5xl"></MdOutlineHomeWork>
                   <h2 className="text-3xl text-sky-600">Find real estate</h2>
                   <p>Find real estate as per your choice and requirements</p>
                </div>
                <div className="border-r-2">
                    <FaHome className="text-5xl"></FaHome>
                   <h2  className="text-3xl text-sky-600">Meet relator</h2>
                   <p>Meet relator as per your choice and requirements</p>
                </div>
                <div className="border-r-2">
                    < MdEditDocument className="text-5xl"></MdEditDocument>
                   <h2  className="text-3xl text-sky-600">Documents</h2>
                   <p>Start proper documentation</p>
                </div>
                <div>
                    <GiHouseKeys className="text-5xl"></GiHouseKeys>
                   <h2  className="text-3xl text-sky-600">Take the keys</h2>
                   <p>After finishing you can take your key anytime</p>
                </div>
            </div>
        </div>
    );
};

export default WorkStyle;