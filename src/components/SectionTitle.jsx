import React from 'react';

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='text-center p-10'>
            <p className='text-4xl font-bold text-indigo-600 pb-4'>{title}</p>
            <h2 className=' text-[16px] '>{subTitle}</h2>
        </div>
    );
};

export default SectionTitle;