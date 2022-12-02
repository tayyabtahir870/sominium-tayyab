import React from "react";

function Calender() {
  return (
    <div className="calender">
      <div className="container con-tainer ">
        <div className="row">
          <div className="text-center mt-5">
            <h3 className="cal-text">STAY SHARP WITH UPCOMING EVENTS</h3>
            <h3 className="cal-text1">SOMNIUM EVENTS CALENDAR</h3>
            <h3 className="cal-text">
              Have Fun and Share with your Friends our Weekly and Special Events
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <div>
                <h4 className="feature ">Featured Events</h4>
            </div>
            <div className="text-center mt-5">
                <img className="img-fluid meetup " src="Assests/meetup.png" alt="" width={330}  />
            </div>
            <div className="text-center my-4">
                <img className="img-fluid" src="Assests/ironman.png" alt="" width={400} />
            </div>
          </div>
          <div className="col-md-5 my-5">
            <div className="my-5 ">
                <h4 className="event">Events calendar</h4>
            </div>
            <iframe
            className="calender-table"
              src="https://calendar.google.com/calendar/embed?src=somnium.space.events%40gmail.com"
              width="600"
              height="500"
              scrolling="no"
              style={{ 
                border: "0px" ,
                 borderRadius: "5px",}}
            ></iframe>
            <div className="d-flex">
                <div>
                    <button className="add-button">Add Event</button>
                </div>
                <div>
               <button></button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calender;
