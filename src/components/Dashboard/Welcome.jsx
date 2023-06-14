import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Welcome = () => {
    const {user} = useAuth()
    return (
        <div className='text-5xl font-semibold text-violet-600 text-center mb-10'>
            Welcome Mr/Mis {user.displayName}  Dashboard
        </div>
    );
};

export default Welcome;