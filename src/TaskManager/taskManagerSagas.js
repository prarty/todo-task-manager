import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  addNewTaskError, fetchAllTodos, fetchAllTodosError, fetchAllTodosSuccess,
} from './taskManagerActions';

export function* callFetchTodoSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:8080/api/v1/users/1/tasks');
    yield put(fetchAllTodosSuccess(response.data));
  } catch (e) {
    yield put(fetchAllTodosError(e));
  }
}

export function* fetchAllTodosSaga() {
  yield takeLatest('FETCH_TODO', callFetchTodoSaga);
}


export function* callAddTaskSaga(request) {
  try {
    console.log('Req >>> ', request);
    yield call(axios.post, 'http://localhost:8080/api/v1/users/1/tasks/create', request.data);
    yield put(fetchAllTodos());
  } catch (e) {
    yield put(addNewTaskError(e));
  }
}


export function* addTaskSaga() {
  yield takeLatest('ADD_TASK', callAddTaskSaga);
}
