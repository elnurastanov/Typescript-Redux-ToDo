import React, { FC, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasks/taskActions";
import "./style.css";

const TaskBoard: FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks);
  const removeArrayElementCallback = useCallback(
    (id: number) => {
      dispatch(deleteTask(id));
    },
    [dispatch]
  );

  return (
    <div className="list-wrapper">
      <ul>
        {tasks.map((data: any) => {
          const { id, task } = data;
          return (
            <li key={id}>
              {task}
              <button onClick={() => removeArrayElementCallback(id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskBoard;
