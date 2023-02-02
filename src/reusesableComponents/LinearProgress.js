import React from "react";
import { Line } from "rc-progress";

function LinearProgress(props) {
  const {
    strokeColor = "#397cff",
    trailColor = "#3c3c3c",
    trailWidth = 1.5,
    strokeWidth = 1.5,
    percent = 20,
  } = props;
  
  return (
    <div>
      <Line
        percent={percent}
        strokeWidth={strokeWidth}
        trailWidth={trailWidth}
        trailColor={trailColor}
        strokeColor={strokeColor}
      />
    </div>
  );
}

export default LinearProgress;
