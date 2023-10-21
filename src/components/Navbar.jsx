import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";


const Navbar = () => {

    const { signOutFromSite, user } = useContext(AuthContext)



    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        {user ? <li><NavLink to={'/addItem'}>Add Product</NavLink></li> : ""}
        {user ? <li><NavLink to={'/cart'}>Cart</NavLink></li> : ''}
        {/* <li><NavLink to={'/login'}>Login</NavLink></li> */}
    </>
    const handleSignOut = () => {
        signOutFromSite()
            .then()
            .catch()
    }


    return (
        <div className="navbar drop-shadow-lg ">
            <div className="container mx-auto">
                <div className="navbar-start flex items-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="text-yellow-500 drop-shadow-lg btn btn-ghost normal-case text-xl"><span className="text-pink-600 font-bold text-5xl">B</span>everage.io</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex justify-end items-center gap-7">
                        {
                            user ?
                                <div className="flex-none gap-2">
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user.photo || user.photoURL} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-64">
                                            <li><button>{user.email}</button></li>
                                            <li><button onClick={handleSignOut}>Sign Out</button></li>
                                        </ul>
                                    </div>
                                </div>
                                :
                                <Link to={'/login'}>Sign In</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;