import React from "react";
import {
  VscNewFile,
  VscChevronDown,
  VscNewFolder,
  VscRefresh,
  VscCollapseAll,
  VscEllipsis,
} from "react-icons/vsc";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import SideNav from "./SideNav";
import CollapsibleTab from "../reusesableComponents/CollapsibleTab";

import { DiJavascript1, DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import {RiFolder5Fill} from 'react-icons/ri'

const items = [
  {
    uuid: "react",
    icon: <VscChevronDown size={20} />,
    heading: "REACT",
    content: <SideNav />,
  },
];

const styles = 'flex w-full hover:bg-default-200 px-4'

export const itemTabs = [
  {
    id: "1",
    trigger: <button className={styles}>Button 1</button>,
    icon: <DiCss3 size={20} color={"#0066b8"} />,
    content: 'content 1',
    is_open: true
  },
  {
    id: "2",
    trigger: <button className={styles}> Button 2</button>,
    icon: <DiJavascript1 size={20} color="#f2eb00" />,
    content: 'content 2',
    is_open: false
  },
  {
    id: "3",
    trigger: <button className={styles}>Button 3</button>,
    icon: <SiTailwindcss size={20} color="#00acb5" />,
    content: "tailwind.config.js",
    is_open : false
  },
  {
    id: "4",
    trigger: <button className={styles}>Button 4</button>,
    chevrondown: <VscChevronDown size={20}  />,
    icon: <RiFolder5Fill size={20} color={'#e1ba76'} />,
    content: "components",
    is_open: false
  },
];

function Sidebar() {
  return (
    <div className="relative w-80 h-full flex flex-col bg-default-400 justify-start items-start text-grayText">
      <div className="flex w-full justify-between items-center py-2 px-4 text-sm">
        <p className="text-xs">EXPLORER</p>
        <VscEllipsis />
      </div>
      {/* ///////////////////////////////////////// */}
      <CollapsibleTab items={itemTabs} />

      {/* <Accordion preExpanded={["react"]} className=" flex w-full">
        {items.map((item) => (
          <AccordionItem key={item.uuid} className="w-full px-4 py-1">
            <AccordionItemHeading>
              <AccordionItemButton className="flex items-center gap-2 font-semibold">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    {item.icon} {item.heading}
                  </div>
                  <div className="flex items-center gap-2">
                    <VscNewFile />
                    <VscNewFolder />
                    <VscRefresh />
                    <VscCollapseAll />
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{item.content}</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion> */}
    </div>
  );
}

export default Sidebar;
