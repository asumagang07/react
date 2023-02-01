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
import Tooltip from "../reusesableComponents/Tooltip";

function ActivityBar() {
  return (
    <div className="w-14 h-full flex bg-primary-800 justify-center py-4">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <Tooltip
            trigger={
              <div className="text-secondary-50 hover:text-white cursor-pointer">
                <VscFiles size={25} />
              </div>
            }
            content="Explorer (Ctrl+Shift+E)"
          />
          <Tooltip
            trigger={
              <div className="text-secondary-50 hover:text-white cursor-pointer">
                <VscSourceControl size={25} />
              </div>
            }
            content="Source Control (Ctrl+Shift+G G)"
          />
          <Tooltip
            trigger={
              <div className="text-secondary-50 hover:text-white cursor-pointer">
                <VscSearch size={25} />
              </div>
            }
            content="Search (Ctrl+Shift+F)"
          />
          <Tooltip
            trigger={
              <div className="text-secondary-50 hover:text-white cursor-pointer">
                <VscDebugAlt size={25} />
              </div>
            }
            content="Run and Debug"
          />
          <Tooltip
            trigger={
              <div className="text-secondary-50 hover:text-white cursor-pointer">
                <VscExtensions size={25} />
              </div>
            }
            content="Extensions (Ctrl+Shift+X)"
          />
        </div>
        <div className="flex flex-col gap-6">
          <Tooltip
            trigger={
              <div className="text-secondary-50 hover:text-white cursor-pointer">
                <VscAccount size={25} />
              </div>
            }
            content="Accounts"
          />
          <Tooltip
            trigger={
              <div className="text-secondary-50 hover:text-white cursor-pointer">
                <VscSettingsGear size={25} />
              </div>
            }
            content="Manage"
          />
        </div>
      </div>
    </div>
  );
}

export default ActivityBar;
