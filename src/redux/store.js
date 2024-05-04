import { createStore, combineReducers } from "redux";
// reducers
import filtersReducer from "./reducers";

const rootReducer = combineReducers({
  filters: filtersReducer,
});

const store = createStore(rootReducer);

export default store;
