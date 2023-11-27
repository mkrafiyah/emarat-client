
import { FaArrowRight, FaKey, FaMobile } from "react-icons/fa";
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://ibb.co/RBvg2KH)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-left text-neutral-content">
                <div className="w-full p-20">
                    <p className="mb-5 text-3xl">Innovation</p>
                    <h1 className="mb-5 text-5xl font-bold">Enhanced <br /> Living Experience</h1>
                    <div className="flex gap-8 mb-5">
                        <div className="flex gap-4 justify-center items-center bg-teal-700 p-5 rounded-lg">
                            <p> <FaKey className="text-4xl"></FaKey></p>
                            <div>
                                <p className="text-3xl font-bold">Prices From</p>
                                <p className="text-3xl font-bold">$12000.00</p>
                            </div>
                        </div>
                        <div  className="flex gap-4 justify-center items-center bg-teal-700 p-5 rounded-lg">
                        <p> <FaMobile className="text-4xl"></FaMobile></p>
                            <div>
                            <p className="text-3xl font-bold">Call Today</p>
                            <p className="text-3xl font-bold">+1400 567 900</p>
                            </div>
                        </div>
                    </div>

                    <button className=" btn-ghost items-start text-xl font-normal">Discover More<span><FaArrowRight className="inline ml-3"></FaArrowRight></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;