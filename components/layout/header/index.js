import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../../styles/layout/header/Header.module.css";
import SignIn from "../../modal/signIn";
import SignUp from "../../modal/signUp";
const Header = () => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-sm navbar-dark sticky-top ${styles.headerMain}`}
      >
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <Image
                src="/images/logo_birthday.svg"
                width={130}
                height={45}
                alt="Logo"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon btn-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navLinks}`}
            >
              <li className="nav-item">
                <Link href="/lottery">
                  <a className="nav-link" aria-current="page">
                    Lottery
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/aviator">
                  <a className="nav-link mt-1" href="#">
                    <Image
                      src="/images/aviator.svg"
                      width={64}
                      height={16}
                      alt="Logo"
                    />
                  </a>
                </Link>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Image src={"/images/user.png"} width={48} height={48} />
                </button>
                <ul class={`dropdown-menu ${styles.dropDown}`}>
                  <li>
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Change Password
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              {/* <button
                className={`btn shadow-none btn-success ${styles.signInButton}`}
                data-bs-toggle="modal"
                data-bs-target="#login"
              >
                Log In
              </button>
              <button
                className={`btn shadow-none btn-danger ${styles.signUpButton}`}
                data-bs-toggle="modal"
                data-bs-target="#signUp"
              >
                Sign Up
              </button> */}
            </div>
          </div>
        </div>
      </nav>
      <SignIn />
      <SignUp />
    </>
  );
};

export default Header;
