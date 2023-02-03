import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const HeaderSection = ({
  todoList,
  settodoList,
  filterValue,
  setfilterValue,
}) => {
  const [taskInput, settaskInput] = useState("");

  const selectedValues = [
    { value: "all", name: "all" },
    { value: "completed", name: "completed" },
    { value: "uncompleted", name: "uncompleted" },
  ];

  const handleAdd = () => {
    console.log(" Add clicked");
    settodoList((pre) => [
      ...pre,
      { taskInput, id: uuidv4(), isCompleted: false },
    ]);
  };

  return (
    <>
      <div className=" w-auto mb-8">
        <h1 className="py-10 text-center font-bold text-2xl uppercase">
          Task Tracker
        </h1>
        <div className="flex mt-4 gap-5">
          <input
            type="text"
            placeholder="Enter your task item"
            className="border rounded shadow appearance-none
             w-full py-2 px-3 text-gray-800 placeholder-gray-500 
             placeholder-opacity-80 font-mono "
            value={taskInput}
            onChange={(e) => {
              settaskInput(e.target.value);
            }}
          />
          <button
            className="border-2 p-2 px-5 rounded-lg bg-orange-400 hover:bg-orange-500"
            onClick={handleAdd}
          >
            Add
          </button>
          <select
            className="shadow border rounded py-2 text-gray-800"
            value={filterValue}
            onChange={(e) => {
              setfilterValue(e.target.value);
            }}
          >
            {selectedValues.map((item, index) => (
              <option value={item.value} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
