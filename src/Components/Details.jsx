import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router';
import { Bounce, ToastContainer, toast } from 'react-toastify';
 const notify = () => toast.success('Review Submitted!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});

const Details = () => {
    const {id}=useParams()
    const data=useLoaderData()
    const filterd=data.find(d=>d.id==id)
    
const reviewSub=(e)=>{
e.preventDefault()
 notify()


}



    return (
        <div>
             <Helmet><title>Boxify | Details</title></Helmet>
            <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure className='w-[50%] h-96'>
    <img className=''
      src={filterd.thumbnail}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{filterd.name}</h2>
    <p>{filterd.description}</p>
    <b>Features:</b>
    <p>{filterd.features.join(" || ")}</p>
    <b>benefits:</b>
    <p>* {filterd.subscription_benefits.join("   *     ")}</p>
    <b>Ratings: {filterd.ratings}⭐</b>
    <b>Total Reviews: {filterd.number_of_reviews}</b>
    <div className="card-actions ">
        <form onSubmit={reviewSub}>
            <input type="text" required className='input' placeholder='Review' />
            <select defaultValue="Ratings" className="select my-4" name="Ratings" id="">
                 <option disabled={true}>Ratings</option>
<option value="1">⭐1</option>
<option value="2">⭐2</option>
<option value="3">⭐3</option>
<option value="4">⭐4</option>
<option value="5">⭐5</option>

            </select>
             <button className="btn btn-primary">Review</button>
        </form>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;