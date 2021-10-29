import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./reducers/reducer";
import rootSaga from "./sagas/saga";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer,
    composeWithDevTools(
    applyMiddleware(sagaMiddleware)
    )
    );
sagaMiddleware.run(rootSaga);