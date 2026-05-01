'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';
import { Fa0 } from 'react-icons/fa6';

const LogIn = () => {
  const handleLogin = async(e) =>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const userData = Object.fromEntries(formData.entries())
    console.log('form data', userData);
    const {data, error} = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      callbackURL: '/'
    })

    if(error){
      console.log('Log in Error:' + error.message);
    } else if(data){
      console.log('Log In Successful ');
    }

  }
  const handleGoogleLogIn = async() => {
    const data = await authClient.signIn.social({
      provider: 'google',
    })
  }



    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-80 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
          <label className="label font-extrabold">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label font-extrabold">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        <p>Don't have any account? <Link href={'/register'}  className='text-success link-hover' >Register</Link></p>
        <p className='divider'>Or</p>
        <div  onClick={handleGoogleLogIn} className="flex items-center gap-5 btn btn-success text-white"><FaGoogle></FaGoogle> Sign in with Google</div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;