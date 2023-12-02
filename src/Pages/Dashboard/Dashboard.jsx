import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaBuilding, FaPerson } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-blue-400">
                <ul className="menu">
                    {
                        isAdmin? <>
                               <li>
                 <NavLink to='/dashboard/adminProfile'>
                <FaPerson></FaPerson>
                    Admin Profile</NavLink></li>
                    <li>
                 <NavLink to='/dashboard/manageProperties'>
                <FaShoppingCart></FaShoppingCart>
                    Manage Properties</NavLink></li>
                    <li>
                 <NavLink to='/dashboard/manageUsers'>
                <FaBuilding></FaBuilding>
                Manage Users</NavLink></li>
                    <li>
                 <NavLink to='/dashboard/manageReviews'>
                <FaBook></FaBook>
                Manage Reviews</NavLink></li>
                   
                           
                         
                        </> : 
                        <>
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
                        </>
                    }
                      <div className="divider"></div>
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