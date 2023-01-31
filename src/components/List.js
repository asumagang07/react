import React from "react";
import { DiJavascript1, DiCss3, DiVisualstudio } from "react-icons/di";

const listitems = [
  {
    id: "getStarted",
    title: "Get Started",
    icon: <DiVisualstudio size={20} color={"#007acc"} />,
  },
  {
    id: "about",
    title: "About.css",
    icon: <DiCss3 size={20} color={"#0066b8"} />,
  },
  {
    id: "employment",
    title: "EmploymentHistory.js",
    icon: <DiJavascript1 size={20} color="#f2eb00" />,
  },
  {
    id: "services",
    title: "Services.js",
    icon: <DiJavascript1 size={20} color="#f2eb00" />,
  },
];

function List() {
  console.log(listitems, "@@@@@@@@@@@@");

  return (
    <div className="flex flex-col gap-2 pt-2 pl-4">
      {listitems?.map((item) => {
        return (
          <div key={item.id} className="flex gap-2 items-center text-sm">
            {item.icon} {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default List;
