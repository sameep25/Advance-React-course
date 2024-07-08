import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseEffectHook = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.title = toggle ? "Welcome" : "UseEffect";
  }, [toggle]);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <h1>Use effect</h1>
      <button onClick={clickHandler}>Toggle message</button>
      {toggle && <h2>Welcome h2</h2>}
    </div>
  );
};

export default UseEffectHook;
