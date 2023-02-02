import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Link } from "react-router-dom";

import { DiJavascript1, DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { VscChevronDown } from "react-icons/vsc";
import {RiFolder5Fill} from 'react-icons/ri'
import List from "./List";

export const items = [
  {
    uuid: "1",
    icon: <DiCss3 size={20} color={"#0066b8"} />,
    heading: <Link to="/">index.css</Link>,
  },
  {
    uuid: "2",
    icon: <DiJavascript1 size={20} color="#f2eb00" />,
    heading: <Link to="/services">index.js</Link>,
  },
  {
    uuid: "3",
    icon: <SiTailwindcss size={20} color="#00acb5" />,
    heading: "tailwind.config.js",
  },
  {
    uuid: "4",
    chevrondown: <VscChevronDown size={20}  />,
    icon: <RiFolder5Fill size={20} color={'#e1ba76'} />,
    heading: "components",
    content: <List/>
  },
];

function SideNav() {
  return (
    <div>
      <Accordion className=" flex flex-col w-full">
        {items.map((item) => (
          <AccordionItem key={item.uuid} className="w-full px-4 py-1">
            <AccordionItemHeading>
              <AccordionItemButton className="flex items-center gap-2 text-sm">
                <div className="flex w-full justify-between">
                  <div className="flex gap-2">
                    {item.chevrondown} {item.icon} {item.heading}
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

export default SideNav;
