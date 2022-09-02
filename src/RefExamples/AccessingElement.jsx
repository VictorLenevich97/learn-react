import { useRef, useEffect } from "react";

export const AccessingElement = () => {
  const currentRef = useRef(null);

  useEffect(() => {
    console.log(currentRef.current);
  }, []);

  return (
    <div ref={currentRef}>
      <div>
        <section>
          <p>Hello</p>
        </section>
      </div>
    </div>
  );
};
