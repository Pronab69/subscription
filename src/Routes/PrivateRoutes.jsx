import React, { use } from 'react';
import { Authcontext } from '../Authentication/Authcontext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
const location=useLocation()

    const {user,loading}=use(Authcontext)
    if(loading)
    {
        return <span className="loading absolute left-[50%] top-[30%] loading-spinner loading-xl"></span>
    }
    if(!user){
        return <Navigate state={location.pathname} to={"/login"}></Navigate>
    }
    return children
};

export default PrivateRoutes;