import React from "react";

function Header() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center justify-between bg-secondary-light h-12">
        <div className="w-4" />
        <div className="flex items-center gap-4 text-white text-sm">
          <div className="w-3 h-3 rounded-full bg-white" />
          Home.js - react- Visual Studio Code
        </div>
        <div className="w-4" />

      </div>
    </div>
  );
}

export default Header;
