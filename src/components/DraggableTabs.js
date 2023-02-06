import React, { useState } from "react";
import {
  VscChromeClose,
  VscEllipsis,
  VscSplitHorizontal,
  VscHistory,
} from "react-icons/vsc";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import cn from "classnames";
import EmploymentHistory from "../pages/EmploymentHistory";
import Services from "../pages/Services";
import Profile from "../pages/Profile";
import GetStarted from "../pages/GetStarted";

function DraggableTabs({ tabs }) {
  const [active, setActive] = useState("getStarted");
  const [draggedTabs, setDraggedTabs] = useState(tabs);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(draggedTabs);
    const [reorderedTabs] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedTabs);

    setDraggedTabs(items);
  }

  const handleActive = (id) => {
    setActive(id);
  };

  const handleDeleteTab = (id) => {
    draggedTabs.map((items) => {
      if (items.id === id) {
        draggedTabs.splice(id, 1);
      } else return;
    });
  };

  return (
    <div className="relative flex flex-col w-full">
      <div
        className="fixed z-10 top-[4.5rem] right-0 pr-6 h-[36px] min-w-[3rem]
      flex items-center gap-3 text-grayText"
      >
        <VscHistory />
        <VscSplitHorizontal />
        <VscEllipsis />
      </div>
      <div
        className=" flex sticky top-0
       bg-default-400 "
      >
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters" direction="horizontal">
            {(provided) => (
              <ul
                className="characters flex w-full"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {draggedTabs.map(({ id, title, icon }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided, snapshot) => (
                        <li
                          className={cn(
                            "flex py-2 px-4 items-center justify-center gap-2 min-w-[5rem]  border-r border-default-600 text-xs text-grayText",
                            snapshot.isDragging
                              ? "drop-shadow-lg opacity-50"
                              : "",
                            active === id ? "bg-default-600" : "bg-default-200"
                          )}
                          onClick={() => {
                            handleActive(id);
                          }}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {icon && (
                            <div className="characters-thumb">{icon}</div>
                          )}
                          {title}
                          {active === id && (
                            <div
                              className="pl-3"
                              onClick={() => handleDeleteTab(id)}
                            >
                              <VscChromeClose />
                            </div>
                          )}
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      {/* //////////////////////////////////// */}
      {active === "employment" ? (
        <EmploymentHistory />
      ) : active === "profile" ? (
        <Profile />
      ) : active === "getStarted" ? (
        <GetStarted />
      ) : (
        <Services />
      )}
    </div>
  );
}

export default DraggableTabs;
