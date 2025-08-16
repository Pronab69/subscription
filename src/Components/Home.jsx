import React from 'react';
import Slider from './Slider';
import { useLoaderData } from 'react-router';
import Showsub from './Showsub';
import Register from './Register';
import WhyChooseUs from './Why';
import About from './About';

const Home = () => {
    const data=useLoaderData()
 
    return (
        <div>
            <Slider></Slider>

            <div className='grid grid-cols-1 gap-5 md:grid-cols-3 '> {data.map(d=><Showsub  d={d} key={d.id}></Showsub>)}</div>
            <WhyChooseUs></WhyChooseUs>
            <About></About>
          
        </div>
    );
};

export default Home;