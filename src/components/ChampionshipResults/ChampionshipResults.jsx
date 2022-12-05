import React, {useRef, useState} from 'react';
import "./ChampionshipResults.css";
import images from '../../constants/images';
import {championshipresults_stats} from "../../constants/data";
import {tabledata} from '../../constants/data';
import video from "../../assets/videos/video.mp4";
import {FaPlay} from "react-icons/fa";

const ChampionshipResults = () => {
  const vidRef = useRef(null);
  const [toggleVideo, setToggleVideo] = useState(false);
  const playVideo = () => {
    setToggleVideo(!toggleVideo);
    if(toggleVideo) vidRef.current.play();
    else vidRef.current.pause();
  }

  return (
    <div className='championshipresults section-p'>
      <div className='container'>
        <div className='championshipresults-content'>
          <div className='championshipresults-grid grid'>
            <img src= {images.championshipresults_img_00} alt="" className='championshipresults-image mx-auto' />
            <div className='section-title'>
              <h3 className='text-celadon-blue'>Championship<span className='text-night-rider'>Results</span></h3>
              <p className='text mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iure eius delectus necessitatibus blanditiis adipisci, doloribus odio maxime! Voluptas, placeat.</p>
            </div>
          </div>  

          <div className='championshipresults-grid grid'>
            {
              championshipresults_stats.map((championshipresults_stat, index) => {
                return (
                  <div className='championshipresults-item text-center flex' key = {index}>
                    <div className='championshipresults-item-icon'>
                      <img src = {championshipresults_stat.image} alt="" />
                    </div>
                    <div className='championshipresults-item-text text-left'>
                      <h3 className='fs-24 ls-2'>{championshipresults_stat.value}</h3>
                      <p className='text'>{championshipresults_stat.title}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className='championshipresults-grid grid'>
            <div className='section-title'>
              <h3 className='text-celadon-blue'>Fan<span className='text-night-rider'>Favourite</span></h3>
              <p className='text mx auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perspiciatis ex excepturi commodi quod odit, exercitationem ipsam tempore nostrum! Enim dignissimos earum ducimus at maxime?</p>
            </div>

            <div className='championshipresults-video'>
              <video className='championshipresults-video' autoPlay loop ref = {vidRef}>
                <source src={video} type="video/mp4" />
              </video>
              <button type='button' className='vidPlayBtn flex flex-c' onClick={playVideo}>
                <FaPlay className='text-celadon-blue' size={28} />
              </button>
            </div>
          </div>

          <div className='table'>
            <table>
              <thead>
                <tr>
                  <td>EVENT</td>
                  <td>GOLD</td>
                  <td>SILVER</td>
                  <td>BRONZE</td>
                </tr>
              </thead>
              <tbody>
                {tabledata.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td className='text-celadon-blue fw-7'>{val.race}</td>
                      <td>{val.gold}</td>
                      <td>{val.silver}</td>
                      <td>{val.bronze}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChampionshipResults