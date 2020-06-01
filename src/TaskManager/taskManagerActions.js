export const fetchAllTodos = () => ({
  type: 'FETCH_TODO',
});

export const fetchAllTodosSuccess = (data) => ({
  type: 'FETCH_TODO_SUCCESS',
  data,
});

export const fetchAllTodosError = (error) => ({
  type: 'FETCH_TODO_ERROR',
  error,
});

export const addNewTask = (data) => ({
  type: 'ADD_TASK',
  data,
});

export const addNewTaskSuccess = () => ({
  type: 'ADD_TASK_SUCCESS',
});
export const addNewTaskError = (error) => ({
  type: 'ADD_TASK_ERROR',
  error,
});
