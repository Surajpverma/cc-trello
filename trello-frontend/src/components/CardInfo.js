import React, { useEffect, useState } from "react";
import {
  Calendar, CheckSquare, List, Tag, Trash, Type, X,} from "react-feather";
import Modal from "./Modal.js";
import Editable from "./Editable.js";

function CardInfo(props) {
  const colors = [
    "#a8193d",
    "#4fcc25",
    "#1ebffa",
    "#8da377",
    "#9975bd",
    "#cf61a1",
    "#240959",
  ];

  const [selectedColor, setSelectedColor] = useState();
  const [values, setValues] = useState({
    ...props.card,
  });

  const updateTitle = (value) => {
    setValues({ ...values, title: value });
  };

  const updateDesc = (value) => {
    setValues({ ...values, desc: value });
  };

  const addLabel = (label) => {
    const index = values.labels.findIndex((item) => item.text === label.text);
    if (index > -1) return;

    setSelectedColor("");
    setValues({
      ...values,
      labels: [...values.labels, label],
    });
  };

  const removeLabel = (label) => {
    const tempLabels = values.labels.filter((item) => item.text !== label.text);

    setValues({
      ...values,
      labels: tempLabels,
    });
  };

  const addTask = (value) => {
    const task = {
      id: Date.now() + Math.random() * 2,
      completed: false,
      text: value,
    };
    setValues({
      ...values,
      tasks: [...values.tasks, task],
    });
  };

  const removeTask = (id) => {
    const tasks = [...values.tasks];

    const tempTasks = tasks.filter((item) => item.id !== id);
    setValues({
      ...values,
      tasks: tempTasks,
    });
  };

  const updateTask = (id, value) => {
    const tasks = [...values.tasks];

    const index = tasks.findIndex((item) => item.id === id);
    if (index < 0) return;

    tasks[index].completed = value;

    setValues({
      ...values,
      tasks,
    });
  };

  const calculatePercent = () => {
    if (!values.tasks?.length) return 0;
    const completed = values.tasks?.filter((item) => item.completed)?.length;
    return (completed / values.tasks?.length) * 100;
  };

  const updateDate = (date) => {
    if (!date) return;

    setValues({
      ...values,
      date,
    });
  };

  useEffect(() => {
    if (props.updateCard) props.updateCard(props.boardId, values.id, values);
  }, [values]);

  return (
    <Modal onClose={props.onClose}>
      <div className=" p-3 flex flex-col gap-[10px] min-w-min h-fit">
        <div className=" w-full flex flex-col gap-[5px]">
          <div className="flex gap-[5px] content-center">
            <Type />
            <p className=" text-contentCol">Title</p>
          </div>
          <Editable 
            defaultValue={values.title}
            text={values.title}
            placeholder="Enter Title"
            onSubmit={updateTitle}
          />
        </div>

        <div className="w-full flex flex-col gap-[5px]">
          <div className="flex gap-[5px] content-center">
            <List />
            <p className=" text-contentCol">Description</p>
          </div>
          <Editable
            defaultValue={values.desc}
            text={values.desc || "Add a Description"}
            placeholder="Enter description"
            onSubmit={updateDesc}
          />
        </div>

        <div className="w-full flex flex-col gap-[5px]">
          <div className="flex gap-[5px] content-center">
            <Calendar />
            <p className=" text-contentCol">Date</p>
          </div>
          <input
            type="date"
            defaultValue={values.date}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateDate(event.target.value)}
          />
        </div>

        <div className="w-full flex flex-col gap-[5px]">
          <div className="flex gap-[5px] content-center">
            <Tag />
            <p className=" text-contentCol">Labels</p>
          </div>
          <div className="flex gap-[5px] flex-wrap">
            {values.labels?.map((item, index) => (
              <label className=" rounded-[3px] bg-[rgba(45,36,36,0.5)] text-contentCol px-1 py-1 flex content-center gap-1"
                key={index}
                // style={{ backgroundColor: item.color, color: "#fff" }}
              >
                {item.text}
                <X onClick={() => removeLabel(item)} />
              </label>
            ))}
          </div>
          <ul className="flex gap-[5px] left-3">
            {colors.map((item, index) => (
              <li id="myLi"
                key={index + item}
                style={{ backgroundColor: item }}
                className={selectedColor === item ? "li_active" : ""}
                onClick={() => setSelectedColor(item)}
              />
            ))}
          </ul>
          <Editable
            text="Add Label"
            placeholder="Enter label text"
            onSubmit={(value) =>
              addLabel({ color: selectedColor, text: value })
            }
          />
        </div>

        <div className="w-full flex flex-col gap-[5px]">
          <div className="flex gap-[5px] content-center">
            <CheckSquare />
            <p>Tasks</p>
          </div>
          <div className=" w-full rounded-[5px] h-[10px] border-contentCol ">
            <div
              id="prog"
              style={{
                width: `${calculatePercent()}%`,
                backgroundColor: calculatePercent() === 100 ? "skyblue" : "",
              }}
            />
          </div>
          <div className="">
            {values.tasks?.map((item) => (
              <div key={item.id} className="">
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onChange={(event) =>
                    updateTask(item.id, event.target.checked)
                  }
                />
                <p className={item.completed ? "completed" : ""}>{item.text}</p>
                <Trash onClick={() => removeTask(item.id)} />
              </div>
            ))}
          </div>
          <Editable
            text={"Add a Task"}
            placeholder="Enter task"
            onSubmit={addTask}
          />
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;
