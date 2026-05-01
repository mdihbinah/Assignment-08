'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

const Update = () => {
    const [loading, setLoading] = useState(false)

    const handleUpdate = async (e) => {
        e.preventDefault()
        setLoading(true)
        const name = e.target.name.value
        const image = e.target.photolink.value
        console.log(name, image);
        const res = await authClient.updateUser({
            name,
            image,
        })
        setLoading(false)
    }
    return (
        <div>
            <form onSubmit={handleUpdate} className="space-y-3 border-2 p-5 mt-5 rounded-xl container w-[60%] mx-auto">
      <input name="name" placeholder="Name" className="input input-bordered w-full" />
      <input name="photolink" placeholder="Photo Link" className="input input-bordered w-full" /> 

      <button type="submit" className={`w-full  ${loading? 'btn' : 'btn btn-success flex justify-center items-center '}`}>
        {loading ? (<div className="flex gap-3" >
            <span>Updating</span>
            <span className="loading loading-dots"></span>
        </div>) : 'Update Profile'}
      </button>
    </form>
        </div>
    );
};

export default Update;