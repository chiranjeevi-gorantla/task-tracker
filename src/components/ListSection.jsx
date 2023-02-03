import React from "react";

const ListSection = () => {
  return (
    <>
      <div className="flex mb-4 items-center bg-orange-100 px-3 py-1 border-amber-50 cursor-pointer">
        <p className="w-full text-gray-700">This is my 1st task</p>
        <button className="flex-shrink-0 px-2 py-1 ml-1 mr-2 border border-black rounded hover:bg-green-200">
          ✔️
        </button>
        <button className="flex-shrink-0 px-2 py-1 ml-1 mr-2 border border-black rounded hover:bg-red-200">
          Delete
        </button>
      </div>
      <div className="flex mb-4 items-center bg-orange-100 px-3 py-1 border-amber-50 cursor-pointer">
        <p className="w-full text-gray-700 line-through">This is my 1st task</p>
        <button className="flex-shrink-0 px-2 py-1 ml-1 mr-2 border border-black rounded hover:bg-green-200">
          ✖️
        </button>
        <button className="flex-shrink-0 px-2 py-1 ml-1 mr-2 border border-black rounded hover:bg-red-200">
          Delete
        </button>
      </div>
    </>
  );
};

export default ListSection;
