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

const items = [
  {
    uuid: '1',
    icon: <VscChevronDown size={20} />,
    heading: "REACT",
    content: <SideNav />,
  },
];

function Sidebar() {
  return (
    <div className="relative w-72 h-full flex flex-col bg-secondary-200 justify-start items-start text-primary-text">
      <div className="flex w-full justify-between items-center py-2 px-4 text-sm">
        <p className="text-xs">EXPLORER</p>
        <VscEllipsis />
      </div>
      {/* ///////////////////////////////////////// */}
      <Accordion preExpanded={['1']} className=" flex w-full">
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
      </Accordion>
    </div>
  );
}

export default Sidebar;
