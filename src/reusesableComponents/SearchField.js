import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { VscFilter, VscClearAll } from "react-icons/vsc";
import Tooltip from "./Tooltip";

function SearchField(props) {
  const {
    theme: { searchFieldStyles },
  } = useContext(ThemeContext);

  const [inputValue, setInputValue] = useState("");

  // Input Field handler
  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  // Reset Input Field handler
  const resetInputField = () => {
    setInputValue("");
  };

  return (
    <div className={searchFieldStyles.rootCls}>
      <input
        placeholder={props.placeholder}
        className={searchFieldStyles.inputCls}
        value={inputValue}
        onChange={handleUserInput}
      />
      <div className="flex gap-2 items-center">
        <Tooltip
          trigger={
            <div onClick={resetInputField}>
              <VscClearAll size={15} />
            </div>
          }
          content={"Clear Profile Search Input"}
        />
        <Tooltip
          trigger={
            <div>
              <VscFilter size={15} />
            </div>
          }
          content={"Filter Profile"}
        />
      </div>
    </div>
  );
}

export default SearchField;
