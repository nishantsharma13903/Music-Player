import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { delSong, returnInfo } from '../Services/favourite_manager'

export default function FavouriteCard(Props) {
  const [del_arr,setDelArr] = useState(returnInfo());

  const removeSong = ()=>{
    setDelArr(delSong(Props.song.trackId));
  }

  useEffect(()=>{
    Props.fun(del_arr);
  },[del_arr])
  
  return (
    <div>
        <div className="card m-3" >
            <div className="row no-gutters">
              <div className="col-md-3 d-flex justify-content-center">
                <img src={Props.song.artworkUrl100} className="fav-img" alt="..." />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">{Props.song.trackName}</h5>
                  <p className="card-text">
                    {Props.song.primaryGenreName}
                  </p>
                    <div className="d-flex pr-btn">
                      <Link to={`/player/${Props.song.trackName}`} state={{data : Props.song}} className='text-decoration-none'>
                          <button className='fav-btn'>
                            <i className='fa fa-play'></i>
                          </button>
                      </Link>
                        <button onClick={removeSong} className='fav-btn'>
                          <i className='fa fa-trash'></i>
                        </button>
                    </div>                  
                </div>
              </div>
            </div>
          </div>

    </div>
  )
}
