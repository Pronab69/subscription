import React, { use } from 'react';
import { Authcontext } from '../Authentication/Authcontext';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const {user,updateuser}=use(Authcontext)
    const reupdate=(e)=>{
        e.preventDefault()
const name=e.target.name.value
const image=e.target.image.value
updateuser(name,image)
 .then(() => {
   window.location.reload();
}).catch((error) => {
alert(error)
});
    }
    return (
        <div>
             <Helmet><title>Boxify | Profile</title></Helmet>
             <div className='flex flex-col items-center gap-3'>
                <p><b>Name:</b> {user.displayName}</p>
                <p><b>Email:</b> {user.email}</p>
                {user.photoURL&& ( <img className='w-20 h-20 mt-2' src={user.photoURL} alt="user" />)}
              
              
                <form onSubmit={reupdate} className='border p-5'>
 <b>Change Name and Photo</b>
 <input type="text" required name='name' placeholder='name' className='input mt-2' />
 <br />
 <input type='text' required placeholder='PhotoUrl' className='input my-2' name='image' />
<button className='btn'>Submit</button>
                </form>
             </div>
        </div>
    );
};

export default Profile;