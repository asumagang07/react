import React from "react";
import {
  VscAccount,
  VscSettingsGear,
  VscFiles,
  VscSourceControl,
  VscSearch,
  VscDebugAlt,
  VscExtensions,
} from "react-icons/vsc";

function ActivityBar() {
  return (
    <div className="w-14 h-full flex bg-primary-800 justify-center py-4">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <div className="text-secondary-50 hover:text-white cursor-pointer">
            <VscFiles size={25} />
          </div>
          <div className="text-secondary-50 hover:text-white cursor-pointer">
            <VscSourceControl size={25} />
          </div>
          <div className="text-secondary-50 hover:text-white cursor-pointer">
            <VscSearch size={25} />
          </div>
          <div className="text-secondary-50 hover:text-white cursor-pointer">
            <VscDebugAlt size={25} />
          </div>
          <div className="text-secondary-50 hover:text-white cursor-pointer">
            <VscExtensions size={25} />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-secondary-50 hover:text-white cursor-pointer">
            <VscAccount size={25} />
          </div>
          <div className="text-secondary-50 hover:text-white cursor-pointer">
            <VscSettingsGear size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityBar;
