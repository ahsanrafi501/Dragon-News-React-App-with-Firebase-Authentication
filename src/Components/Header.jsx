import React from 'react';
import icon from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <img src={icon} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(), "EEEE, LLLL dd, yyyy")}</p>
        </div>
    );
};

export default Header;