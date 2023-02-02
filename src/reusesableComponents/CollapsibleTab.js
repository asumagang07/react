import React from "react";
import Collapsible from "react-collapsible";

function CollapsibleTab(props) {
  return (
    <div className="flex flex-col w-full">
      {props.items.map((item) => {
        return (
          <Collapsible open={item.is_open} key={item.id} transitionTime={200} trigger={item.trigger}>
           <div className="flex items-center gap-2 px-4">
            {item.icon} {item.content}
           </div>
          </Collapsible>
        );
      })}
    </div>
  );
}

export default CollapsibleTab;
