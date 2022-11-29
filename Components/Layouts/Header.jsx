import React from "react";
import {FaDiscord} from 'react-icons/fa';
import {GrFacebookOption} from 'react-icons/gr';
import {FiInstagram} from 'react-icons/fi';
import {FaTelegramPlane} from 'react-icons/fa';

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="Assests/header-img.png" alt="" />
          </a>  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="header2">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mt-4">
                <a className="nav-link active " aria-current="page" href="#">
                <p className="header-button ">Blockchain</p>
                </a>
              </li>
              <li className="nav-item mt-4">
                <a className="nav-link active" aria-current="page" href="#">
                <p className="header-button">Mechanics</p>
                </a>
              </li>
              <li className="nav-item mt-4">
                <a className="nav-link active" aria-current="page" href="#">
                <p className="header-button"> Partners</p>
                </a>
              </li>
              <li className="nav-item mt-4">
                <a className="nav-link active" aria-current="page" href="#">
                <p className="header-button"> Events</p>
                </a>
              </li>
              <li className="nav-item mt-1 ">
                <a className="nav-link active " aria-current="page" href="#">
                 <button className="header-color-button">Explore Somnium Map</button>
                </a>
              </li>
              <li className="nav-item mt-1">
                <a className="nav-link active" aria-current="page" href="#">
                <button className="header-color-button1">Marketplace</button>
                </a>
              </li>
            
             
             
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active " aria-current="page" href="#">
                <p className="header-button ">Log In</p>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">
                <p className="header-button">Sign Up</p>
                </a>
              </li>
              <li className="nav-item ">
                {/* <a className="nav-link active" aria-current="page" href="#"> */}
                 
                <FaDiscord color="white" size={20}/>
                <GrFacebookOption color="white" size={20}/>
                <FiInstagram color="white" size={20}/>
                <FaTelegramPlane color="white" size={20}/>
                

               
                {/* </a> */}
              </li>
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">
                <p className="header-button"> Events</p>
                </a>
              </li>  
            </ul>
          </div>
           
            
           
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
