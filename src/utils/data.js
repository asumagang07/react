import { DiJavascript1, DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import {
  VscNewFile,
  VscNewFolder,
  VscRefresh,
  VscCollapseAll,
} from "react-icons/vsc";
import List from "../components/List";

export const itemTabs = [
  {
    id: "1",
    trigger: "PORTFOLIO",
    content: <List />,
    is_open: true,
    rightActions: [
      {
        id: "1",
        actionbtn: <VscNewFile />,
      },
      {
        id: "2",
        actionbtn: <VscNewFolder />,
      },
      {
        id: "3",
        actionbtn: <VscRefresh />,
      },
      {
        id: "4",
        actionbtn: <VscCollapseAll />,
      },
    ],
  },
  {
    id: "2",
    trigger: "OUTLINE",
    icon: <DiJavascript1 size={20} color="#f2eb00" />,
    content: "content 2",
    is_open: false,
  },
  {
    id: "3",
    trigger: "TIMELINE",
    icon: <SiTailwindcss size={20} color="#00acb5" />,
    content: "tailwind.config.js",
    is_open: false,
  },
];
