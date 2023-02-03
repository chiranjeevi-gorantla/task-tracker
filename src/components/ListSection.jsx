import React from "react";

const ListSection = ({ todoList, settodoList }) => {
  const handleComplete = (id) => {
    const taskListArray = [...todoList];
    const makeItCompleted = taskListArray.map((item) =>
      item.id == id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    settodoList(makeItCompleted);
  };

  const handleDelete = (id) => {
    //if id matches item-id
    const taskListArray = [...todoList];
    const makeItDelete = taskListArray.filter((item) => item.id !== id && item);
    settodoList(makeItDelete);
  };

  return (
    <>
      {todoList.map((item, index) => (
        <div
          className={`flex mb-4 items-center  px-3 py-1 border-amber-50 cursor-pointer ${
            !item.isCompleted ? "bg-orange-100" : "bg-red-100"
          }`}
          key={`task ${index}`}
        >
          <span className="mr-4 font-bold text-sm">{index + 1}.</span>
          <p
            className={`w-full text-gray-700 ${
              item.isCompleted && "line-through"
            }`}
          >
            {item.taskInput}
          </p>
          <button
            className={`flex-shrink-0 px-2 py-1 ml-1 mr-2 border border-black rounded hover:bg-green-200 ${
              item.isCompleted ? " hover:bg-orange-200" : " hover:bg-green-200"
            }`}
            onClick={() => {
              handleComplete(item.id);
            }}
          >
            {item.isCompleted ? "❌" : "✔️"}
          </button>
          <button
            className="flex-shrink-0 px-2 py-1 ml-1 mr-2 border border-black rounded hover:bg-red-200"
            onClick={() => {
              handleDelete(item.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default ListSection;
