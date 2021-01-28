import React from "react";
import "./stylesheet/userDashboard.css";
function Main() {
  return (
    <div>
      you r signed in successfully
      <div className="container">
        <h2 className="dashboard-title">My Dashboard</h2>

        <div className="teamMembersDiv">
          <h4 className="mt-5 w-100">Team Members</h4>
          <div className="teamMembers row no-gutters">
              <div className="details col-lg-6 col-md-6 col-12 d-flex flex-column">
                <span className="memberName text-center">Akash Maurya</span> 
                <span className="memberDetails text-center">1234567890</span>
                <span className="memberDetails text-center">akash@gmail.com</span> 
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
