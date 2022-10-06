import { useEffect, useState } from "react";
import styles from "../../../styles/modal/SignUp.module.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Spinner } from "react-bootstrap";
import axios from "axios";

const SignUp = () => {
  const [formStep, setFormStep] = useState("first");
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setValue,
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });

  const postData = async (formData) => {
    console.log(formData);
    reset();
    try {
      setLoading(true);
      const apiUrl = `https://pin-u.herokuapp.com/v1/users`;

      const response = await axios({
        method: "post",

        url: apiUrl,
        params: formData,
        data: formData,
      });
      if (response.status === 201) {
        setSubmitMessage("success");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setSubmitMessage("error");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSubmitMessage("");
    }, 7000);
  }, [submitMessage]);

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

          <form onSubmit={handleSubmit(postData)}>
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
                      {...register("fullname", {
                        required: "Please enter your full name.",

                        minLength: {
                          value: 1,
                          message:
                            "Full name cannot be less than 2 characters.",
                        },
                        maxLength: {
                          value: 100,
                          message:
                            "Full name cannot be more than 100 characters.",
                        },
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="fullname"
                      render={({ messages }) => {
                        return messages
                          ? Object.entries(messages).map(([type, message]) => (
                              <p key={type} className="text-danger mb-0 mt-2">
                                {message}
                              </p>
                            ))
                          : null;
                      }}
                    />
                  </div>
                  <div className="col-10">
                    <input
                      name="email"
                      type="email"
                      autoComplete="off"
                      className={`form-control shadow-none`}
                      placeholder="Enter Email"
                      {...register("email", {
                        required: "Please enter your email address.",
                        pattern: {
                          value:
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,50})+$/,
                          message: "Please enter valid email address.",
                        },
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="email"
                      render={({ messages }) => {
                        return messages
                          ? Object.entries(messages).map(([type, message]) => (
                              <p key={type} className="text-danger mb-0 mt-2">
                                {message}
                              </p>
                            ))
                          : null;
                      }}
                    />
                  </div>
                  <div className="col-10">
                    <input
                      type="text"
                      name="city"
                      autoComplete="off"
                      className={`form-control shadow-none`}
                      placeholder="Enter City"
                      {...register("city", {
                        required: "Please enter your city.",
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="city"
                      render={({ messages }) => {
                        return messages
                          ? Object.entries(messages).map(([type, message]) => (
                              <p key={type} className="text-danger mb-0 mt-2">
                                {message}
                              </p>
                            ))
                          : null;
                      }}
                    />
                  </div>
                  <div className="col-10">
                    <input
                      type="number"
                      name="pinCode"
                      autoComplete="off"
                      className={`form-control shadow-none`}
                      placeholder="Enter Pin-code"
                      {...register("pinCode", {
                        required: "Please enter your Pincode.",
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="pinCode"
                      render={({ messages }) => {
                        return messages
                          ? Object.entries(messages).map(([type, message]) => (
                              <p key={type} className="text-danger mb-0 mt-2">
                                {message}
                              </p>
                            ))
                          : null;
                      }}
                    />
                  </div>
                </>
                <>
                  <div className="col-10 gy-0">
                    <label
                      className="mt-2 mb-1 ms-2 text-light"
                      style={{ fontSize: "15px" }}
                    >
                      Select Date of Birth
                    </label>
                    <input
                      type="date"
                      className={`form-control shadow-none`}
                      name="date_of_birth"
                      {...register("date_of_birth", {
                        required: "Please select your birth date",
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="date_of_birth"
                      render={({ messages }) => {
                        return messages
                          ? Object.entries(messages).map(([type, message]) => (
                              <p key={type} className="text-danger mb-0 mt-2">
                                {message}
                              </p>
                            ))
                          : null;
                      }}
                    />
                  </div>
                  <div className="col-10">
                    <select
                      className={`form-control shadow-none`}
                      {...register("gender", {
                        required: "Please select gender",
                      })}
                      name="gender"
                    >
                      <option value="" disabled selected>
                        Select Gender
                      </option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                    </select>
                    <ErrorMessage
                      errors={errors}
                      name="gender"
                      render={({ messages }) => {
                        return messages
                          ? Object.entries(messages).map(([type, message]) => (
                              <p key={type} className="text-danger mb-0 mt-2">
                                {message}
                              </p>
                            ))
                          : null;
                      }}
                    />
                  </div>
                  <div className="col-10">
                    <input
                      name="MobileNumber"
                      type="number"
                      autoComplete="off"
                      className={`form-control shadow-none`}
                      placeholder="Enter Phone Number"
                      {...register("mobileNumber", {
                        required: "Please enter your mobile number",
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="mobileNumber"
                      render={({ messages }) => {
                        return messages
                          ? Object.entries(messages).map(([type, message]) => (
                              <p key={type} className="text-danger mb-0 mt-2">
                                {message}
                              </p>
                            ))
                          : null;
                      }}
                    />
                  </div>
                  <div className="col-10">
                    <input
                      name="password"
                      autoComplete="off"
                      type="password"
                      className={`form-control shadow-none`}
                      placeholder="Set Password"
                      {...register("password", {
                        required: "Please enter the password you want to set.",
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="password"
                      render={({ messages }) => {
                        return messages
                          ? Object.entries(messages).map(([type, message]) => (
                              <p key={type} className="text-danger mb-0 mt-2">
                                {message}
                              </p>
                            ))
                          : null;
                      }}
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
                  {submitMessage === "success" ? (
                    <h4 className="text-center text-dark">
                      SignUp Successful. You can Login now.
                    </h4>
                  ) : (
                    <button type="submit" className={`${styles.signUpButton}`}>
                      {loading ? (
                        <div style={{ padding: "0px 19px" }}>
                          <Spinner
                            animation="border"
                            size="sm"
                            role="status"
                          ></Spinner>
                        </div>
                      ) : (
                        "Submit"
                      )}
                    </button>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
