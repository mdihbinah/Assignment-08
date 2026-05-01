'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import useimg from '@/Asset/user.png';
import { MdLogin, MdLogout } from "react-icons/md";

const RightBar = () => {
    const {data: session, isPending} = authClient.useSession()
    const user = session?.user
    // console.log('user', user?.image);

    return (
        <div>
            {
                isPending ? <span className="loading loading-spinner text-success loading-xl" ></span>
                : user ? <div className="flex items-center gap-3">
                    <Link href={'/profile'}><Image src={user?.image || 'https://i.ibb.co.com/FkS0byRD/rishad.jpg'} alt="User Image" width={50} height={50} className="rounded-full aspect-square hidden md:flex"></Image></Link>
                    <Link href={'/profile'} className="btn btn-success">Profile</Link>
                    <Link href={'/login'} onClick={async() => { await authClient.signOut()}} className="btn">Log Out<MdLogout /></Link>
                </div>
            : <Link href={'/login'} className="btn btn-success">Log In<MdLogin /></Link>
            }
        </div>
    );
};

export default RightBar;