import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link>Dashboard</Link></li>
        <li><Link>Profile picture</Link></li>
        <li><Link to='/login'>Login</Link></li>
        
    </>
    return (
        <div className="navbar bg-base-100 z-10 bg-opacity-60 fixed">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className='flex items-center py-1 justify-between'>
                    <img className='h-16 w-16' src='https://www.logomyway.com/logos_new/25473/Functional_Sports_Academy_1_358857187133.png' alt="" />
                    <h2 className='text-xl w-full font-semibold '>FSA-Sports</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu font-semibold menu-horizontal px-1">
                
                    {navItems}
                 
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;