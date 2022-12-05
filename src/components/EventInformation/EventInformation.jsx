import React from 'react';
import {eventinformation} from '../../constants/data';
import "./EventInformation.css"

const EventInformation = () => {
  return (
    <div className='eventinformation section-p bg-white' id='eventinformation'>
        <div className='container'>
            <div className='eventinformation-content'>
                <div className='section-title'>
                    <h3 className='text-celadon-blue'>Event<span className='text-night-rider'>Information</span></h3>
                    <p className='text'>Upcoming events in 2022/2023</p>
                </div>
                
                <div className='eventinformation-list grid'>
                    {
                        eventinformation.map((eventinformation, index) => {
                            return (
                                <div className='eventinformation-item text-center' key={index}>
                                    <div className='eventinformation-item-title flex'>
                                        <span className='text-celadon-blue fw-7'>Event {index + 1}</span>
                                        <h3 className='text-night-rider fw-5'>{eventinformation.title}</h3>
                                    </div>
                                    <p className='text'>{eventinformation.paragraph}</p>
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

export default EventInformation