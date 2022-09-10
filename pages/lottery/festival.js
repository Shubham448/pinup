import React from "react";
import LotteryCard from "../../components/card/LotteryCard";
import festivalCardData from "../../testing/festivalCardData.json";

const Festival = () => {
  const { festival } = festivalCardData;
  return (
    <>
      <div className="row">
        <div className="col-12 mt-4 text-light text-center">
          <h4>Play Festival Lottery 2022</h4>
        </div>
      </div>

      <div className="row g-3 px-3 py-4 ">
        {festival.map((item, id) => (
          <div className="col-12" key={id}>
            <LotteryCard customStyles={true} data={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Festival;
