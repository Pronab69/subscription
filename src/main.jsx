import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
 
  RouterProvider,
} from "react-router";
import { router } from './Routes/Routes.jsx';
import { Bounce, ToastContainer } from 'react-toastify';
import Authprovider from './Authentication/Authprovider.jsx';
import { HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider><Authprovider>
      <RouterProvider router={router} />
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}

/>

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
containerId={2}
/>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
containerId={3}
/>
    </Authprovider>
    </HelmetProvider>
    
  </StrictMode>,
)
