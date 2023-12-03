import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaUserDoctor } from "react-icons/fa6";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
   

    //logOut
    
    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
                

            })
            .catch(err => {
                console.log(err.message)
            })
    }

  const  navRoutes = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/allProperties'>All Properties</NavLink></li>
      <li><NavLink to='/dashboard'>Dashboard</NavLink></li>

      {
                        user ?
                            <button onClick={handleSignOut} className="btn">Sign Out</button>
                            :
                            <li><NavLink to='/login'>Login</NavLink></li>
                    }
                    {
                        user ? <span>{user.email}
                            <p>{user.displayName}</p>
                            <img className="w-10 rounded" src={user.photoURL} alt="" />
                            <FaUserDoctor className="rounded w-10"></FaUserDoctor>
                        </span> : ''
                    }
     
             
    </>
    return (
        <div className="navbar bg-sky-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      {navRoutes}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                <img className="w-[60px] h-[60px] border-amber-950 rounded-full gap-0" src="https://i.ibb.co/hXzSvkN/R.jpg" alt="" />
                    EMARAT</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {navRoutes}
                </ul>
            </div>
           
        </div>
    );
};

export default Navbar;