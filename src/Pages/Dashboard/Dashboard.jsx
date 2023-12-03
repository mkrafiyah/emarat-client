import { useContext, useEffect, useState } from "react";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaBuilding, FaPerson } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import useAdmin from "../../hooks/useAdmin";


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [userRole, setUserRole] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/users/admin?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserRole(data))
    }, [])
    console.log(userRole)

    return (
        <div>
            {(() => {
                if (userRole.role === 'admin') {
                    return (
                        <div className="flex">
                            <div className="w-64 min-h-screen bg-blue-400">
                                <ul className="menu">

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


                                    <li>
                                        <NavLink to='/'>
                                            <FaHome></FaHome>
                                            Home</NavLink></li>

                                    <div className="divider"></div>
                                    
                                </ul>


                            </div>
                            {/* dashboard content */}
                            <div className="flex-1 p-8">
                                <Outlet></Outlet>
                            </div>
                        </div>
                    )
                } else if (userRole.role === 'agent') {
                    return (
                        <div>
                            <div className="flex">
                            <div className="w-64 min-h-screen bg-blue-400">
                                <ul className="menu">

                                    <li>
                                        <NavLink to='/dashboard/agentProfile'>
                                            <FaPerson></FaPerson>
                                            Agent Profile</NavLink></li>
                                    <li>
                                        <NavLink to='/dashboard/agentAddedProperties'>
                                            <FaShoppingCart></FaShoppingCart>
                                            Agent Added Properties</NavLink></li>
                                    <li>
                                        <NavLink to='/dashboard/soldProperties'>
                                            <FaBuilding></FaBuilding>
                                            Property Sold</NavLink></li>
                                    <li>
                                        <NavLink to='/dashboard/requestedProperties'>
                                            <FaBook></FaBook>
                                             Requested Properties</NavLink></li>


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
                        </div>
                    )
                } else {
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
                    )
                }
            })()}
        </div>
    );
};

export default Dashboard;