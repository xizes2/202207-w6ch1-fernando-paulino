import { Task } from "../../models/models";
import { addTaskActionNew, loadTasksActionNew } from "../types/actionCreators";
import { ToDoListReducer } from "./toDoListReducer";

describe("Given a reducer function", () => {
  describe("When instantiated with an empty array as initial state and 'tasksLoadActionNew' function, with a task array", () => {
    test("Then it should return an array with the same tasks loaded", () => {
      const addedToDoList = [
        {
          id: "666",
          task: "Infiltrate fallen angel amongst humankind",
          done: false,
        },
      ];

      const reducerTaskList = ToDoListReducer(
        [],
        loadTasksActionNew(addedToDoList)
      );

      expect(reducerTaskList).toStrictEqual(addedToDoList);
    });
  });

  describe("When instantiated with an array with one object as initial state and 'addTaskNew' function, with a new task", () => {
    test("Then it sould return an array with the initial state and the added task", () => {
      const taskListPreviousState: Task[] = [
        {
          id: "333",
          task: "Raise inequality and bring caos to the world",
          done: true,
        },
      ];
      const taskToAdd = {
        id: "111",
        task: "Reduce levels of empathy leading people to kill their siblings",
        done: true,
      };
      const expectedTasksArray = [
        {
          id: "333",
          task: "Raise inequality and bring caos to the world",
          done: true,
        },
        {
          id: "111",
          task: "Reduce levels of empathy leading people to kill their siblings",
          done: true,
        },
      ];

      const reducerDefaultAction = ToDoListReducer(
        taskListPreviousState,
        addTaskActionNew(taskToAdd)
      );

      expect(reducerDefaultAction).toStrictEqual(expectedTasksArray);
    });
  });
});
