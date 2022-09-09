import Link from "next/link";
import styles from "../../../styles/modal/SignIn.module.css";
const SignIn = () => {
  return (
    <div className="modal fade" id="login" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog modal-dialog-centered">
        <div className={`modal-content ${styles.modalContent}`}>
          <div className={`modal-header ${styles.modalHeader}`}>
            <h5 className="modal-title" id="staticBackdropLabel">
              Sign In
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
                  className={`form-control shadow-none`}
                  placeholder="Your telephone/email"
                />
              </div>
              <div className="col-10">
                <input
                  type="password"
                  className={`form-control shadow-none`}
                  placeholder="Password"
                />
              </div>
              <div className="col-10 d-flex justify-content-center">
                <Link href="/">
                  <a className={`mt-2 ${styles.forgetPassword}`}>Forgot the password</a>
                </Link>
              </div>

              <div className="col-10 d-flex justify-content-center">
                <button className={`mt-2 ${styles.loginButton}`}>Log in</button>
              </div>
              <div className="pb-3 col-10 text-center justify-content-center">
                <h2 className={`mt-2 ${styles.newAccount}`}>Don’t have an account yet?</h2>
                <a data-bs-target="#signUp" data-bs-toggle="modal" className={` ${styles.forgetPassword} m-0`}>Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn