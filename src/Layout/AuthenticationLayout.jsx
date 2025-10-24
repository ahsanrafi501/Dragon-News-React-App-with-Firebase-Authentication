import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthenticationLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen py-5'>
            <header className='w-11/12 m-auto'>
              <Navbar></Navbar>
            </header>
            <main className='w-11/12 m-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthenticationLayout;