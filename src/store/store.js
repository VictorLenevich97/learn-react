import { createStore, combineReducers } from "redux";
import mainReducer from "./mainStore/reducer";
import postsReducer from "./postsStore/reducer";

const rootReducers = combineReducers({
  mainReducer,
  postsReducer,
});

const store = createStore(rootReducers);

export default store;
