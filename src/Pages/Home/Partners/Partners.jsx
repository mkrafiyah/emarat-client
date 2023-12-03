import { FaBuilding } from "react-icons/fa";
import { RiBuilding2Line } from "react-icons/ri";
import { TbBuildingCarousel } from "react-icons/tb";
import { BiSolidBuildingHouse } from "react-icons/bi";


const Partners = () => {
    return (
        <div>
            <h2 className="text-4xl text-sky-600 my-10 ml-20 font-bold text-center">Our Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center my-10">
                <div>
                    <RiBuilding2Line className="text-5xl mx-auto"></RiBuilding2Line>
                    <div>
                    <h2 className="text-3xl text-sky-600">High-Rise</h2>
                    <p>Real Estate Company</p>
                    </div>
                </div>
                <div>
                <FaBuilding className="text-5xl mx-auto"></FaBuilding>
                    <div>
                    <h2 className="text-3xl text-sky-600">Mark & Co.</h2>
                    <p>Buildings</p>
                    </div>
                </div>
                <div>
                    <TbBuildingCarousel className="text-5xl mx-auto"></TbBuildingCarousel>
                    <div>
                    <h2 className="text-3xl text-sky-600">Real Estate Experts</h2>
                    <p>Real Estate Company</p>
                    </div>
                </div>
                <div>
                  <BiSolidBuildingHouse className="text-5xl mx-auto"></BiSolidBuildingHouse>
                    <div>
                    <h2 className="text-3xl text-sky-600">Home Design</h2>
                    <p>Real Estate Company</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;