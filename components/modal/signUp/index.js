import { useState } from "react";
import styles from "../../../styles/modal/SignUp.module.css";

const SignUp = () => {
  const [formStep, setFormStep] = useState("first");
  return (
    <div
      className="modal fade"
      id="signUp"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="signUpModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className={`modal-content ${styles.modalContent}`}>
          <div className={`modal-header ${styles.modalHeader}`}>
            <h5 className="modal-title" id="signInModalLabel">
              Sign Up
            </h5>
            <button
              type="button"
              className={`btn-close shadow-none btn-close-white ${styles.modalCloseButton}`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className={`modal-body`}>
            <div className="row g-3 pt-2 d-flex justify-content-center">
              {formStep === "first" ? (
                <>
                  <div className="col-10">
                    <input
                      type="text"
                      className={`form-control shadow-none`}
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="col-10">
                    <input
                      type="email"
                      className={`form-control shadow-none`}
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="col-10">
                    <input
                      type="text"
                      className={`form-control shadow-none`}
                      placeholder="Enter City"
                    />
                  </div>
                  <div className="col-10">
                    <input
                      type="number"
                      className={`form-control shadow-none`}
                      placeholder="Enter Pin-code"
                    />
                  </div>
                  <div className="col-10">
                    <input
                      type="text"
                      className={`form-control shadow-none`}
                      placeholder="Enter Country"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-10">
                    <input type="date" className={`form-control shadow-none`} />
                    <label
                      className="mt-1 ms-2 text-light"
                      style={{ fontSize: "15px" }}
                    >
                      Select Date of Birth
                    </label>
                  </div>
                  <div className="col-10">
                    <select className={`form-control shadow-none`}>
                      <option value="" disabled selected>
                        Select Gender
                      </option>
                      <option value="">Male</option>
                      <option value="">Female</option>
                    </select>
                  </div>
                  <div className="col-10">
                    <input
                      type="number"
                      className={`form-control shadow-none`}
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="col-10">
                    <input
                      type="password"
                      className={`form-control shadow-none`}
                      placeholder="Set Password"
                    />
                  </div>
                  <div className="col-10">
                    <input
                      type="password"
                      className={`form-control shadow-none`}
                      placeholder="Re-Enter Password"
                    />
                  </div>
                </>
              )}
              {formStep === "second" && (
                <div className={`col-10 mb-3 ${styles.checkBoxSection}`}>
                  <div className={`${styles.checkBox}`}>
                    <input checked type="checkbox" />{" "}
                    <label>I agreed with the </label>&nbsp;
                    <a>Terms and Conditions</a>
                  </div>
                  <div className={`${styles.checkBox}`}>
                    <input checked type="checkbox" />{" "}
                    <label>
                      Receive newsletters about promotions by email and text
                      message
                    </label>
                  </div>
                </div>
              )}
              <div className="col-10 text-center">
                {formStep === "first" ? (
                  <button
                    className={styles.signUpButton}
                    onClick={() => setFormStep("second")}
                  >
                    Next
                  </button>
                ) : (
                  <>
                    <button className={`${styles.signUpButton}`}>
                      Sign Up
                    </button>
                    <button
                      className={`mt-3 ${styles.backButton}`}
                      onClick={() => setFormStep("first")}
                    >
                      Go Back
                    </button>
                  </>
                )}
              </div>
              <div
                className={`col-10 d-flex justify-content-center ${
                  styles.accountExists
                } ${formStep === "first" && "mb-3"}`}
              >
                <h2>
                  Already have an account?
                  <a data-bs-target="#login" data-bs-toggle="modal">
                    Log in
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
