import React, { useState } from "react";
import { db } from "../config/firebaseconfig";
import "../stylesheet/adminDashboard.css";

function AdminDashboard() {
  const [stats, setStats] = useState([]);
  const [teams, setTeams] = useState([]);
  React.useEffect(() => {
    db.ref("Teams").on("value", (snapshot) => {
      // let data = snapshot.numChildren();
      setTeams(snapshot.val());
      setStats({ teamsCount: snapshot.numChildren() });
    });
  }, []);

  return (
    <>
      <div className="px-lg-5 px-md-5 px-4 mt-5">
        <h4>Techxter Stats</h4>
        <div className="techxter-Stats">
          <div className="row no-gutters mt-4">
            <div className="card">
              <div className="card-body">
                <p className="text-muted mb-2">Total Participants</p>
                <h2>{stats.teamsCount}</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <p className="text-muted mb-2">Total Papers Submitted</p>
                <h2>40</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <p className="text-muted mb-2">Wrong Submission's</p>
                <h2>40</h2>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-5">Teams</h4>
        <div className="row no-gutters">
          <div className="col-12 table-responsive">
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th>Leader Name</th>
                  <th>Paper's Submitted</th>
                  <th>Members</th>
                  <th>Confirm Submission</th>
                  <th>Mail Leader</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Akash</td>
                  <td>1</td>
                  <td>2</td>
                  <td>Yes/No</td>
                  <td>Send Mail</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
