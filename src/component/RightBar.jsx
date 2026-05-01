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
                : user ? <div className="">
                    <Link><Image src={user?.image || useimg} alt="User Image" width={40} height={40} className="rounded-full" ></Image></Link>
                    <Link href={'/profile'} className="btn btn-success">Your Profile</Link>
                    <Link href={'/login'} onClick={async() => { await authClient.signOut()}} className="btn">Log Out<MdLogout /></Link>
                </div>
            : <Link href={'/login'} className="btn btn-success">Log In<MdLogin /></Link>
            }
        </div>
    );
};

export default RightBar;