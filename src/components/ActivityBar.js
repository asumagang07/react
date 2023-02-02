import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
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

const data = [
  {
    id: "1",
    icon: <VscFiles size={25} />,
    content: "Explorer (Ctrl+Shift+E)",
  },
  {
    id: "2",
    icon: <VscSourceControl size={25} />,
    content: "Source Control (Ctrl+Shift+G G)",
  },
  {
    id: "3",
    icon: <VscSearch size={25} />,
    content: "Search (Ctrl+Shift+F)",
  },
  {
    id: "4",
    icon: <VscDebugAlt size={25} />,
    content: "Run and Debug",
  },
  {
    id: "5",
    icon: <VscExtensions size={25} />,
    content: "Extensions (Ctrl+Shift+X)",
  },
];

function ActivityBar() {
  const {
    theme: { activityBarStyles },
  } = useContext(ThemeContext);

  return (
    <div className={activityBarStyles.rootCls}>
      <div className={activityBarStyles.wrapperCls}>
        <div className={activityBarStyles.divCls}>
          {data.map((item) => {
            return (
              <Tooltip
                key={item.id}
                trigger={
                  <div className={activityBarStyles.buttonCls.base}>
                    {item.icon}
                  </div>
                }
                content={item.content}
              />
            );
          })}
        </div>
        <div className={activityBarStyles.divCls}>
          <Tooltip
            trigger={
              <div className={activityBarStyles.buttonCls.base}>
                <VscAccount size={25} />
              </div>
            }
            content="Accounts"
          />
          <Tooltip
            trigger={
              <div className={activityBarStyles.buttonCls.base}>
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
