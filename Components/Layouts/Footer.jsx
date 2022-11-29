import React from "react";
import { FaDiscord } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid ">
        <div className="row px-4 ">
          <div className="col-md-3 my-3 ">
            <img src="Assests/header-img.png" alt="" />
            <p className="footer-para-color mt-3">
              © 2022 by Somnium Space LTD. Somnium Space and Somnium Space Logo
              are trademarks of Somnium Space LTD. All other trademarks are the
              property of their respective owners. All rights reserved.
            </p>
          </div>
          <div className="col-md-2 mt-5 footer-para">
            <p className="footer-para">Get Somnium</p>
            <p className="footer-para">Events</p>
          </div>
          <div className="col-md-2 mt-5 footer-para">
            <p className="footer-para">Partners</p>
            <p className="footer-para">Support</p>
          </div>
          <div className="col-md-2 mt-5 footer-para">
            <p className="footer-para">Terms of Service</p>
            <p className="footer-para">Privacy Policy</p>
          </div>
          <div className="col-md-1 mt-5 footer-para">
            <p className="footer-para">FAQ</p>
            <p className="footer-para">Contact</p>
          </div>
          <div className="col-md-2 mt-5">
            <FaDiscord color="white" size={25} /> &nbsp;&nbsp;
            <FaFacebookF color="white" size={20} /> &nbsp;&nbsp;
            <BsTwitter color="white" size={23} />
            <br />
            <FaDiscord color="white" size={25} /> &nbsp;&nbsp;
            <FaFacebookF color="white" size={20} /> &nbsp;&nbsp;
            <BsTwitter color="white" size={23} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
