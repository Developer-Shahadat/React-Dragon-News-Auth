import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import leftimg1 from '../../../assets/1.png';
import leftimg2 from '../../../assets/2.png';
import leftimg3 from '../../../assets/3.png';
import moment from 'moment';
import {FaCalendar} from 'react-icons/fa';

const LeftSideNav = () => {
    const [categories , setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    
    return (
        <div className='space-y-6'>
            <h2 className='font-semibold '>All Categories</h2>

            <div className='space-y-6'>
                {
                    categories.map(item => <NavLink to={`/item/${item.id}`} className="block font-semibold ml-4" key={item.id}>{item.name}</NavLink>)
                }
            </div>

            <div className=' mt-10 '>
                
                <img src={leftimg1} alt="" />
                <p className='text-xl mt-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex gap-6 mt-2'>
                    <p>Sports</p>
                    <div className='flex gap-3 items-center'>
                        <FaCalendar></FaCalendar>
                        <span>
                            {
                                moment().format( "MMM DD , YYYY")
                            }
                        </span>
                    </div>
                </div>

                <img className='mt-4' src={leftimg2} alt="" />
                <p className='text-xl mt-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex gap-6 mt-2'>
                    <p>Sports</p>
                    <div className='flex gap-3 items-center'>
                        <FaCalendar></FaCalendar>
                        <span>
                            {
                                moment().format( "MMM DD , YYYY")
                            }
                        </span>
                    </div>
                </div>
                <img className='mt-4' src={leftimg3} alt="" />
                <p className='text-xl mt-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex gap-6 mt-2'>
                    <p>Sports</p>
                    <div className='flex gap-3 items-center'>
                        <FaCalendar></FaCalendar>
                        <span>
                            {
                                moment().format( "MMM DD , YYYY")
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;