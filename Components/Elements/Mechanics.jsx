import React from "react";
import Available from "./Available";

function Mechanics() {
  return (
    <div className="mechanics">
      <div className="container p-5">

    <div className="row text-center">
      
       <h3 className="somi">SOMNIUM SPACE</h3>
       <h3 className="mech">INGAME MECHANICS</h3>
    </div>
        <div className="row ">
          <div className="col-md-4 text-end mt-5">
            <h1 className="heading">Cross Platform</h1>
            <p className="para">Available on all major VR headsets.</p>
          </div>

          <div className="col-md-2  mt-5">
            <img className="img-fluid" src="Assests/camera.png" alt="" />
          </div>
          <div className="col-md-1  mt-5">
            <img className="img-fluid" src="Assests/world.png" alt="" />
          </div>

          <div className="col-md-5  mt-5">
            <h1 className="heading">Persistent Social VR World</h1>
            <p className="para">
              Unlimited scalable world built by users within one instance.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-end  mt-5">
            <h1 className="heading">Customizable PC Client</h1>
            <p className="para">
              Create and adjust your own layout setup for fast in-game
              interaction.
            </p>
          </div>

          <div className="col-md-2  mt-5">
            <img className="img-fluid" src="Assests/system.png" alt="" />
          </div>
          <div className="col-md-1  mt-5">
            <img className="img-fluid" src="Assests/home.png" alt="" />
          </div>

          <div className="col-md-5  mt-5">
            <h1 className="heading">Virtual Land Ownership</h1>
            <p className="para">
              Buy and customize your own land. Build anything you envision.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-end  mt-5">
            <h1 className="heading1">Live Forever</h1>
            <p className="para">
              Automatic recording mode of yourself on your own property for
              future AI analysis to bring your avatar to life.
            </p>
          </div>

          <div className="col-md-2  mt-5">
            <img className="img-fluid" src="Assests/heart.png" alt="" />
          </div>
          <div className="col-md-1  mt-5">
            <img className="img-fluid" src="Assests/script.png" alt="" />
          </div>

          <div className="col-md-5  mt-5">
            <h1 className="heading">Scriptable World</h1>
            <p className="para">
              Program your own experience and monetize through the asset store
              or on your property.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-end  mt-5 mb-5">
            <h1 className="heading">Blockchain</h1>
            <p className="para">
              Integration of blockchain allows true ownership of digital goods,
              avatars, items and virtual land. We are creating a long lasting
              Economy which will allow instant monetization for our in-world
              creators.
            </p>
          </div>

          <div className="col-md-2  mt-5" >
            <img className="img-fluid" src="Assests/blockchain.png" alt="" />
          </div>
          <div className="col-md-1  mt-5">
            <img className="img-fluid" src="Assests/script.png" alt="" />
          </div>

          <div className="col-md-5  mt-5 mb-5 ">
            <h1 className="heading">Monetize Your Space</h1>
            <p className="para">
              Take advantage of fully programmatic VR advertisement plugin.
              Capture and analyze gaze tracking, engagement and conversion
              rates.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Available/>
      </div>
    </div>
  );
}

export default Mechanics;
