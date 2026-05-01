import Link from 'next/link';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Fa0 } from 'react-icons/fa6';

const LogIn = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-80 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label font-extrabold">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label font-extrabold">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>Don't have any account? <Link href={'/register'}  className='text-success link-hover' >Register</Link></p>
        <p className='divider'>Or</p>
        <div className="flex items-center gap-5 btn btn-success text-white"><FaGoogle></FaGoogle> Sign in with Google</div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;