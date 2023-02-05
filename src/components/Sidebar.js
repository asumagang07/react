import React from "react";
import { VscChevronDown, VscEllipsis } from "react-icons/vsc";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import SideNav from "./SideNav";
import CollapsibleTab from "../reusesableComponents/CollapsibleTab";

import { itemTabs } from "../utils/data";

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
