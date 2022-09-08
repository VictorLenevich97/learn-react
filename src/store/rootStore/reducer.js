import { LOGIN, LOGOUT } from "./actions";

const initialState = {
  isAuth: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuth: true };
    case LOGOUT:
      return { ...state, isAuth: false };

    default:
      return state;
  }
}

export default rootReducer;
