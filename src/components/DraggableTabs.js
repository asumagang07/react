import React, { useState,useEffect } from "react";
import { DiJavascript1, DiCss3 } from "react-icons/di";
import { VscClose } from "react-icons/vsc";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import cn from "classnames";
import EmploymentHistory from "../pages/EmploymentHistory";
import Services from "../pages/Services";
import Profile from "../pages/Profile";

const tabs = [
  {
    id: "about",
    title: "About.js",
    icon: <DiCss3 size={20} color={"#0066b8"} />,
  },
  {
    id: "employment",
    title: "EmploymentHistory.js",
    icon: <DiJavascript1 size={20} color="#f2eb00" />,
  },
  {
    id: "services",
    title: "Services.js",
    icon: <DiJavascript1 size={20} color="#f2eb00" />,
  },
];

function DraggableTabs() {
  const [active, setActive] = useState("about");
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
    <div className="flex flex-col w-full ">
      <div
        className="flex sticky top-0
       bg-secondary-200"
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
                            "flex py-2 px-4 items-center gap-2  border-r border-secondary-400 text-xs text-primary-text",
                            snapshot.isDragging
                              ? "drop-shadow-lg opacity-50"
                              : "",
                            active === id
                              ? "bg-secondary-400"
                              : "bg-secondary-100"
                          )}
                          onClick={() => {
                            handleActive(id);
                          }}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="characters-thumb">{icon}</div>
                          {title}
                          {active === id && (
                            <div onClick={() => handleDeleteTab(id)}>
                              <VscClose />
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
      ) : active === "about" ? (
        <Profile />
      ) : (
        <Services />
      )}
    </div>
  );
}

export default DraggableTabs;
