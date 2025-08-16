import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Components/Home";
import Details from "../Components/Details";
import Register from "../Components/Register";
import Login from "../Components/Login";
import Profile from "../Components/Profile";
import PrivateRoutes from "./PrivateRoutes";
import Eroor from "../Components/404";
import Aboutus from "../Components/Aboutus";
import Forget from "../Components/Forget";

export const router = createBrowserRouter([
  {
    path: "/",
   Component:App,
   children:[
    {index:true,
        Component:Home,
        loader:()=>fetch("../service.json")
    },
    {
        path:"/Details/:id",
        
        loader:()=>fetch("../service.json"),
        element:<PrivateRoutes><Details></Details></PrivateRoutes>
    },{
        path:"/register",
        Component:Register
    },{
        path:"/login",
        Component:Login
    },{
        path:"/profile",
      element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
    },
    {
        path:"/aboutus",
        element:<PrivateRoutes><Aboutus></Aboutus></PrivateRoutes>
    } ,{
      path:"/forget",
      Component:Forget
    }  ]
  },{
    path:"*",
    Component:Eroor
  }
]);