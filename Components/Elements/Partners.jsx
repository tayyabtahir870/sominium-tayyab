import React from "react";
import Available from "./Available";

function Partners() {
  return (
    <div className="partners">
     
      <div className="container">
        <div className="row text-center ">
          <h3 className="mt-5 somi-color">SOMNIUM SPACE</h3>
          <h3 className="partner-clr">PARTNERS</h3>
        </div>
        <div className="row ">
          <div className="col-md-2 mt-5">
            <img src="Assests/admix.png" alt="" width={200} />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-9 mt-5">
            <h1 className="heading-color">Somnium Space & Admix</h1>
            <p className="para-color">
              We work together to bring advertising revenues for our players.
              It's the best and fastest way to monetize your property, measure,
              analyze how your audience interacts in VR.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2  mt-5">
            <img src="Assests/vrba.png" alt="" width={200} />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-9  mt-5">
            <h1 className="heading-color">High Fidelity & JanusVR</h1>
            <p className="para-color">
              We believe that the future of the VR space is in connectivity and
              interoperability between open social worlds. That’s why we
              partnered with HighFidelity and JanusVR on two groundbreaking
              projects:
            </p>
            <span className="heading-color ">OASIS</span>
            <span className="para-color">- Teleporting between VR worlds</span>
            <br />
            <span className="heading-color">VRBA</span>{" "}
            <span className="para-color">
              - Virtual Reality Blockchain Alliance.
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2  mt-5">
            <img src="Assests/sony.png" alt="" width={200} />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-9  mt-5">
            <h1 className="heading-color">Sony</h1>
            <p className="para-color">
              In 2019 we partnered with Sony and their amazing 3D model creation
              technology that allows our users to create full embodiment avatars
              of themselves in minutes alongside any 3D models for Somnium
              Store. Sony’s VR store in Somnium Space was among the world’s
              first.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2  mt-5">
            <img src="Assests/polygon.png" alt="" width={200} />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-9  mt-5">
            <h1 className="heading-color">Polygon & OpenSea</h1>
            <p className="para-color">
              Our blockchain partners Polygon and OpenSea offer the best
              technology there is in their specific fields. OpenSea’s online
              platform is the largest marketplace for online collectibles, while
              Polygon’s unique second layer brings speed and close to zero
              transaction costs to our users for our in-game transactions.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2  mt-5">
            <img src="Assests/bga.png" alt="" width={200} />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-9  mt-5">
            <h1 className="heading-color">Blockchain Gaming Alliance</h1>
            <p className="para-color">
              We became a member of Blockchain Game Alliance to contribute
              towards building a true and decentralized Metaverse.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2  mt-5">
            <img src="Assests/gemini.png" alt="" width={200} />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-9  mt-5">
            <h1 className="heading-color">Somnium Space & Gemini</h1>
            <p className="para-color">
              We are excited to be partners with one of the leading exchanges in
              the world. Gemini has invested into Somnium Space and together we
              believe and work towards an open and decentralized future of The
              Metaverse.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2  mt-5">
            <img src="Assests/holaplex.png" alt="" width={200} />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-9  mt-5">
            <h1 className="heading-color">Somnium Space & Holaplex</h1>
            <p className="para-color">
              We have partnered with Holaplex to release our first official NFT
              store on Solana blockchain. We are delighted to work with this
              energetic and innovative team.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2  mt-5">
            <img src="Assests/ftx.png" alt="" width={200} />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-9  mt-5 mb-5">
            <h1 className="heading-color">Somnium Space & FTX</h1>
            <p className="para-color">
              We have partnered with one of the leading and largest exchanges in
              the world to bring Somnium NFTs into their official NFT
              marketplace. We are excited about this partnership and together we
              are looking forward to a long-term relationship.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <Available/>
      </div>
    </div>
  );
}

export default Partners;
