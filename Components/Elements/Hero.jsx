import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Hero() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="hero">
     <div className="container-fluid">
      <div className="row">
      <Carousel className="p-0 bg-black"
                  responsive={responsive}
                  // autoPlay="true"
                  interval={2000}
                  infinite="true"
                  rewind={true}
                  axis="horizontal"
                  labels={true}
                  arrows={false}
                  showStatus={true}
                  showIndicators={true}
                  showThumbs={true}
                  showDots={true}
                >
                  <div>
                   <video className="img-fluid video1" src="Assests/v3.mp4" autoPlay loop muted width={"1600"}></video>

                
                  </div>
                  <div>
                    
                    <video className="img-fluid video1" src="Assests/v7.mp4 "autoPlay loop muted width={"1600"}></video>
                   
                  </div>
                  <div>
                    

                  <video className="img-fluid video1" src="Assests/v6.mp4" autoPlay muted loop width={"1600"}></video>
                  </div>
                </Carousel>
                <div className="hero-imgs ">
                  <div className="my-4 px-3">
                  <img className="img1" src="Assests/unity.png" alt="" width={200} />
                  <p className=" img-text">UnitySDK</p>
                  </div>
                </div>
                <div className="hero-imgs1 ">
                  <div className="my-4 px-3">
                  <img className="img1" src="Assests/vrpic.png" alt="" width={200} />
                  <p className=" img-text">Virtual Reality</p>
                  </div>
                </div>
                <div className="hero-imgs2 ">
                  <div className="my-4 px-3">
                  <img className="img1" src="Assests/builder.png" alt="" width={200} />
                  <p className=" img-text">Builder</p>
                  </div>
                </div>
                <div className="hero-imgs3 ">
                  <div className="my-4 px-3">
                  <img className="img1" src="Assests/marketplace.png" alt="" width={200} />
                  <p className=" img-text">Marketplace</p>
                  </div>
                </div>
      </div>
     </div>
     <div className="head1">
     <div className="container ">
        <div className="row ">
          <div className="col my-5 ">

            <img className="img-fluid" src="Assests/btm1.png" alt="" />
          </div>
          <div className="col my-5">
            <img className="img-fluid" src="Assests/btm2.png" alt="" />
          </div>
          <div className="col my-5">
           <img className="img-fluid" src="Assests/btm3.png" alt="" />
          </div>
          <div className="col my-5">
          <img className="img-fluid" src="Assests/btm4.png" alt="" />
          </div>
          <div className="col my-5">
              <img className="img-fluid" src="Assests/btm5.png" alt="" />
          </div>
          <div className="col my-5">
              <img className="img-fluid" src="Assests/btm6.png" alt="" />
          </div>
          <div className="col my-5">
              <img className="img-fluid" src="Assests/btm7.png" alt="" />
          </div>
          <div className="col my-5">
              <img className="img-fluid" src="Assests/btm8.png" alt="" />
          </div>
          <div className="col my-5  ">
              <img className="img-fluid" src="Assests/btm9.png" alt="" />
          </div>
          
        </div>
      </div>
     </div>
    </div>
  );
}

export default Hero;
