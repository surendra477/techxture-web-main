import React, { useState } from "react";
import { db, auth } from "../config/firebaseconfig";
// import "../stylesheet/completeProfile.css";

function CompleteProfile() {
  const style = {
    form_label: {
      fontSize: "1rem",
    },
  };

  const [formData, setFormData] = useState({});

  React.useEffect(() => {
    db.ref("Teams/" + auth.currentUser.uid).on("value", (snapshot) => {
      setFormData(snapshot.val());
    });
    setFormData({
      ...formData,
      leader_email: auth.currentUser.email,
      leader_name: auth.currentUser.displayName,
    });
  }, []);

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let userId = auth.currentUser.uid;
    // console.log(userId);
    db.ref("Teams")
      .child(userId)
      .set(formData)
      .then((data) => {
        console.log("Saved Data", data);
      })
      .catch((error) => {
        console.log("Storing Error", error);
      });
    console.log(formData);
  };

  return (
    <>
      <div className="p-lg-5 p-md-5 p-3">
        <h4 className="">Team Profile</h4>
        <form
          className="row g-3 needs-validation mt-lg-5 mt-md-5 mt-4"
          id="completeProfileForm"
          onSubmit={handleSubmit}
        >
          <div className="row no-gutters w-100">
            <div className="col-lg-6 col-md-6 col-12 px-lg-5 px-md-4">
              <label
                htmlFor="college_name"
                style={style.form_label}
                className="form-label"
              >
                College Name
              </label>
              <input
                type="text"
                className="form-control"
                id="college_name"
                name="college_name"
                onChange={updateInput}
                value={formData ? formData.college_name : ""}
                required
              />
            </div>
          </div>

          <div className="row no-gutters w-100">
            {/* Team Leader */}
            <div className="col-lg-6 col-md-6 col-12 px-lg-5 px-md-4 mt-lg-5 mt-md-5 mt-4">
              <h5 className="w-100"> Team Leader </h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <label
                    htmlFor="leader-name"
                    style={style.form_label}
                    className="form-label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="leader-name"
                    name="leader-name"
                    value={auth.currentUser.displayName}
                    disabled
                  />
                </div>

                <div className="col-md-6">
                  <label
                    htmlFor="leader-contact"
                    style={style.form_label}
                    className="form-label"
                  >
                    Contact
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="member1-contact"
                    name="Leader_contact"
                    value={formData ? formData.Leader_contact : ""}
                    onChange={updateInput}
                    required
                  />
                </div>

                <div className="col-md-12 mt-2">
                  <label
                    htmlFor="leader-email"
                    style={style.form_label}
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="leader-email"
                    name="leader-email"
                    disabled
                    value={auth.currentUser.email}
                  />
                </div>
              </div>
            </div>

            {/* Team Member 1 */}
            <div className="col-lg-6 col-md-6 col-12 px-lg-5 px-md-4 mt-lg-5 mt-md-5 mt-4">
              <h5 className="w-100"> Member 1 (If Any) </h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <label
                    htmlFor="member1-name"
                    style={style.form_label}
                    className="form-label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="member1-name"
                    name="member1_name"
                    value={formData ? formData.member1_name : ""}
                    onChange={updateInput}
                  />
                </div>

                <div className="col-md-6">
                  <label
                    htmlFor="member1-contact"
                    style={style.form_label}
                    className="form-label"
                  >
                    Contact
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="member1-contact"
                    name="member1_contact"
                    value={formData ? formData.member1_contact : ""}
                    onChange={updateInput}
                  />
                </div>

                <div className="col-md-12 mt-2">
                  <label
                    htmlFor="member1-email"
                    style={style.form_label}
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="member1-email"
                    name="member1_email"
                    value={formData ? formData.member1_email : ""}
                    onChange={updateInput}
                  />
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="col-lg-6 col-md-6 col-12 px-lg-5 px-md-4 mt-lg-5 mt-md-5 mt-4">
              <h5 className="w-100"> Member 2 (If Any) </h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <label
                    htmlFor="member2-name"
                    style={style.form_label}
                    className="form-label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="member2-name"
                    name="member2_name"
                    value={formData ? formData.member2_name : ""}
                    onChange={updateInput}
                  />
                </div>

                <div className="col-md-6">
                  <label
                    htmlFor="member2-contact"
                    style={style.form_label}
                    className="form-label"
                  >
                    Contact
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="member2-contact"
                    name="member2_contact"
                    value={formData ? formData.member2_contact : ""}
                    onChange={updateInput}
                  />
                </div>

                <div className="col-md-12 mt-2">
                  <label
                    htmlFor="member2-email"
                    style={style.form_label}
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="member2-email"
                    name="member2_email"
                    value={formData ? formData.member2_email : ""}
                    onChange={updateInput}
                  />
                </div>
              </div>
            </div>

            {/* Team Member 3*/}
            <div className="col-lg-6 col-md-6 col-12 px-lg-5 px-md-4 mt-lg-5 mt-md-5 mt-4">
              <h5 className="w-100"> Member 3 (If Any) </h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <label
                    htmlFor="member3
                -name"
                    style={style.form_label}
                    className="form-label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="member3
                  -name"
                    name="member3
                  _name"
                    value={formData ? formData.member3_name : ""}
                    onChange={updateInput}
                  />
                </div>

                <div className="col-md-6">
                  <label
                    htmlFor="member3
                -contact"
                    style={style.form_label}
                    className="form-label"
                  >
                    Contact
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="member3
                  -contact"
                    name="member3
                  _contact"
                    value={formData ? formData.member3_contact : ""}
                    onChange={updateInput}
                  />
                </div>

                <div className="col-md-12 mt-2">
                  <label
                    htmlFor="member3
                -email"
                    style={style.form_label}
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="member3
                  -email"
                    name="member3
                  _email"
                    value={formData ? formData.member3_email : ""}
                    onChange={updateInput}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" col-12 mt-lg-5 px-lg-5 px-md-4 mt-4 text-right">
            <button className="btn btn-primary" type="submit">
              Update Info
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CompleteProfile;
