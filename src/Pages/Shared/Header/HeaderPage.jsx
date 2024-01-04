import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
const HeaderPage = () => {
    return (
        <div >
          <img className=' mx-auto mt-4' src={logo} alt="" />
          <p className='text-center text-xl mt-4'>Journalism Without Fear or Favour</p>
          <p className='text-xl text-center mt-4 font-bold'>{
            moment().format("dddd, MMMM DD , YYYY")
            }</p>
        </div>
    );
};

export default HeaderPage;