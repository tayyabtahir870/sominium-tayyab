import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FacebookEmbed } from "react-social-media-embed";
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";
import {RiDiscordLine} from 'react-icons/ri'

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

        <div className="row mb-2 text-center">
          <div>
            <RiDiscordLine color="white" size={80}/>
          </div>
          <iframe
            className="discord"
            src="https://e.widgetbot.io/channels/494994753146847233/496817347211034630"
            width="1200"
            height="400"
          ></iframe>
        </div>

        <div className="row">
          <div className="col-md-6 my-5 text-center">
            <div className="mb-2">
              <TiSocialTwitterCircular color="white" size={80} />
            </div>
            <iframe
            className="twitter"
                id="twitter-widget-1"
                scrolling="no"
                frameborder="0"
                allowtransparency="true"
                allowfullscreen="true"
                class=""
                style={{
                  position: "static",
                  visibility: "visible",
                  width: "500px",
                  height: "600px",
                  display: "block",
                  flexGrow: "1",
                }}
                title="Twitter Timeline"
                src="https://syndication.twitter.com/srv/timeline-profile/screen-name/somniumspace?dnt=false&amp;embedId=twitter-widget-1&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2V4cGVyaW1lbnRzX2Nvb2tpZV9leHBpcmF0aW9uIjp7ImJ1Y2tldCI6MTIwOTYwMCwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19ibHVlX3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2Zyb250ZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19&amp;frame=false&amp;hideBorder=false&amp;hideFooter=false&amp;hideHeader=false&amp;hideScrollBar=false&amp;lang=en&amp;maxHeight=600px&amp;origin=https%3A%2F%2Fsomniumspace.com%2F&amp;sessionId=853b8a8234c39c8530281449ac7b99c3cea57dbf&amp;showHeader=true&amp;showReplies=false&amp;theme=dark&amp;transparent=false&amp;widgetsVersion=a3525f077c700%3A1667415560940"
              ></iframe>
          </div>
          <div className="col-md-6 my-5 text-center">
            <div className="mb-3">
              <CiFacebook color="white" size={70} />
            </div>
            <iframe
            className="facebook"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSomniumSpace&amp;tabs=timeline&amp;width=500&amp;height=600&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
              width="500px"
              height="600px"
              scrolling="no"
              frameborder="0"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="community-icons">
        <div className="container">
          <div className="row my-2">
            <div className="col-md-1"></div>
            <div className="col-md-2 my-3">
              <FaTelegramPlane color="white" size={40} />
            </div>
            <div className="col-md-2  my-3">
              <BsInstagram color="white" size={40} />
            </div>
            <div className="col-md-2  my-3">
              <BsYoutube color="white" size={40} />
            </div>
            <div className="col-md-2  my-3">
              <FaMedium color="white" size={40} />
            </div>
            <div className="col-md-2  my-3">
              <BsLinkedin color="white" size={40} />
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
