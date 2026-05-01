import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='w-full h-[70vh] flex flex-col justify-center items-center gap-5'>
            <h1 className='text-xl'>Not Found: <span className='text-red-500'>404</span></h1>
            <Link href={'/'}><button  className='btn bg-red-700'>Go Home</button></Link>
        </div>
    );
};

export default NotFound;