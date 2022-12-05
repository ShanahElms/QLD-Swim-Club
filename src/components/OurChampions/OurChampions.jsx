import React, {useState} from 'react';
import {ourchampions} from "../../constants/data";
import "./OurChampions.css";
import {BsPlusLg} from "react-icons/bs";
import {ImCancelCircle} from "react-icons/im";

const OurChampions = () => {
    const [imageModal, setImageModal] = useState(false);
    const [imageSource, setImageSource] = useState("");

    const setImageOnModal = (src) => {
        setImageModal(true);
        setImageSource(src);
    }

  return (
    <div className='ourchampions section-p bg-bubbles' id = "ourchampions">
        <div className={imageModal ? "image-box show-image-box" : "image-box"}>
            <div className='image-box-content'>
                <img src = {imageSource} alt="" />
                <span className='image-box-close-btn' onClick={() => setImageModal(false)}>
                    <ImCancelCircle size = {30} />
                </span>
            </div>
        </div>

        <div className='container'>
            <div className='ourchampions-content'>
                <div className='section-title'>
                    <h3 className='text-celadon-blue'>Our<span className='text-night-rider'>Champions</span></h3>
                    <p className='text'>Our top performing athletes of 2022</p>
                </div>

                <div className='ourchampions-list grid'>
                    {
                        ourchampions.map((ourchampions, index) => {
                            return (
                                <div className='ourchampions-item text-center' key = {index} onClick = {() => setImageOnModal(ourchampions.image)}>
                                    <img src = {ourchampions.image} alt="" />
                                    <span className='ourchampions-item-icon'>
                                        <BsPlusLg size = {38} className = "text-celadon-blue" />
                                    </span>
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

export default OurChampions