import Image from "next/image";
import CounterScreen from "../components/screen/CounterScreen";
import SetBet from "../components/screen/SetBet";
import AviatorTable from "../components/table/AviatorTable";
import styles from "../styles/AviatorNavbar.module.css";
const aviator = () => {
  return (
    <div className="container-fluid p-0 vh-100">
      <div
        className={`${styles.aviatorNav} d-flex align-items-center justify-content-between mx-1`}
      >
        <div className="">
          <Image
            src="/images/aviator.svg"
            alt="aviator"
            width={100}
            height={27}
          />
        </div>

        <div className="d-flex">
          <button className={`${styles.coinIcon}`}></button>
          <div
            className={`${styles.moneySection} d-flex align-items-center justify-content-center`}
          >
            <h2 className="py-1">3000.00$</h2>
          </div>
          <div className="dropdown">
            <button
              className={`dropdown ${styles.dropDownToggle}`}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className={`dropdown-menu ${styles.dropdownMenu}`}>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Bet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CounterScreen />
      <SetBet />
      <AviatorTable />
    </div>
  );
};

export default aviator;
