import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-yellow-100">
        <img className="w-[700px] mx-auto py-6 rounded-xl" src="https://i.ibb.co/g9wZZVH/error.jpg" alt="" />
        <Link to='/'><button className="btn py-4 px-6 flex items-center mx-auto mb-5 bg-orange-300">Back to Home</button></Link>
       </div>
    );
};

export default ErrorPage;