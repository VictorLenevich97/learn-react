import { useState, useRef, useEffect } from "react";

export const Timer = () => {
  const [counter, setCounter] = useState(0);
  const timerRef = useRef(0);

  const startTimer = () => {
    if (timerRef.current) {
      return;
    }

    timerRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};
