import React from "react";
import { Link } from "react-router-dom";

export default function Song(Props) {

  return (
    <div className="card m-4 shadow mb-5 bg-white rounded" style={{width : "300px",position : "relative"}}>
      <img src={Props.song.artworkUrl100} className="card-img-top" style={{height : "250px", width : "auto", margin : "0px"}} alt="..." />
      <div className="card-body mt-3">
        <h5 className="card-title">{Props.song.trackName}</h5>
        <p className="card-text">{Props.song.artistName} </p>
        <Link to={`/player/${Props.song.trackName}`} state={{data : Props.song}}>
          <button className="round-btn" 
          >
            <i className="fa fa-play"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}
