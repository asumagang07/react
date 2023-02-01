import React from "react";
import Numberline from "../components/Numberline";
import Tooltip from "../reusesableComponents/Tooltip";

function Services() {
  return (
    <div className="flex w-full h-[1000px] text-primary-text p-4 bg-secondary-400">
      <Numberline number={20} />
      <div>
        <Tooltip
        trigger ={<p>HEYYYYYY</p>}
        />
      </div>
    </div>
  );
}

export default Services;
