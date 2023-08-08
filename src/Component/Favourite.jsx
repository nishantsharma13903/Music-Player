import React, { useEffect, useState } from "react";
import video from "../Images/waves.mp4";
import FavouriteCard from "./FavouriteCard";
import { returnInfo } from "../Services/favourite_manager";
import { Link } from "react-router-dom";

export default function Favourite() {
  const [fav_item, setFavItem] = useState(JSON.parse(localStorage.getItem('del'))? JSON.parse(localStorage.getItem('del')) :[]);

  useEffect(() => {
    setFavItem(returnInfo());
  }, []);

  const getData = (arr) => {
    setFavItem(arr);
  };

  return (
    <div className="vid-bg">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="vid-upper px-3 pt-4 pb-5">
        <div className="d-flex">
          <Link
            to="/home"
            className="text-decoration-none text-align-start"
          >
            <button className="back-btn">
              <i className="fa fa-arrow-left"></i>
            </button>
          </Link>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h1 className="text-center">
            <i>Favourite Songs</i>
          </h1>
          <div className="fav-cont col-12 d-flex flex-column border-top">
            {JSON.parse(localStorage.getItem('del')) && JSON.parse(localStorage.getItem('del')).map((item, index) => {
              return <FavouriteCard song={item} fun={getData} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
