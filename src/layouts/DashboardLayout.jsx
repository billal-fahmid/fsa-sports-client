import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useSelectItem from '../Hooks/useSelectItem';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const DashboardLayout = () => {
    const status = 'instructor';
    const [selectedClasses] = useSelectItem() ;

    return (
        
       <div className='max-w-[2520px] mx-auto  md:px-10 sm:px-2 px-4'>
        <Navbar></Navbar>
         <div className="drawer lg:drawer-open pt-24 h-screen">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Menu Items</label>

                <Outlet></Outlet>

            </div>
            <div className="drawer-side pt-24 lg:pt-0">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 font-semibold text-indigo-600 h-full bg-base-200 ">
                    {/* Sidebar content here */}



                    {
                        status === 'student' && <>     <li><Link to='/dashboard/selectedclasses'>Selected Classes<div className="badge badge-secondary">+ {selectedClasses.length}</div>
                        </Link></li>
                            <li><Link to='/dashboard/enrolledclasses'>My Enrolled Classes</Link></li>
                            {/* <li><Link to='/dashboard/payment'>Payment</Link></li> */}
                            <li><Link to='/dashboard/paymenthistory'>Payment History</Link></li> </>}
                    {
                        status === 'instructor' &&

                        <>     <li><Link to='/dashboard/addclass'>Add Class</Link></li>
                            <li><Link to='/dashboard/myclass'>My Class</Link></li> </>
                    }
                    {
                        status === 'admin' &&

                        <>     <li><Link to='/dashboard/manageclasses'>Manage Classes</Link></li>
                            <li><Link to='/dashboard/manageusers'>Manage Users</Link></li>
                        </>


                    }



                </ul>

            </div>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default DashboardLayout;