This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Library used

## Eslint
- [Documentation](https://eslint.org/docs/user-guide/getting-started)

## Formik
### What is Formik?

Formik is a small group of React components and hooks for building forms in React and React Native. It helps with the three most annoying parts:

1. Getting values in and out of form state
2. Validation and error messages
3. Handling form submission

### Why Formik ?

- [npm-trends](https://www.npmtrends.com/formik-vs-react-form-vs-react-final-form-vs-@rocketseat/unform-vs-react-hook-form-vs-formsy-vs-react-redux-form)
- Reduces lot of boilerplate code.
- Keeps track of your form's state

### Hands-on

[https://codesandbox.io/s/formik-form-4p3gw](https://codesandbox.io/s/formik-form-4p3gw)

[https://codesandbox.io/s/formik-form-touched-6e39c](https://codesandbox.io/s/formik-form-touched-6e39c)

### **In-browser Playgrounds**

You can play with Formik in your web browser with these live online playgrounds.

- [CodeSandbox (ReactDOM)](https://codesandbox.io/s/zKrK5YLDZ)
- [Snack (React Native)](https://snack.expo.io/?dependencies=yup%2Cformik%2Creact-native-paper%2Cexpo-constants&sourceUrl=https%3A%2F%2Fgist.githubusercontent.com%2Fbrentvatne%2F700e1dbf9c3e88a11aef8e557627ce3f%2Fraw%2Feeee57721c9890c1212ac34a4c37707f6354f469%2FApp.js)

## Axios

- Promise based HTTP client for the browser and node.js
- Used for making call get api call post api call
- [Github Link](https://github.com/axios/axios)

## Redux

- Redux is a state container library written using typescript
- Redux library can be used by any js app, It is not specific to react.
- The whole state of your app is stored in an object tree inside a single store

```Javascript
 import { applyMiddleware, combineReducers, createStore } from 'redux';
 createStore(combineReducers({ taskManagerReducer }), applyMiddleware(sagaMiddleware));
```
- Store creating is done using redux library
- [Github Link](https://github.com/reduxjs/redux)

## React-Redux

- React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.

- React Redux provides < Provider />, which makes the Redux store available to the rest of your app:
  
```Javascript
import { Provider } from 'react-redux';

    <Provider store={store}>
      <App />
    </Provider>
```

- React Redux provides a connect function for you to connect your component to the store.

```Javascript
import { connect } from 'react-redux'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
```

## Redux-saga

- redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.
- Consider it as a separate thread performing async operation
- Act as a middleware to perform side-effects

```Javascript
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
// We apply above saga middleware to the store

const store = createStore(combineReducers({ taskManagerReducer }), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default function* rootSaga() {
  yield all(
    [
      fetchAllTodosSaga(),
      addTaskSaga(),
    ],
  );
}
```

- [Reference Doc](https://redux-saga.js.org/)

