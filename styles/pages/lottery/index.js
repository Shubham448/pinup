import axios from "axios";
import React, { useEffect, useState } from "react";
import LotteryCard from "../../components/card/LotteryCard";
import styles from "../../styles/lottery/Lottery.module.css";
import festivalCardData from "../../testing/festivalCardData.json";
import weeklyCardData from "../../testing/weeklyCardData.json";

const Lottery = () => {
  const [weeklyLotteryList, setWeeklyLotteryList] = useState();
  const [festivalLotteryList, setFestivalLotteryList] = useState();

  const fetchWeeklyLottery = async () => {
    try {
      const res = await axios.get(
        "https://pin-u.herokuapp.com/v1/worldlottery"
      );
      if (res.status === 200) {
        setWeeklyLotteryList(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchFestivalLottery = async () => {
    try {
      const res = await axios.get(
        "https://pin-u.herokuapp.com/v1/festivallottery"
      );
      if (res.status === 200) {
        setFestivalLotteryList(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeeklyLottery();
    fetchFestivalLottery();
  }, []);

  useEffect(() => {
    console.log("weeklyLotteryList :>> ", weeklyLotteryList);
  }, [weeklyLotteryList]);

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
              {festivalLotteryList?.map((item, index) => (
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
              {weeklyLotteryList?.map((item, index) => (
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

export default Lottery;
