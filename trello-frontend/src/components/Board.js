import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import Card from "./Card.js";
import Dropdown from "./Dropdown.js";
import Editable from "./Editable.js";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-w-[290px] w-[290px] max-h-full basis-[290px] flex flex-col flex-[3] gap-[15px] m-5">
      <div className="flex justify-between items-center">
        <p className="font-bold text-base flex gap-[5px] items-center text-headingCol">
          {props.board?.title}
          <span className=" text-contentCol">{props.board?.cards?.length || 0}</span>
        </p>
        <div
          className="cursor-pointer relative text-headingCol"
          onClick={() => setShowDropdown(true)}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              className=" p-10 w-[150px] cursor-default text-contentCol"
              onClose={() => setShowDropdown(false)}
            >
              <p 
                className="cursor-pointer text-headingCol"
                onClick={() => props.removeBoard()}
              >
                Delete Board
              </p>
            </Dropdown>
          )}
        </div>
      </div>
      
      <div className=" bg-outerBoxCol p-[10px] rounded-[8px] flex flex-col gap-[10px] overflow-y-auto">
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
