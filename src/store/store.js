import { createStore } from "redux";
import rootReducer from "./rootStore/reducer";

const store = createStore(rootReducer);

export default store;
