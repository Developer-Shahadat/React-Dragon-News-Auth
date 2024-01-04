import React from 'react';
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className='mt-4 flex'>
            <button className='btn btn-secondary  text-white'>Latest</button>
            <Marquee className='font-bold' speed={100}>
              <p className='mr-10'>  I can be a React component, multiple React components, or just some text. </p>
              <p className='mr-10'>  I can be a React component, multiple React components, or just some text. </p>
              <p className='mr-10'>  I can be a React component, multiple React components, or just some text. </p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;