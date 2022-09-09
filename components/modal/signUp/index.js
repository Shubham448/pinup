import { useState } from 'react';
import styles from '../../../styles/modal/SignUp.module.css';

const SignUp = () => {
  const [selectNav, setSelectNav] = useState("phone");
  return (
    <div className="modal fade" id="signUp" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="signUpModalLabel" aria-hidden="true">
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
          <div className={`${styles.offerSection}`}>
            <h2>₹25 000 + 250 FS on your 1st deposit</h2>
          </div>
          <div className={`${styles.navAndTab}`}>
            <div className={`col-6  ${styles.navItem} ${selectNav === "phone" && styles.activeNavItem} `} onClick={() => setSelectNav("phone")}>
              <h2>By Phone</h2>
            </div>
            <div className={`col-6 ${styles.navItem} ${selectNav === "email" && styles.activeNavItem} `} onClick={() => setSelectNav("email")}>
              <h2>By Email</h2>
            </div>
          </div>
          <div className={`modal-body`}>
            <div className="row g-3 pt-2 d-flex justify-content-center">
              {
                selectNav === "email" ?
                  <>
                    <div className="col-10">
                      <input
                        type="text"
                        className={`form-control shadow-none`}
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="col-10">
                      <input
                        type="password"
                        className={`form-control shadow-none`}
                        placeholder="Password"
                      />
                    </div>
                  </>
                  :
                  <>

                    <div className="col-10">
                      <h2 className={styles.enterPhone}>Enter your phone number</h2>
                      <input
                        type="text"
                        className={`form-control shadow-none`}
                        placeholder="Enter Mobile Number"
                      />
                    </div>
                  </>
              }
              <div className="col-10 d-flex justify-content-center">
                <button className={styles.signUpButton}>Sign Up</button>
              </div>
              <div className={`col-10 d-flex justify-content-center ${styles.accountExists}`}>
                <h2>
                  Already have an account?
                  <a data-bs-target="#login" data-bs-toggle="modal">Log in</a>
                </h2>
              </div>

              <div className={`col-10 mb-3 ${styles.checkBoxSection}`}>
                <div className={`${styles.checkBox}`}>
                  <input checked type="checkbox" /> <label>I agreed with the </label>&nbsp;<a>Terms and Conditions</a>
                </div>
                <div className={`${styles.checkBox}`}>
                  <input checked type="checkbox" /> <label>Receive newsletters about promotions by email and text message</label>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp