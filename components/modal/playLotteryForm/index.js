import React from "react";

import styles from "../../../styles/modal/PlayLotteryForm.module.css";
const PlayLotteryForm = ({ lotteryType }) => {
  return (
    <div
      className="modal fade"
      id="playLottery"
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
              Play Lottery 2022
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
                <input
                  type="text"
                  className={`form-control shadow-none rounded-1`}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="col-10">
                <input
                  type="email"
                  className={`form-control shadow-none rounded-1`}
                  placeholder="Enter Your Email ID"
                />
              </div>
              <div className="col-10">
                <input
                  type="tel"
                  className={`form-control shadow-none rounded-1`}
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <div className="col-10">
                <input
                  type="text"
                  className={`form-control shadow-none rounded-1`}
                  placeholder="Enter Your Address"
                />
              </div>
              <div className="col-10">
                <input
                  type="number"
                  className={`form-control shadow-none rounded-1`}
                  placeholder="Enter Your Pin Code"
                />
              </div>
              <div className="col-10">
                <input
                  type="text"
                  className={`form-control shadow-none rounded-1`}
                  placeholder="Enter Your City"
                />
              </div>
              <div className="col-10">
                <input
                  type="text"
                  className={`form-control shadow-none rounded-1`}
                  placeholder="Enter  Amount"
                />
              </div>

              <div className="col-10 my-4 d-flex justify-content-center">
                <button className={`mt-2 ${styles.proceedButton}`}>
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayLotteryForm;
