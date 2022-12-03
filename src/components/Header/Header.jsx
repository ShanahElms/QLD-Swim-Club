import React from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div className='header flex flex-col' id='header'>
        <Navbar />
        <div className='container flex'>
            <div className='header-content'>
                <h1 className='text-uppercase text-white fw-6 ls-2'>swim for the sunshine state</h1>
                <h2 className='text-white op-07 fw-6 header-title'>Take The Plunge</h2>
                <div className='btn-groups flex'>
                  <button type='button' className='btn-item bg-transparent fw-4 ls-2'>Learn More</button>
                  <button type='button' className='btn-item bg-celadon-blue fw-4 ls-2'>Meet Our Champions</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header