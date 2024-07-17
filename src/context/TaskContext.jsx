import { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext();

const TaskDispatchContext = createContext();

export function TasksProvider({ children }) {
  const [task, dispatch] = useReducer(
    tasksReducer,
    initialTask
  );

  return (
    <TaskContext.Provider value={task}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}

export function useTasksDispatch() {
  return useContext(TaskDispatchContext);
}

function tasksReducer(task, action) {
  switch (action.type) {
    case 'added': {
      return [...task, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return task.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return task.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTask = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];

export default TasksProvider;