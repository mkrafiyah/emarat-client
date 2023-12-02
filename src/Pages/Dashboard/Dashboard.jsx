import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaBuilding, FaPerson } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-blue-400">
                <ul className="menu">
                    <li>
                 <NavLink to='/dashboard/profile'>
                <FaPerson></FaPerson>
                    My Profile</NavLink></li>
                    <li>
                 <NavLink to='/dashboard/wishlist'>
                <FaShoppingCart></FaShoppingCart>
                    My WishList</NavLink></li>
                    <li>
                 <NavLink to='/dashboard/bought'>
                <FaBuilding></FaBuilding>
                    Property Bought</NavLink></li>
                    <li>
                 <NavLink to='/dashboard/reviews'>
                <FaBook></FaBook>
                    My Reviews</NavLink></li>
                    <li>
                 <NavLink to='/'>
                <FaHome></FaHome>
                    Home</NavLink></li>

                </ul>

            </div>
             {/* dashboard content */}
             <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;