import { TaskState, TaskActionTypes, ADD_TASK, DELETE_TASK } from "./taskTypes";

const initialState: TaskState = {
  tasks: [],
};

export const taskReducer = (
  state = initialState,
  action: TaskActionTypes
): TaskState => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return {
        tasks: [...state.tasks, payload],
      };

    case DELETE_TASK:
      const { id } = payload;
      state.tasks.splice(id, 1);
      return {
        tasks: [...state.tasks],
      };

    default:
      return state;
  }
};
