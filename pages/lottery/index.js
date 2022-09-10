import React from "react";
import LotteryCard from "../../components/card/LotteryCard";
import styles from "../../styles/lottery/Lottery.module.css";
import festivalCardData from "../../testing/festivalCardData.json";
import weeklyCardData from "../../testing/weeklyCardData.json";

const lottery = () => {
  const { weekly } = weeklyCardData;
  const { festival } = festivalCardData;

  return (
    <div className={`container-fluid`}>
      <div className={`row mb-5 mx-sm-4 mx-md-5`}>
        <div className={`col-12`}>
          <h4 className={`${styles.lotteryMainTitle} text-center`}>
            World Lottery
          </h4>

          <div className={`col-12 mt-4 ${styles.lotteryBox}`}>
            <h4 className={`text-center ${styles.lotteryBoxTitle}`}>
              Festival Lottery 2022
            </h4>
            <div
              className={`row px-4 g-3 mt-3 flex-wrap justify-content-around`}
            >
              {festival?.map((item, index) => (
                <div className="col-md-6 col-12" key={index}>
                  <LotteryCard data={item} lottery="festival" />
                </div>
              ))}
            </div>
          </div>
          <div className={`col-12 mt-4 ${styles.lotteryBoxWeekly}`}>
            <h4 className={`text-center ${styles.lotteryBoxTitle}`}>
              Weekly Lottery 2022
            </h4>
            <div
              className={`row px-4 g-3 mt-3 flex-wrap justify-content-around`}
            >
              {weekly?.map((item, index) => (
                <div className="col-md-6 col-12" key={index}>
                  <LotteryCard data={item} lottery="weekly" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default lottery;
