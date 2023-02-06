import React from "react";
import SearchField from "../reusesableComponents/SearchField";

function Profile() {
  return (
    <div className="relative flex flex-col w-full min-h-[1000px] text-primary-text p-4 bg-secondary-400 px-40">
      <div className="flex flex-col sticky top-14">
        <SearchField placeholder={"Search Profile"} />
        <div className="flex items-center justify-between border-b border-default-200 pt-2">
          <div className="flex text-grayText">
            <button className="py-1 px-2 border-b border-default-light">User</button>
            <button className="py-1 px-2 border-b border-default-light">Workspace</button>
          </div>
          <button className="p-1 my-1 bg-blueText">Turn on Profile Sync</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
