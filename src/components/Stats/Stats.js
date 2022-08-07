import React from "react";
import StatsCard from "./StatsCard";


const Stats = () => {
  return (
    <div className="d-none d-lg-block">
    <div className="row mx-2 rounded shadow p-2">
    <h5>Your Stats</h5>
      <div className="col-lg-4">
        <StatsCard/>
      </div>
      <div className="col-lg-4">
        <StatsCard/>
      </div>
      <div className="col-lg-4">
        <StatsCard/>
      </div>
    </div>
    </div>
  );
};

export default Stats;
