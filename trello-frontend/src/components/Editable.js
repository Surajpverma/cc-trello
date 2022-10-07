import React, { useState } from "react";
import { X } from "react-feather";

function Editable(props) {
  const [isEditable, setIsEditable] = useState(false);
  const [inputText, setInputText] = useState(props.defaultValue || "");

  const submission = (e) => {
    e.preventDefault();
    if (inputText && props.onSubmit) {
      setInputText("");
      props.onSubmit(inputText);
    }
    setIsEditable(false);
  };

  return (
    <div className=" w-fit px-2 text-contentCol bg-[rgba(137,125,125,0.25)] rounded-[3px] active:bg-transparent">
      {isEditable ? (
        <form
          className={`flex flex-col gap-[5px] ${props.editClass ? props.editClass : ""}`}
          onSubmit={submission}
        >
          <input
            className=" border-headingCol border-b bg-transparent rounded-[3px] outline-none p-[4px] active:w-fit"
            type="text"
            value={inputText}
            placeholder={props.placeholder || props.text}
            onChange={(event) => setInputText(event.target.value)}
            autoFocus
          />
          <div className="flex gap-10 justify-between content-center">
            <button 
              className="bg-[#8d7878] px-2  rounded-[3px] hover:bg-prmRed active:translate-y-[2px]"  
              type="submit">{props.buttonText || "Add"}</button>
            <X onClick={() => setIsEditable(false)} className=" cursor-pointer h-[30px] w-[30px]" />
          </div>
        </form>
      ) : (
        <p
          className={`px-2 rounded-[3px] bg-transparent cursor-pointer w-fit duration-200 ${
            props.displayClass ? props.displayClass : ""
          }`}
          onClick={() => setIsEditable(true)}
        >
          {props.text}
        </p>
      )}
    </div>
  );
}

export default Editable;
