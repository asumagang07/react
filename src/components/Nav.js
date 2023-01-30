import React from "react";
import Toggle from "./Toggle";

function Nav() {
  return (
    <div className="w-full flex h-8 bg-secondary-300 items-center justify-start border-t border-secondary-400">
      <div className="flex items-center justify-start text-secondary-50 px-2 text-sm">
        <p className="px-2 text-sm rounded hover:bg-secondary-100">File</p>
        <p className="px-2 text-sm rounded hover:bg-secondary-100">Edit</p>
        <p className="px-2 text-sm rounded hover:bg-secondary-100">Selection</p>
        <p className="px-2 text-sm rounded hover:bg-secondary-100">View</p>
        <p className="px-2 text-sm rounded hover:bg-secondary-100">Go</p>
        <p className="px-2 text-sm rounded hover:bg-secondary-100">Run</p>
        <p className="px-2 text-sm rounded hover:bg-secondary-100">Terminal</p>
        <p className="px-2 text-sm rounded hover:bg-secondary-100">Help</p>
      </div>
    </div>
  );
}

export default Nav;
