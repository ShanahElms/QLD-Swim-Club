import React from 'react';
import "./AboutUs.css";
import {aboutus} from '../../constants/data';

const AboutUs = () => {
  return (
    <div className='aboutus section-p' id='aboutus'>
      <div className='container'>
        <div className='aboutus-content'>
          <div className='section-title'>
            <h3 className='text-celadon-blue'>About<span className='text-night-rider'>Us</span></h3>
            <p className='text'>Diving and thriving since 1981</p>
          </div>

          <div className='aboutus-list grid'>
            {
              aboutus.map((aboutus, index) => {
                return (
                  <div className='aboutus-item text-center' key={index}>
                    <div className='aboutus-item-img'>
                      <img src= {aboutus.image} className="mx-auto" alt="" />
                    </div>
                    <div className='aboutus-item-text'>
                      <h4 className='fs-22 fw-5 op-08'>{aboutus.title}</h4>
                      <p className='text mx-auto'>{aboutus.paragraph}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs