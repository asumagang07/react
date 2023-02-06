import { DiJavascript1, DiCss3 } from "react-icons/di";
import { VscChromeClose,VscEllipsis,VscSplitHorizontal,VscHistory } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";

export const tabs = [
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
    id: "profile",
    title: "Profile",
  },
  {
    id: "services",
    title: "Services.js",
    icon: <DiJavascript1 size={20} color="#f2eb00" />,
  },
];
