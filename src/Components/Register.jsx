import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Authcontext } from '../Authentication/Authcontext';
import {  Bounce, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
const notify = () => toast.success('Suucesfully registerd', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
containerId:2
});

const notify2=(msg)=>toast.error(msg, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
containerId:3
});

const Register = () => {
  const [show,setshow]=useState(false)
const navigate=useNavigate()

    const {handleReg,signinwithGoogle,updateuser}=use(Authcontext)
    const handleRege=(e)=>{
e.preventDefault()
const name=e.target.name.value
const email=e.target.email.value
const photo=e.target.photo.value
const paswword=e.target.password.value
handleReg(email,paswword)
 .then(() => {
    notify();
    navigate("/login")
    updateuser(name,photo)
  .then(() => {
  
}).catch((error) => {
alert(error)
});

   
  })
  .catch((error) => {
    
    const errorMessage = error.message;
  
    notify2(errorMessage)
    
  });

}


const logGoogle=()=>{

  signinwithGoogle()
  .then((result) => {
   notify(result);
   navigate("/")
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
notify2(errorCode)
    // ...
  });
}
    return (
   <div className="hero bg-base-200 min-h-screen">
     <Helmet><title>Boxify | Register</title></Helmet>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRege} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input required type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Photo Url</label>
          <input type="Text" className="input" name='photo' placeholder="Photourl" />
          <label className="label">Password</label>
          <div className=''> <input name='password' type={show?"text":"password"} required
          pattern="^(?=.*[A-Z])(?=.*[a-z]).{6,}$" 
         title="Must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long" 
          className="input relative" placeholder="Password" />
          <p onClick={()=>setshow(!show)} className='btn absolute right-0'>
            {show?"hide":" show"}
          </p>
          </div>
         
          <div>Already Have an account?<Link to={"/login"} className="link link-hover">Login</Link></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <button onClick={logGoogle} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;