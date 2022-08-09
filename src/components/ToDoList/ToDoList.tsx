import { SyntheticEvent, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestRepository } from "../../app/repository/restRepository";
import { RootState } from "../../app/store";
import { Task } from "../../models/models";
import {
  deleteTaskActionNew,
  loadTasksActionNew,
} from "../../store/types/actionCreators";

export const ToDoList = () => {
  const tasks = useSelector((state: RootState) => state.toDoList);
  const dispatch = useDispatch();

  const url = "http://localhost:3111/tasks/";
  const repoTasks = useMemo(() => new RestRepository<Task, Response>(url), []);

  useEffect(() => {
    repoTasks.getAll().then((tasks) => dispatch(loadTasksActionNew(tasks)));
  }, [dispatch, repoTasks]);

  const deleteTask = useCallback(
    (event: SyntheticEvent) => {
      event.stopPropagation();
      event.preventDefault();
      tasks.map((task) =>
        repoTasks
          .delete(task.id)
          .then((response) =>
            response.ok ? dispatch(deleteTaskActionNew(task.id)) : ""
          )
      );
    },
    [dispatch, tasks, repoTasks]
  );

  return (
    <ul className="tasks-list">
      {tasks.map((task) => (
        <>
          <li className="tasks-list__task" key={task.id}>
            {task.task}
          </li>
          <button key={task.id} onClick={deleteTask}>
            Delete
          </button>
        </>
      ))}
      <button>Add Task</button>
    </ul>
  );
};

export default ToDoList;
