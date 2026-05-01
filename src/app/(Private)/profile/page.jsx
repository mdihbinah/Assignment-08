'use client'
import Image from 'next/image';
import React from 'react';
import userimg from '@/Asset/user.png'
import { IoPersonSharp } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

const UserProfile = () => {
    const {data: session, isPending} = authClient.useSession()
    const user = session?.user
    console.log(session);
    return (
        <div className='container px-10 mx-auto'>
            <h2 className='text-xl font-bold'>Profile</h2>
            <p className='text-lg opacity-70'>Manage your personal information.</p>
            <div className="card-body flex justify-center items-center gap-3 bg-base-200 rounded-2xl w-[70%] mx-auto mt-10">
                <Image src={user?.image || userimg} alt='User Image' width={80} height={80} className='rounded-full' ></Image>
                <p className='flex items-center gap-1 text-xl'><IoPersonSharp /><span className='font-bold'>Name:</span> {user?.name}</p>
                <p className='flex items-center gap-1 text-lg'><MdOutlineMailOutline /><span className='font-bold'>Email:</span> {user?.email}</p>
                <Link href={'/update'}><button className='btn btn-success'>Update Info</button></Link>
            </div>
        </div>
    );
};

export default UserProfile;