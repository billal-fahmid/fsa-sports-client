import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const status = 'student';
 
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 font-semibold text-indigo-600 h-full bg-base-200 ">
                    {/* Sidebar content here */}



                    {
                        status === 'student' && <>     <li><Link to='/dashboard/selectedclasses'>Selected Classes</Link></li>
                            <li><Link to='/dashboard/enrolledclasses'>My Enrolled Classes</Link></li>
                            <li><Link to='/dashboard/payment'>Payment</Link></li>
                            <li><Link to='/dashboard/paymenthistory'>Payment History</Link></li> </>}
                    {
                        status === 'instructor' &&

                        <>     <li><Link to='/dashboard/selectedclasses'>Add Class</Link></li>
                            <li><Link to='/dashboard/enrolledclasses'>My Class</Link></li> </>
                            }
                    {
                        status === 'admin' &&

                        <>     <li><Link to='/dashboard/selectedclasses'>Manage Classes</Link></li>
                            <li><Link to='/dashboard/enrolledclasses'>Manage Users</Link></li>
                        </>


                    }



                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;