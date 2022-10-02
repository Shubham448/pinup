import { useState } from "react";
import styles from "../../../styles/modal/SignUp.module.css";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [formStep, setFormStep] = useState("first");
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm();

  const onSubmit = data => console.log(data);

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

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`modal-body`}>
              <div className="row g-3 pt-2 d-flex justify-content-center">

                <>
                  <div className="col-10">
                    <input
                      type="text"
                      autoComplete="off"
                      name="fullName"
                      className={`form-control shadow-none`}
                      placeholder="Enter Name"
                      {...register("fullName", { required: true })}
                    />
                  </div>
                  <div className="col-10">
                    <input
                      name="fullName"
                      type="email"
                      autoComplete="off"
                      className={`form-control shadow-none`}
                      placeholder="Enter Email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="col-10">
                    <input
                      type="text"
                      name="city"
                      autoComplete="off"
                      className={`form-control shadow-none`}
                      placeholder="Enter City"
                      {...register("city", { required: true })}
                    />
                  </div>
                  <div className="col-10">
                    <input
                      type="number"
                      name="pinCode"
                      autoComplete="off"
                      className={`form-control shadow-none`}
                      placeholder="Enter Pin-code"
                      {...register("postCode", { required: true })}
                    />
                  </div>
                </>
                <>
                  <div className="col-10">
                    <input type="date" className={`form-control shadow-none`} name="date_of_birth"  {...register("date_of_birth", { required: true })} />
                    <label
                      className="mt-1 ms-2 text-light"
                      style={{ fontSize: "15px" }}
                    >
                      Select Date of Birth
                    </label>
                  </div>
                  <div className="col-10">
                    <select className={`form-control shadow-none`} {...register("gender", { required: true })} name="gender">
                      <option value="" disabled selected>
                        Select Gender
                      </option>
                      <option value="">Male</option>
                      <option value="">Female</option>
                    </select>
                  </div>
                  <div className="col-10">
                    <input
                      name="MobileNumber"
                      type="number"
                      autoComplete="off"
                      className={`form-control shadow-none`}
                      placeholder="Enter Phone Number"
                      {...register("mobileNumber", { required: true })}
                    />
                  </div>
                  <div className="col-10">
                    <input
                      name="password"
                      autoComplete="off"
                      type="password"
                      className={`form-control shadow-none`}
                      placeholder="Set Password"
                      {...register("password", { required: true, })}
                    />
                  </div>
                </>
                <div className={`col-10 mb-3 ${styles.checkBoxSection}`}>
                  <div className={`${styles.checkBox}`}>
                    <input checked type="checkbox" />
                    <label>I agreed with the </label>&nbsp;
                    <a>Terms and Conditions</a>
                  </div>
                  <div className={`${styles.checkBox}`}>
                    <input checked type="checkbox" />
                    <label>
                      Receive newsletters about promotions by email and text
                      message
                    </label>
                  </div>
                </div>
                <div className="col-10 text-center">
                  <button type="submit" className={`${styles.signUpButton}`}>
                    Sign Up
                  </button>
                </div>
                <div
                  className={`col-10 d-flex justify-content-center ${styles.accountExists
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
          </form>
        </div>
      </div>
    </div >
  );
};

export default SignUp;
