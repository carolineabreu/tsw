import React from "react";
import "./AboutUs.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function CardItem(props) {
  return (
    <>
      <li className="cards-item-main">
        <div className="cards-item-link" to={props.path}>
          <figure className="cards-item-pic-wraps" data-category={props.label}>
            <img className="cards-img" alt="Travel" src={props.src} />
            <div className="social-media">
              <FaLinkedin size={32} color="blue" />
              <FaGithub size={32} color="black" />
            </div> 
            </figure>
          <div className="card-item-description">
            <div className="cards-item-info">
              <h5 className="cards-item-text">{props.text}</h5>
            </div>
            </div>
         
        </div>
      </li>
    </>
  );
}

export default CardItem;
