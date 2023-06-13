import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useEnrolled from '../../../Hooks/useEnrolled';

const PaymentHistory = () => {
    const {user} = useAuth()
    const  [enrolledClasses] = useEnrolled()
    return (
        <div className='w-full h-full p-10 mb-10'>
            <h2 className='text-3xl font-semibold text-violet-600 text-center mb-10'>Payment History</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Transaction ID</th>
                                <th>Date</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enrolledClasses?.map((cla, i) => <tr className="hover">
                                <th>{i +1}</th>
                                <td>{cla.name}</td>
                                <td>{cla.transactionId}</td>
                                <td>{cla.date}</td>
                                <td>$ {cla.price}</td>
                            </tr>)
                            }
                            
                          
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default PaymentHistory;