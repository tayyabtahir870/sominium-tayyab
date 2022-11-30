import React from "react";

function Available() {
  return (
    <div className="available">
      <div className="container">
        <div className="row my-4">
          <div className="col-md-3">
<h1 className="text1 mt-3">Available Now</h1>
          </div>
          <div className="col">
            <img className="img-fluid" src="Assests/window.png" alt="" />
          </div>
          <div className="col">
           <img className="img-fluid" src="Assests/oculus.png" alt="" />
          </div>
          <div className="col">
          <img className="img-fluid" src="Assests/vive.png" alt="" />
          </div>
          <div className="col">
              <img className="img-fluid" src="Assests/steam.png" alt="" />
          </div>
          <div className="col-md-3">
 <h1 className="text1 mt-3">Ready to Play</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Available;
