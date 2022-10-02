import React, { useEffect, useState } from "react";
import styles from "../../styles/screen/CounterScreen.module.css";
import CountUp from "react-countup";
const CounterScreen = () => {
  const [time] = useState(8.22);
  const [animation, setAnimation] = useState("start");

  useEffect(() => {
    document.getElementById("bike").style.animationDuration = time + 8 + "s";
  }, [animation]);

  useEffect(() => {
    setTimeout(() => {
      setAnimation("start");
    }, 5000);
  }, [animation]);

  const showScore = () => {
    setTimeout(() => {
      setAnimation("end");
    }, 2000);
  };

  useEffect(() => {
    console.log(time);
  }, [time]);
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
              onEnd={() => showScore()}
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
