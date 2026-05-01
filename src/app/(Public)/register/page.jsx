'use client'
import { authClient } from '@/lib/auth-client';
import { object } from 'better-auth';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {
  const handleRegister = async(e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries())
    console.log('Form submitted with:', userData);
    const {data, error} = await authClient.signUp.email({
      name: userData.name,
      photolink: userData.photolink,
      email: userData.email,
      password: userData.password,
      callbackURL: '/'
    })
    console.log('Sign up response:', {data, error});
    
    if(error){
        alert('Error sign up:' + error.message)
    }
    if(data){
        alert('sign up successful! Check your Email.')
    }
  }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Sign Up!</h1>
    </div>
    <div className="card bg-base-100 w-80 max-w-sm shrink-0 shadow-2xl">
      <div  className="card-body">

        <form onSubmit={handleRegister} >
          <fieldset className="fieldset">
          <label className="label font-extrabold">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />

          <label className="label font-extrabold">Photo-url</label>
          <input type="text" name='photolink' className="input" placeholder="Photo-url" />

          <label className="label font-extrabold">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />

          <label className="label font-extrabold">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
        <p className='divider'>Or</p>
        <div className="flex items-center gap-5 btn btn-success text-white"><FaGoogle></FaGoogle> Sign in with Google</div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;