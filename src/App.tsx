import React from "react";
import "./App.css";
import Board from "./Board";

function App() {
  return (
    <>
      <div className="h-screen w-full bg-neutral-900 text-neutral-50">
        <h1 className="text-3xl font-bold underline flex justify-center ">
          Kanban Board
        </h1>
        <Board />
      </div>
    </>
  );
}

export default App;
