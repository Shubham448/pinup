import React, { useEffect, useState } from "react";
import styles from "../../styles/screen/CounterScreen.module.css";
import CountUp from "react-countup";
const CounterScreen = () => {
  const [time, setTime] = useState(0);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    let randomTime = Math.random() * 15;
    setTime(randomTime);
  }, [play]);

  return (
    <div className={` mt-3  ${styles.screenMain}`}>
      <div className={` rounded-3 ${styles.screenInner}`}>
        <h2>
          <CountUp
            start={0}
            end={time}
            decimals={2}
            duration={time}
            onEnd={() => setPlay(play ? false : true)}
          />
          x
        </h2>
      </div>
    </div>
  );
};

export default CounterScreen;
