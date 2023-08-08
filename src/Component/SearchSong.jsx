import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

export default function SearchSong(Props) {
    let artist = useRef('');

    const searchArtist = ()=>{
      Props.fun(artist.current.value);
    }

  return (
    <div>
        <div className='bg-img'>
          <div className="d-flex justify-content-evenly">
            <div className="nb-1">
              <h1 className='navbar-head'>Music Player</h1>
            </div>
            <div className="nb-1 d-flex justify-content-evenly nb-2">
              <Link to='/favourite' className='nav-link text-decoration-none text-white'>FAVOURITE</Link>
              <Link to='/about' className='nav-link text-decoration-none text-white'>ABOUT</Link>
            </div>
            <div className="social-icons nb-1">
              <div className="d-flex justify-content-end">
                <div className="social-icons-cont">
                  <i className='fa fa-facebook'></i>
                </div>
                <div className="social-icons-cont">
                  <i className='fa fa-twitter'></i>
                </div>
                <div className="social-icons-cont">
                  <i className='fa fa-youtube'></i>
                </div>
              </div>
            </div>
          </div>
          <div className="center-ele">
            <h1 className="music-head">Musician</h1>
            <div className='inp-cont'>
              <input type="text" ref={artist} className='form-control' placeholder='Search Here ...'/>
              <div className='d-flex justify-content-end'>
                  <button className='search-btn' onClick={searchArtist}>
                    <i className='fa fa-search'></i>
                  </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
