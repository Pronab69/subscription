import React from 'react';
import { Link } from 'react-router';

const Showsub = ({d}) => {
   
    return (
        <div className='mt-5 px-10 border py-3'>
            <div className="card bg-base-100  shadow-sm">
  <figure>
    <img className='w-full h-72'
      src={d.thumbnail}
      alt={d.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{d.name}</h2>
    <p>{d.tech_category}</p>
    <p>{d.description}</p>
    <b className='text-xl'>$ {d.price}</b>
    <b>{d.frequency}</b>
    <div className="card-actions justify-end">
      <Link to={`/Details/${d.id}`} className="btn btn-primary">View More</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Showsub;