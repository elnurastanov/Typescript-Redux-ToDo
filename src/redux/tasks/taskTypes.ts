export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

export interface Task {
  id: any;
  task: string;
}

export interface TaskState {
  tasks: Array<any>;
}

interface AddTask {
  type: typeof ADD_TASK;
  payload: Task;
}

interface DeleteTask {
  type: typeof DELETE_TASK;
  payload: Task["id"];
}

export type TaskActionTypes = AddTask | DeleteTask;
