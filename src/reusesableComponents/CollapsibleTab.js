import React, { useState } from "react";
import Collapsible from "react-collapsible";
import cn from "classnames";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

function CollapsibleTab(props) {
  const triggerStyle = cn(
    "flex group items-center justify-between gap-2 w-full hover:bg-default-200 py-1 px-4 text-xs font-semibold"
  );

  const [isCollapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(false);
    console.log(isCollapsed);
  };
  const handleCollapse2 = () => {
    setCollapsed(true);
    console.log(isCollapsed);
  };

  return (
    <div className="flex flex-col w-full">
      {props.items.map((item) => {
        return (
          <Collapsible
            open={item.is_open}
            key={item.id}
            transitionTime={200}
            onOpening={handleCollapse}
            onClosing={handleCollapse2}
            trigger={
              <div className={triggerStyle}>
                <div className="flex items-center gap-2">
                  {!isCollapsed ? (
                    <VscChevronDown size={20} />
                  ) : (
                    <VscChevronRight size={20} />
                  )}
                  {item.trigger}
                </div>
                <div className=" items-center gap-2 hidden group-hover:flex">
                  {item.rightActions?.map((action) => {
                    return (
                      <div className="text-sm" key={action.id}>
                        {action.actionbtn}
                      </div>
                    );
                  })}
                </div>
              </div>
            }
          >
            <div className="flex items-center gap-2" >
              {item.icon} {item.content}
            </div>
          </Collapsible>
        );
      })}
    </div>
  );
}

export default CollapsibleTab;
