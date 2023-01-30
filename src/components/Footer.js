import React from "react";
import {
  VscArrowSwap,
  VscError,
  VscBellDot,
  VscFeedback,
  VscCheckAll,
  VscBroadcast,
  VscJson,
  VscSync,
  VscSourceControl,
  VscWarning
} from "react-icons/vsc";

function Footer() {
  return (
    <div className="h-6 w-full fixed bottom-0 bg-primary-400 flex items-center justify-between text-white text-xs">
      <div className="flex items-center gap-3">
        <div className="bg-success-400 flex justify-center items-center h-6 w-12">
          <VscArrowSwap />
        </div>
        <button className="flex items-center gap-3 bg-primary-400 hover:opacity-75">
          <VscSourceControl />
          adrian-ui
        </button>
        <button className="flex bg-primary-400 hover:opacity-75">
          <VscSync />
        </button>
        <button className="flex items-center gap-1 bg-primary-400 hover:opacity-75">
          <VscError />
          1
          <VscWarning />0
        </button>
        <button>Git Graph</button>
      </div>
      {/* //////////////////////////////////// */}
      <div className="flex items-center gap-3 pr-3">
        <button className="flex items-center gap-3 bg-primary-400 hover:opacity-75">
          CRLF
        </button>
        <button className="flex items-center gap-3 bg-primary-400 hover:opacity-75">
          <VscJson />
          Javascript
        </button>
        <button className="flex items-center gap-3 bg-primary-400 hover:opacity-75">
          <VscBroadcast />
          Go Live
        </button>
        <button className="flex items-center gap-3 bg-primary-400 hover:opacity-75">
          <VscCheckAll />
          Prettier
        </button>
        <button className="flex items-center gap-3 bg-primary-400 hover:opacity-75">
          <VscFeedback />
        </button>
        <button className="flex items-center gap-3 bg-primary-400 hover:opacity-75">
          <VscBellDot />
        </button>
      </div>
    </div>
  );
}

export default Footer;
