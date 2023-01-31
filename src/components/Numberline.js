import React from "react";

function Numberline(props) {
  return (
    <div className="flex flex-col gap-2 mr-3">
      <ul className="text-sm text-secondary-50 text-right">
        {Array.from(Array(props.number), (e, i) => {
          return <li key={i}>{i+1}</li>;
        })}
      </ul>
    </div>
  );
}

export default Numberline;
