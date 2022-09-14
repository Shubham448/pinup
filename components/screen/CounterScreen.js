import React, { useEffect, useState } from "react";
import styles from "../../styles/screen/CounterScreen.module.css";
import CountUp from "react-countup";
const CounterScreen = () => {
  const [time, setTime] = useState(0);
  const [animation, setAnimation] = useState("start");

  useEffect(() => {
    let randomTime = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
    setTime(randomTime);
  }, [animation]);

  useEffect(() => {
    document.getElementById("bike").style.animationDuration = time + "s";
  }, [time]);

  useEffect(() => {
    setTimeout(() => {
      setAnimation("start");
    }, 5000);
  }, [animation]);

  return (
    <>
      {animation === "start" ? (
        <div class={styles.hero}>
          <div class={styles.highway}></div>
          <div class={styles.city}></div>
          <div class={styles.bike}>
            <img src="/images/bike.png" alt="" id="bike" />
          </div>
          <h2 className={styles.counterValue}>
            <CountUp
              start={0}
              end={time}
              decimals={2}
              duration={time}
              onEnd={() => {
                setAnimation("end");
              }}
            />
            x
          </h2>
        </div>
      ) : (
        <div className={` mt-3  ${styles.screenMain}`} id="bike">
          <div
            className={` rounded-3 ${styles.screenInner} d-grid text-center`}
          >
            <h3 className="text-danger">Congratulations!!</h3>
            <h4 className="text-success">Your score is {time}</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default CounterScreen;
