import React from 'react';
import PropTypes from 'prop-types';

const Banner = props => {
    return (
        <div className='bg-[url("./assets/image/Rectangle.png")] bg-cover bg-center h-screen mt-10 rounded-3xl content-center'>
            <div className='text-white p-20 space-y-10'>
                <h2 className='text-4xl lexend-800 leading-10'>Discover an exceptional cooking class tailored for you!</h2>
                <p className='lexend-200'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className='mt-10 space-x-10 lexend-200'>
                    <button type='button' className='h-auto p-3 rounded-xl bg-rose-400 font-bold text-slate-700'>Explore Now</button>
                    <button type='button' className='h-auto p-3 rounded-xl bg-transparent font-bold text-white border-white border-2'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {

};

export default Banner;