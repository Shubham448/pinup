import React, { useEffect, useState } from "react";
import LotteryCard from "../../components/card/LotteryCard";
import weeklyCardData from "../../testing/weeklyCardData.json";
import axios from "axios";
const weekly = () => {
  const { weekly } = weeklyCardData;

  const [weeklyLotteryList, setWeeklyLotteryList] = useState();

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

  useEffect(() => {
    fetchWeeklyLottery();
  }, []);

  useEffect(() => {
    console.log("weeklyLotteryList :>> ", weeklyLotteryList);
  }, [weeklyLotteryList]);

  return (
    <>
      <div className="row">
        <div className="col-12 mt-4 text-light text-center">
          <h4>Play Weekly Lottery 2022</h4>
        </div>
      </div>

      <div className="row g-3 px-3 py-4 ">
        {weeklyLotteryList?.map((item, id) => (
          <div className="col-12" key={id}>
            <LotteryCard customStyles={true} data={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default weekly;
