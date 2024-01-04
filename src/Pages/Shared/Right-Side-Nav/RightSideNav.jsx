import React from 'react';
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'
import {  FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';


const RightSideNav = () => {
    return (
        <div>
            {/* Log In  */}
            <div className='py-4 space-y-3'>
                <h1 className='text-3xl font-bold'>Login With</h1>
                <button className='btn btn-outline btn-info w-full'>
                    <FaGoogle className='text-xl'></FaGoogle>
                    <span>Log With Google</span>
                </button>
                <button className='btn btn-outline btn-neutral w-full'>
                    <FaGithub className='text-xl'></FaGithub>
                    <span>Log With GitHub</span>
                </button>
            </div>

            {/* Find On US */}
            <div className=' mt-8 mb-10'>
                <h1 className='text-3xl font-bold mb-6'>Find Us On </h1>
                <a className='border py-4 rounded-t-lg flex items-center' href="">
                    <FaFacebook className='text-xl mr-2 ml-3 text-blue-800'></FaFacebook>
                    <span className=''>Facebook</span>
                </a>
                <a className='border-x py-4  flex items-center' href="">
                   <FaInstagram className='text-xl mr-2 ml-3 text-red-500'></FaInstagram>
                    <span className=''>Instagram</span>
                </a>
                <a className='border py-4 rounded-b-lg flex items-center' href="">
                    <FaTwitter className='text-xl mr-2 ml-3 text-blue-400'></FaTwitter>
                    <span className=''>Twitter</span>
                </a>
            
            </div>

            {/* Q Zone  */}
            <div className=' mt-8 mb-10 bg-slate-100 rounded-lg'>
                <h1 className='text-3xl font-bold mb-6'>Q-Zone </h1>
                <img src={QZone1} alt="" />
                <img src={QZone2} alt="" />
                <img src={QZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;
