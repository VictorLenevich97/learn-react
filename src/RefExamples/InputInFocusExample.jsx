import { useRef, useEffect } from "react";

export const InputInFocusExample = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current);
  }, []);

  const onFocus = () => {
    inputRef.current.focus();
    inputRef.current.style = "display:none";
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={onFocus}>Set focus</button>
    </div>
  );
};
