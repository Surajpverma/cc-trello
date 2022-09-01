import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import Card from "./Card.js";
import Dropdown from "./Dropdown.js";
import Editable from "./Editable.js";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-w-[290px] w-[290px] max-h-full basis-[290px] flex flex-col gap-[20px] border-2 border-contentCol">
      <div className="flex justify-between items-center">
        <p className="font-bold text-base flex gap-[5px] items-center">
          {props.board?.title}
          <span className="text-[rgb(145, 145, 145)]">{props.board?.cards?.length || 0}</span>
        </p>
        <div
          className="cursor-pointer relative"
          onClick={() => setShowDropdown(true)}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              className="shadow-[1px_0px_20px_rgba(0, 0, 0, 0.12)] p-20 w-[150px] cursor-default"
              onClose={() => setShowDropdown(false)}
            >
              <p 
                className="cursor-pointer"
                onClick={() => props.removeBoard()}
              >
                Delete Board
              </p>
            </Dropdown>
          )}
        </div>
      </div>
      
      <div className="bg-[#f8f8f8] p-10 rounded-md flex flex-col gap-[10px] overflow-y-auto">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
            removeCard={props.removeCard}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
            updateCard={props.updateCard}
          />
        ))}
        <Editable
          className="bg-[#fff] rounded-xl p-10"
          text="+ Add Card"
          placeholder="Enter Card Title"
          displayClass=""
          editClass=""
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />
      </div>
    </div>
  );
}

export default Board;
