import React from "react";
import styles from "../../../styles/modal/ResetPassword.module.css";
const ResetPassword = () => {
  return (
    <div
      className="modal fade"
      id="reset-password"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog modal-dialog-centered">
        <div className={`modal-content ${styles.modalContent}`}>
          <div className={`modal-header ${styles.modalHeader}`}>
            <h5 className="modal-title" id="staticBackdropLabel">
              Recover Password
            </h5>
            <button
              type="button"
              className={`btn-close shadow-none btn-close-white ${styles.modalCloseButton}`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className={`modal-body pt-4`}>
            <div className="row g-2 pt-2 d-flex justify-content-center">
              <div className="col-10">
                <p className={styles.inputLabel}>
                  Enter your email or phone number used to sign up
                </p>
                <input
                  type="text"
                  className={`form-control shadow-none`}
                  placeholder="Your Phone Number"
                />
                <p className={`mt-3 ${styles.inputLabel}`}>
                  An text message with a verification code will be sent to this
                  number.
                </p>
              </div>
              <div className="col-10">
                <input
                  type="email"
                  className={`form-control shadow-none`}
                  placeholder="Enter Your Email"
                />

                <p className={`mt-3 ${styles.inputLabel}`}>
                  We will send password recovery instructions to this email
                  address. Please note that our message may have been sent to
                  your spam folder. In this case, we recommend clicking NOT SPAM
                  to ensure that you receive future messages.
                </p>
              </div>

              <div className="col-10 d-flex justify-content-center">
                <button className={`mt-2 mb-4 ${styles.sendButton}`}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
