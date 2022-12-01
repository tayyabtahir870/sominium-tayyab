import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FacebookEmbed } from "react-social-media-embed";
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import {FaTelegramPlane} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {FaMedium} from 'react-icons/fa';

function Community() {
  return (
    <div className="community">
      <div className="container">
        <div className="row text-center  ">
          <h3 className="heading1 mt-5">KEEP IN TOUCH WITH</h3>
          <h3 className="heading2">SOMNIUM COMMUNITY</h3>
          <h3 className="heading1">
            Share your thoughts with Us and the World
          </h3>
          <p className="mt-5 para">
            We are an open social world. Our community is the most important
            thing. We are active and happy to <br /> answer every question
            through our live channels or through our social channels.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 my-5 text-center">
            <div className="mb-2">
              <TiSocialTwitterCircular color="white" size={80} />
            </div>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="SomniumSpace"
              options={{ height: 450 }}
            />
          </div>
          <div className="col-md-6 my-5 text-center">
            <div className="mb-3">
              <CiFacebook color="white" size={70} />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FacebookEmbed
                url="https://www.facebook.com/andrewismusic/posts/451971596293956"
                width={550}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="community-icons">
        <div className="container">
          <div className="row my-2">
            <div className="col-md-1"></div>
            <div className="col-md-2 my-3">
              <FaTelegramPlane color="white" size={40}/>
            </div>
            <div className="col-md-2  my-3">
            <BsInstagram color="white" size={40}/>
            </div>
            <div className="col-md-2  my-3">
            <BsYoutube color="white" size={40}/>
            </div>
            <div className="col-md-2  my-3">
            <FaMedium color="white" size={40}/>
            </div>
            <div className="col-md-2  my-3">
            <BsLinkedin color="white" size={40}/>
            </div>
            <div className="col"></div>
           

              {/* <div className="text-center d-flex justify-content-center">
              <div class="hstack gap-3">
  <div>
    <FaTelegramPlane color="white" size={40}/>
  </div>
  <div class="vr"></div>
  <div >
    <BsInstagram/>
  </div>
  <div class="vr"></div>
  <div class="bg-light border">Third item</div>
  <div class="vr"></div>
  <div class="bg-light border">Third item</div>
</div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
