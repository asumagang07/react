import React from "react";
import Toggle from "./Toggle";

function Nav() {
  return (
    <div className="w-full flex h-8 bg-secondary-300 items-center justify-start border-t border-secondary-400">
      <div className="flex items-center justify-start gap-3 text-secondary-50 px-2 text-sm">
        <p>File</p>
        <p>Edit</p>
        <p>Selection</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
    </div>
  );
}

export default Nav;
