import React from "react";
import LotteryCard from "../../components/card/LotteryCard";
import weeklyCardData from "../../testing/weeklyCardData.json";
const weekly = () => {
  const { weekly } = weeklyCardData;
  return (
    <>
      <div className="row">
        <div className="col-12 mt-4 text-light text-center">
          <h4>Play Weekly Lottery 2022</h4>
        </div>
      </div>

      <div className="row g-3 px-3 py-4 ">
        {weekly?.map((item, id) => (
          <div className="col-12" key={id}>
            <LotteryCard customStyles={true} data={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default weekly;
