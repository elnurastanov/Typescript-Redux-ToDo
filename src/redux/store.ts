import { createStore, compose } from "redux";
import { taskReducer } from "./tasks/taskReducer";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(taskReducer, composeEnhancers());

export default store;
