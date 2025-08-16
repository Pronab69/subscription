import React, { use } from 'react';
import { Authcontext } from '../Authentication/Authcontext';

const Forget = () => {
    
    const {passd,passreset}=use(Authcontext)

    const handlereset=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        passreset(email)
        .then(() => {
    alert("An email sent to your mail")
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    alert(errorMessage)

  });
    }
    return (
        <div>
          <form onSubmit={handlereset}>

            <input className='input' required type="email" name='email' defaultValue={passd} />
            <button className='btn'>Reset password</button>
          </form>
        </div>
    );
};

export default Forget;