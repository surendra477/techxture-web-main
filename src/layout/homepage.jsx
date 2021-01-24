import React from "react";
import "../stylesheet/homepage.css";

function homepage() {
  return (
    <>
      <section className="heroSection justCenter">
          <div className="heroSectionInner">
             <div className="counter">
                 <div className="days">
                     <h4>Days</h4>
                     <div className="value">30</div>
                </div>
                <div className="hours">
                    <h4>Hours</h4>
                     <div className="value">30</div>
                    
                </div>
                <div className="minutes">
                    <h4>Minutes</h4>
                     <div className="value">30</div>
                </div>
                <div className="seconds">
                    <h4>Seconds</h4> 
                    <div className="value">30</div>
                </div>
             </div>
          </div>
      </section>
    </>
  );
}

export default homepage;
