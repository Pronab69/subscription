import React from 'react';
import { NavLink } from 'react-router';

const Links = () => {
    return (
       <>
       
       <li><NavLink to={"/"}>Home</NavLink></li>
       <li><NavLink to={"/profile"}>Profile</NavLink></li>
       <li><NavLink to={"/aboutus"}>About</NavLink></li>
       </>
    );
};

export default Links;