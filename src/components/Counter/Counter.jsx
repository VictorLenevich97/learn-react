import { useReducer } from "react";

import { reducer, initialState } from "./reducer";
import { onIncrement, onDecrement } from "./actions";

// useReducer just an example

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Counter</h2>
      <p>{state.counter}</p>
      <button onClick={() => dispatch(onIncrement())}>+</button>
      <button onClick={() => dispatch(onDecrement())}>-</button>
    </div>
  );
};
