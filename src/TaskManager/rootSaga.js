import { all } from 'redux-saga/effects';
import { addTaskSaga, fetchAllTodosSaga } from './taskManagerSagas';


export default function* rootSaga() {
  yield all(
    [
      fetchAllTodosSaga(),
      addTaskSaga(),
    ],
  );
}
