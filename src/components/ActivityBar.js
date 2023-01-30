import React from "react";
import { ImCopy } from "react-icons/im";
import { AiOutlineSetting, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BiGitBranch } from "react-icons/bi";

function ActivityBar() {
  return (
    <div className="w-14 h-full flex bg-primary-800 justify-center py-4">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <ImCopy color="#858585" size={30} />
          <BiGitBranch color="#858585" size={30} />
          <AiOutlineSearch color="#858585" size={30} />
        </div>
        <div className="flex flex-col gap-6">
          <HiOutlineUserCircle color="#858585" size={30} />
          <AiOutlineSetting color="#858585" size={30} />
        </div>
      </div>
    </div>
  );
}

export default ActivityBar;
