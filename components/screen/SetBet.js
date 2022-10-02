import React from "react";
import styles from "../../styles/screen/SetBet.module.css";
const SetBet = () => {
  return (
    <div className={` mt-3 rounded-3 ${styles.screenMain}`}>
      <div
        className={` d-md-flex d-grid justify-content-center align-items-center`}
      >
        <div className={styles.betContent}>
          <input type="text" className={`${styles.selectBetPill}`} />
          {/* <div className="d-flex gap-2">
              <button className={styles.setBetBtn}>-</button>
              <button className={styles.setBetBtn}>+</button>
            </div> */}
          {/* <div className="d-flex gap-2 mt-2">
            <button className={styles.setMoneyBtn}>1 $</button>
            <button className={styles.setMoneyBtn}>2 $</button>
          </div>
          <div className="d-flex gap-2 mt-2">
            <button className={styles.setMoneyBtn}>5 $</button>
            <button className={styles.setMoneyBtn}>10 $</button>
          </div> */}
        </div>
        <button className={`ms-md-4 ms-0 mt-4 mt-md-0 ${styles.betButton}`}>
          Bet
        </button>
      </div>
    </div>
  );
};

export default SetBet;
