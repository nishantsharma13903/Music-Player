import React from "react";
import video from "../Images/waves.mp4";
import img from '../Images/download.jfif'
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="vid-bg">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="vid-upper px-3 pt-4 pb-5">
        <div className="d-flex">
          <Link to="/home" className="text-decoration-none text-align-start">
            <button className="back-btn">
              <i className="fa fa-arrow-left"></i>
            </button>
          </Link>
        </div>
        <div className="text-center p-3">
            <h3 className="text-decoration-underline">Nishant Sharma</h3>
            <img src={img} alt="" className="player-img mb-5 mt-3" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni praesentium voluptas iusto aut laborum, molestiae reprehenderit! Veritatis consectetur, quis ab aperiam cumque numquam aliquam. Accusantium ipsam natus error alias?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam nisi tenetur ad atque maiores! Delectus quis asperiores quam provident totam!</p>
        </div>
      </div>
    </div>
  );
}
