import React, { useState } from "react";
import { db, storage } from "../config/firebaseconfig";
import "../stylesheet/adminDashboard.css";
import { showToast } from "./toast";

function AdminDashboard() {
  const [stats, setStats] = useState([]);
  const [teams, setTeams] = useState([]);
  React.useEffect(() => {
    db.ref("Teams").on("value", (snapshot) => {
      let storageCount = storage
        .ref("/")
        .listAll()
        .then((response) => {
          setStats({
            teamsCount: snapshot.numChildren(),
            papers: response._delegate.items.length,
          });
        });
      // let data = snapshot.numChildren();
      setTeams(snapshot.val());
    });
  }, []);

  function confirmSubmission(id) {
    db.ref("Teams/" + id)
      .update({
        confirmSubmission: true,
      })
      .then((response) => {
        showToast("Team Submission Confirmed");
      });
  }

  function unConfirmSubmission(id) {
    db.ref("Teams/" + id)
      .update({
        confirmSubmission: false,
      })
      .then((response) => {
        showToast("Team Submission Pending");
      });
  }

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
                <h2>{stats.papers}</h2>
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
            <table
              style={{ fontSize: "1.1rem" }}
              className="table table-striped text-center"
            >
              <thead>
                <tr>
                  <th>Leader Name</th>
                  <th>Paper's Submitted</th>
                  <th>Confirm Submission</th>
                  <th>Leader E-Mail</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(teams).map((team) => {
                  return (
                    <tr>
                      <td>{team[1].leader_name}</td>
                      <td
                        className="text-truncate"
                        style={{ maxWidth: "2rem" }}
                      >
                        <a href={team[1].paperURL}>Paper 1</a>
                      </td>
                      <td>
                        {team[1].confirmSubmission ? (
                          <button
                            className="btn btn-success px-4"
                            onClick={() => unConfirmSubmission(team[0])}
                          >
                            Confirmed
                          </button>
                        ) : (
                          <button
                            className="btn btn-outline-success px-4"
                            onClick={() => confirmSubmission(team[0])}
                          >
                            Yes
                          </button>
                        )}
                      </td>
                      <td>
                        {/* href={"mailto:" + team.leader_email} */}
                        <a href="mailto:akashmaurya1430@gmail.com">
                          {team[1].leader_email}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
