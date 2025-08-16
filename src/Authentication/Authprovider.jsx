import React, { useEffect } from 'react';
import { Authcontext } from './Authcontext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase.init';
import { useState } from 'react';
const provider = new GoogleAuthProvider();
const Authprovider = ({children}) => {
const [passd,setpass]=useState("")

    const [loading,setloading]=useState(true)
const [user,setuser]=useState(null)

const handleReg=(email,password)=>{
    setloading(true)
return createUserWithEmailAndPassword(auth, email, password)

}


const handleLog=(email,password)=>{
setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
  
}

const signinwithGoogle=()=>{
setloading(true)
    return signInWithPopup(auth, provider)
}

const updateuser=(name,photo)=>{
   return updateProfile(auth.currentUser, {
  displayName: name, photoURL: photo
})
}
console.log(user);
useEffect(()=>{
const unsub=onAuthStateChanged(auth, (cuser) => {

setuser(cuser);
setloading(false)
})
return ()=>unsub()
},[])



const logout=()=>{
 return signOut(auth)
}

const passreset=(email)=>{
   return sendPasswordResetEmail(auth, email)
}



const users={
    handleReg,
    handleLog,
    user,
    logout,
    signinwithGoogle,
    loading,
    setpass,
    passd,
    passreset,
    updateuser
}

    return (
        <div>
            <Authcontext value={users}>
                {children}
            </Authcontext>
        </div>
    );
};

export default Authprovider;