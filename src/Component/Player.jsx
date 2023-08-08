import React from 'react'
import video from '../Images/waves.mp4'
import { Link, useLocation } from 'react-router-dom'
import {updateFav} from '../Services/favourite_manager';

export default function Player(Props) {
  const location = useLocation();
  const song = location.state.data;
  return (
    <div className='vid-bg'>
        <video autoPlay loop muted>
            <source src={video} type='video/mp4'/>
        </video>
        <div className="vid-upper px-3 pt-2 pb-5 d-flex flex-column align-items-center">
          <div className="d-flex justify-content-between col-12 mb-3">
            <div>
            <Link to='/home' className='text-decoration-none'>
              <button 
              className='back-btn'>
                <i className='fa fa-arrow-left'></i>
              </button>
            </Link>
            </div>
            <div className="back-btn" onClick={()=>{updateFav(song)}}>
              <i className='fa fa-heart'></i>
            </div>
         </div>
            <h2 className='text-center p2'>{song.trackName}</h2>
            <p>({song.primaryGenreName})</p>
            <img src={song.artworkUrl100} alt="" className='player-img'/>
            <p className='text-center m-3'>{song.shortDescription}</p>
            <p>{song.artistName}</p>
            <audio controls>
              <source src={song.previewUrl} type="audio/mp4"/>
            </audio>
        </div>
    </div>
  )
}
