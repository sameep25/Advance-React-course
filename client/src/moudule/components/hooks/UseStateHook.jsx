import React, { useState } from "react";

const UseStateHook = () => {
  // const name = useState("lemon") ;
  // console.log(name);

  //   const [count, setCount] = useState(1);
  //   console.log(count);

  //   const increaseCount = () => setCount(count + 1);

  const userData = { firstName: "", secondName: "", age: "" };
  const [data, setData] = useState(userData);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    // <div>
    //   <button onClick={increaseCount}>Click</button>
    //   <p>count : {count}</p>

    //   <button
    //     onClick={() => {
    //       setCount(count + 1);
    //     }}
    //   >click</button>
    // </div>

    <div>
      <form style={{ display: "inline-grid" }}>
        <input
          style={{ margin: "3px" }}
          type="text"
          placeholder="firstName"
          name="firstName"
          onChange={changeHandler}
        />
        <input
          style={{ margin: "3px" }}
          type="text"
          placeholder="secondName"
          name="secondName"
          onChange={changeHandler}
        />
        <input
          style={{ margin: "3px" }}
          type="text"
          placeholder="age"
          name="age"
          onChange={changeHandler}
        />
      </form>
      <button onClick={console.log(data)}>log</button>
    </div>
  );
};

export default UseStateHook;
