import { ADD_TASK, DELETE_TASK, Task, TaskActionTypes } from "./taskTypes";

const addTask = (newTask: Task): TaskActionTypes => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

const deleteTask = (id: Task["id"]): TaskActionTypes => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export { addTask, deleteTask };
