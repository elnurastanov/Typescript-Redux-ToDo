import React, { FC, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Task } from "../../redux/tasks/taskTypes";
import { addTask } from "../../redux/tasks/taskActions";
import "./style.css";

const TaskInput: FC = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState<Task>({ id: undefined, task: "" });

  const setInputDataCallback = useCallback((event) => {
    setInputData({
      id: (Math.random() * 100).toFixed(),
      task: event.target.value,
    });
  }, []);

  const addTaskCallback = useCallback(() => {
    dispatch(addTask(inputData));
    setInputData({ id: undefined, task: "" });
  }, [inputData, dispatch]);

  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={inputData.task}
        onChange={setInputDataCallback}
      />
      <button onClick={addTaskCallback}>Add Task</button>
    </div>
  );
};

export default TaskInput;
