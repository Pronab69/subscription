import React, { use, useRef } from 'react';
import { Authcontext } from '../Authentication/Authcontext';
import { Link, Navigate, useNavigate } from 'react-router';
import {  Bounce, toast } from 'react-toastify';
import { useLocation } from 'react-router';
import { Helmet } from 'react-helmet-async';
const notify = () => toast.success('Suucesfully Logedin', {
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
const Login = () => {
const navigate =useNavigate()
const location=useLocation()
const email =useRef(null)
const {handleLog,signinwithGoogle,setpass}=use(Authcontext)

const handleLogin=(e)=>{
    
 
    
    e.preventDefault()
    const email=e.target.email.value
    const passw=e.target.password.value
handleLog(email,passw)
.then(() => {
   
   
    notify();
  navigate(location?.state||"/")
  })
  .catch((error) => {
    const errorCode = error.code;
   
    notify2(errorCode)
  });

}

const logGoogle=()=>{

  signinwithGoogle()
  .then((result) => {
   notify(result);
   navigate(location?.state||"/")
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
notify2(errorCode)
    // ...
  });
}
const forpass = () => {
  const myemail = email.current.value;
           console.log(myemail);  

  if (myemail) {              
    setpass(myemail);
    navigate("/forget")
  } else {
    alert("Provide an email");
  }
};
    return (
         <div className="hero bg-base-200 min-h-screen">
           <Helmet><title>Boxify | Login</title></Helmet>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
         
          <label className="label">Email</label>
          <input required type="email"  ref={email} name='email' className="input" placeholder="Email" />
         
          <label className="label">Password</label>
          <input name='password' type="password" required
          pattern="^(?=.*[A-Z])(?=.*[a-z]).{6,}$" 
         
         title="Must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long" 
          className="input" placeholder="Password" />
          <div>Already Have an account?<Link to={"/register"} className="link link-hover">Register</Link></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p className='cursor-pointer' onClick={forpass}>Forget password</p>
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

export default Login;