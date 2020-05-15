import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

export default store;
