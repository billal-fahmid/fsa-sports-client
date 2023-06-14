import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useSelectItem from '../Hooks/useSelectItem';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import useAuth from '../Hooks/useAuth';
import useUsers from '../Hooks/useUsers';
import { BiSelectMultiple,  } from 'react-icons/bi';
import { MdManageAccounts, MdPayments } from 'react-icons/md';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { GrAdd } from 'react-icons/gr';
import { SiGoogleclassroom, SiGoogletagmanager } from 'react-icons/si';

const DashboardLayout = () => {
    const {user} = useAuth()
    // const status = 'instructor';
    const [status] = useUsers()
    console.log(status)
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
                    <h2 className='text-xl font-bold text-orange-400'>Welcome , <span className='text-2xl'>{user.displayName}</span></h2>



                    {
                        status === 'student' && <>     <li><Link to='/dashboard/selectedclasses'><BiSelectMultiple></BiSelectMultiple> Selected Classes<div className="badge badge-secondary">+ {selectedClasses.length}</div>
                        </Link></li>
                            <li><Link to='/dashboard/enrolledclasses'><IoMdCheckmarkCircle></IoMdCheckmarkCircle> Enrolled Classes</Link></li>
                            {/* <li><Link to='/dashboard/payment'>Payment</Link></li> */}
                            <li><Link to='/dashboard/paymenthistory'><MdPayments></MdPayments> Payment History</Link></li> </>}
                    {
                        status === 'instructor' &&

                        <>     <li><Link to='/dashboard/addclass'><GrAdd></GrAdd> Add Class</Link></li>
                            <li><Link to='/dashboard/myclass'><SiGoogleclassroom></SiGoogleclassroom> My Class</Link></li> </>
                    }
                    {
                        status === 'admin' &&

                        <>     <li><Link to='/dashboard/manageclasses'><SiGoogletagmanager></SiGoogletagmanager> Manage Classes</Link></li>
                            <li><Link to='/dashboard/manageusers'><MdManageAccounts></MdManageAccounts> Manage Users</Link></li>
                        </>


                    }



                </ul>

            </div>
        </div>
     
       </div>
    );
};

export default DashboardLayout;