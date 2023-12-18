import React, { useState } from "react";
import { useAppContext } from "../context/Appcontext";
import ExistingTasks from "./ExistingTasks";
import Backendless from "backendless";

function CompletedTask() {
  const { displayTodo, removeAll, getCompletedTasks } = useAppContext();
 
  const completedTasks = displayTodo("done");

 
  return (
    <div className=" lg:px-[16vw] md:px-[30vw] pt-[10vh] relative">
      <button
        onClick={removeAll}
        className="btn btn-accent w-16 bg-yellow-950 text-white absolute top-4 right-4"
      >
        Clear
      </button>
      <div className="flex justify-between gap-2 flex-wrap">
        <h1 className="font-bold text-center w-full text-[2em] text-yellow-900">
        Hurray My Completed Topics!
        </h1>
        {/* <button onClick={getCompletedTasks}>get completed</button> */}
        {completedTasks && 
        completedTasks.map((el) => <div className="card  text-yellow-300 min-h-[7vh]  font-bold text-center w-full text-[2em] ">{el.todo}</div>)}
      </div>
      </div>
    
  );
}

export default CompletedTask;
