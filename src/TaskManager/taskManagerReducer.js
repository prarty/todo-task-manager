
const initialState = {
  isLoading: false,
  data: [],
  error: '',
};

const taskManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TODO':
    case 'ADD_TASK':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_TODO_SUCCESS':
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    case 'FETCH_TODO_ERROR':
    case 'ADD_TASK_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'ADD_TASK_SUCCESS':
      return {
        ...state,
        isLoading: false,
      };
    default: return { ...state };
  }
};

export default taskManagerReducer;
