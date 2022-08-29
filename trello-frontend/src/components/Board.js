import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import Card from "./Card.js";
import Dropdown from "./Dropdown.js";
import Editable from "./Editable.js";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-w-[290px] w-[290px] max-h-full basis-[290px] flex flex-col gap-[20px] border-2 border-contentCol ">
      <div className="">
        <p className="">
          {props.board?.title}
          <span>{props.board?.cards?.length || 0}</span>
        </p>
        <div
          className=""
          onClick={() => setShowDropdown(true)}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              class=""
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeBoard()}>Delete Board</p>
            </Dropdown>
          )}
        </div>
      </div>
      
      <div className="">
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
