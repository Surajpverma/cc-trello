import React from "react";

function Modal(props) {
  return (
    <div
      className="fixed top-0 left-0 h-full min-h-screen w-full bg-[rgba(15,14,14,0.90)] flex content-center justify-center z-50"
      onClick={() => (props.onClose ? props.onClose() : "")}
    >
      <div
        className=" overflow-y-auto max-h-[95vh] rounded-[2px] "
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
