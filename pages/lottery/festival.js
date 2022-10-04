import React, { useEffect, useState } from "react";
import LotteryCard from "../../components/card/LotteryCard";
import festivalCardData from "../../testing/festivalCardData.json";
import axios from "axios";

const Festival = () => {
  const [festivalLotteryList, setFestivalLotteryList] = useState();

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
    fetchFestivalLottery();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12 mt-4 text-light text-center">
          <h4>Play Festival Lottery 2022</h4>
        </div>
      </div>

      <div className="row g-3 px-3 py-4 ">
        {festivalLotteryList?.map((item, id) => (
          <div className="col-12" key={id}>
            <LotteryCard customStyles={true} data={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Festival;
