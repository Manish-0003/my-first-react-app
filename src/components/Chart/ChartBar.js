import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Match.round((props.value / props.maxvalue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight, backgroundColor: "red" }}
        ></div>
        <div className="chart-bar__label"></div>
      </div>
    </div>
  );
};

export default ChartBar;
