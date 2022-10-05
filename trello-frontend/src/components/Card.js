import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import Dropdown from "./Dropdown.js";
import CardInfo from "./CardInfo.js";

function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { id, title, date, tasks, labels } = props.card;

  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    if (!date) return "";

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Aprl",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    return day + " " + month;
  };

  return (
    <>
      {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          card={props.card}
          boardId={props.boardId}
          updateCard={props.updateCard}
        />
      )}
      <div
        className="p-3 flex flex-col gap-[5px] bg-[rgba(45,36,36,0.5)] rounded-[5px] hover:opacity-100"
        draggable
        onDragEnd={() => props.dragEnded(props.boardId, id)}
        onDragEnter={() => props.dragEntered(props.boardId, id)}
        onClick={() => setShowModal(true)}
      >
        <div className="flex items-start">
          <div className=" flex-auto flex flex-wrap gap-[5px] text-sm leading-5">
            {labels?.map((item, index) => (
              <label className="rounded-[3px] px-1 py-1 bg-[rgba(105,89,89,0.3)] text-contentCol" key={index} style={{ backgroundColor: item.color }}>
                {item.text}
              </label>
            ))}
          </div>
          <div
            className="w-[30px] h-[20px] flex-1 translate-x-[15px] cursor-pointer opacity-0 duration-200 hover:opacity-100"
            onClick={(event) => {
              event.stopPropagation();
              setShowDropdown(true);
            }}
          >
            <MoreHorizontal />
            {showDropdown && (
              <Dropdown
                class=""
                onClose={() => setShowDropdown(false)}
              >
                <p onClick={() => props.removeCard(props.boardId, id)}>
                  Delete Card
                </p>
              </Dropdown>
            )}
          </div>
        </div>
        <div className="flex-1 font-bold text-xl leading-7 text-headingCol">{title}</div>
        <div className="flex justify-between items-center">
          {date && (
            <p className="rounded-[3px] px-1 py-1 bg-[rgba(105,89,89,0.3)] text-contentCol text-[12px] leading-5 flex gap-1 items-center">
              <Clock className="h-3 w-3" />
              {formatDate(date)}
            </p>
          )}
          {tasks && tasks?.length > 0 && (
            <p className="rounded-[3px] px-1 py-1 bg-[rgba(105,89,89,0.3)] text-contentCol text-[12px] leading-5 flex gap-1 items-center">
              <CheckSquare className="h-3 w-3" />
              {tasks?.filter((item) => item.completed)?.length}/{tasks?.length}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
