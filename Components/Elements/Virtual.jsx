import React from "react";
import Available from "./Available";

function Virtual() {
  return (
    <div className="virtual">
      <div className="container ">
        <div className="row text-center ">
            <h3 className="somi mt-5 ">SOMNIUM SPACE IS A</h3>
            <h3 className="vr-ral">VIRTUAL REALITY WORLD</h3>
            <h3 className="open">Open, Social & Persistent</h3>
        </div>
        <div className="row mt-5 ">
          <div className="col-md-3 text-end">
            <p className="para-left">
              We are creating an Open, Social, Virtual Reality world. A world
              with its own economy and its own currency. A VR world with its own
              Marketplace, Games, Social experiences and Virtual Land ownership.
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="Assests/virtual.page.png" alt="" />
          </div>
          <div className="col-md-3">
            <p className="para-right">
              A VR world which is fully interconnected and seamless. Fully
              accessible from any device: PC & VR clients for user's Desktop or
              an immersive VR experience on mobile devices.
            </p>
          </div>
        </div>
        <div className="row">
            <div className="col-md-3 ">
               <img className="img-fluid img1" src="Assests/computer.png"  />
            </div>
            <div className="col-md-6 vr-box text-center ">
                 <p >PC VR Mode</p>
                 <p>Live Inside Somnium World</p>
            </div>
            <div className="col-md-3 img2">
               <img className="img-fluid" src="Assests/vrbox.png" alt="" />
            </div>
        </div>
        <div className="row mb-5">
           <div className="col-md-3 end-para text-end">
             <p>Chat, Build,</p>
             <p>Trade in dedicated Somnium PC client</p>
           </div>
           <div className="col-md-6">

           </div>
           <div className="col-md-3 end-para">
                       <p>Oculus Quest</p>
                       <p>Compatible</p>
           </div>
        </div>
      </div>
      <div>
        <Available/>
      </div>
    </div>
  );
}

export default Virtual;
