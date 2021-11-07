import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer, rootSaga } from "./index";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer,
    composeWithDevTools(
    applyMiddleware(sagaMiddleware)
    )
    );
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;