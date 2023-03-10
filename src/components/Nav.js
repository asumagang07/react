import React from "react";
// import Toggle from "./Toggle";
import Button from "../reusesableComponents/Button";

function Nav() {
  return (
    <div className="w-full flex h-8 bg-default-300 items-center justify-start border-t border-default-600">
      <div className="flex items-center justify-start text-grayText px-2 text-sm">
        <Button className='px-2'>File</Button>
        <Button className='px-2'>Edit</Button>
        <Button className='px-2'>Selection</Button>
        <Button className='px-2'>View</Button>
        <Button className='px-2'>Go</Button>
        <Button className='px-2'>Run</Button>
        <Button className='px-2'>Terminal</Button>
        <Button className='px-2'>Help</Button>
      </div>
    </div>
  );
}

export default Nav;
