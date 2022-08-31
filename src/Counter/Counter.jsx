import { useState, useMemo } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  // const arr = () => {
  //   console.log("return Array");
  //   return ["apple", "banana", "orange"];
  // };

  const arr = useMemo(() => {
    console.log("return memo array");
    return ["apple", "banana", "orange"];
  }, []);

  return (
    <div>
      <span>{counter}</span>
      <br />
      <button onClick={() => setCounter(counter + 1)}>Click</button>

      <hr />

      <div>
        {arr.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
};
