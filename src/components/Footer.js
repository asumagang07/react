import React from "react";
import { VscArrowSwap } from "react-icons/vsc";
import {
  AiOutlineReload,
  AiOutlineBranches,
  AiOutlineBell,
} from "react-icons/ai";
import { VscError } from "react-icons/vsc";
import { BiError } from "react-icons/bi";
import { BsCheckAll } from "react-icons/bs";

function Footer() {
  return (
    <div className="h-6 w-full fixed bottom-0 bg-primary-400 flex items-center justify-between text-white text-xs">
      <div className="flex items-center gap-3">
        <div className="bg-success-400 flex justify-center items-center h-6 w-12">
          <VscArrowSwap />
        </div>
        <button className="flex items-center gap-3 bg-primary-400 hover:opacity-75">
          <AiOutlineBranches />
          adrian-ui
        </button>
        <button className="flex bg-primary-400 hover:opacity-75">
          <AiOutlineReload />
        </button>
        <button className="flex items-center gap-1 bg-primary-400 hover:opacity-75">
          <VscError />
          1
          <BiError />0
        </button>
        <button>Git Graph</button>
      </div>
      {/* //////////////////////////////////// */}
      <div className="flex items-center gap-3 pr-3">
        <button className="flex bg-primary-400 hover:opacity-75">
          Go Live
        </button>
        <button className="flex items-center gap-3 bg-primary-400 hover:opacity-75">
          <BsCheckAll size={15} />
          Prettier
        </button>
        <button className="flex items-center gap-3 bg-primary-400 hover:opacity-75">
          <AiOutlineBell />
        </button>
      </div>
    </div>
  );
}

export default Footer;
