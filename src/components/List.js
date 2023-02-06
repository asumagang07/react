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

  return (
    <div className="flex flex-col w-full">
      {listitems?.map((item) => {
        return (
          <div
            key={item.id}
            className="flex gap-2 py-1 px-4 hover:bg-default-200 items-center text-sm"
            onClick={() => console.log('selected', item.title)}
          >
            {item.icon} {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default List;
