import React from "react";
import styles from "../../styles/screen/CounterScreen.module.css";
const CounterScreen = () => {
  return (
    <div className={` mt-3  ${styles.screenMain}`}>
      <div className={` rounded-3 ${styles.screenInner}`}>
        <h2>12.5 x</h2>
      </div>
    </div>
  );
};

export default CounterScreen;
