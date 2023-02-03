import { useState } from "react";
import "./App.css";
import HeaderSection from "./components/HeaderSection";
import ListSection from "./components/ListSection";

function App() {
  const [todoList, settodoList] = useState([]);
  const [filterValue, setfilterValue] = useState("All");

  return (
    <>
      <div>
        <div className=" bg-orange-400 h-screen overflow-hidden flex items-center justify-center">
          <div className="h-100 w-full flex items-center justify-center font-sans">
            <div className="bg-white rounded shadow-lg p-6 m-4 w-full lg:w-1/2">
              {/* header */}
              <HeaderSection
                todoList={todoList}
                settodoList={settodoList}
                filterValue={filterValue}
                setfilterValue={setfilterValue}
              />
              {/* list */}
              <ListSection todoList={todoList} settodoList={settodoList} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
