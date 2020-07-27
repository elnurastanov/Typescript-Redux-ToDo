import React from "react";
import TaskInput from "./components/addTask/addTask";
import TaskBoard from "./components/taskBoard/taskBoard";

const App = () => {

  return (
    <div className="App" style={{ position: "relative", height: "100vh" }}>
      <TaskInput />
      <TaskBoard />
    </div>
  );
};

export default App;
