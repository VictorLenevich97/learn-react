import { LOGIN, LOGOUT } from "./actions";

const initialState = {
  isAuth: false,
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuth: true };
    case LOGOUT:
      return { ...state, isAuth: false };

    default:
      return state;
  }
}

export default mainReducer;
