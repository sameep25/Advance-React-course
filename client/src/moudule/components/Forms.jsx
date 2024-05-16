import React from "react";
import { useState } from "react";

// const Forms = () => {
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(name);
//   };

//   return (
// <form onSubmit={handleSubmit}>
//   <fieldset>
//     <div>
//       <label>Name : </label>
//       <input
//         type="text"
//         placeholder="Name"
//         name="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//     </div>
//     <button type="submit" disabled={!name}>Submit</button>
//   </fieldset>
// </form>

//   );
// };

// export default Forms;

const Forms = () => {
  const [score, setScore] = useState(10);

  const handleSubmit = (e) =>{
    e.preventDefault() ;
    console.log(score);
  }

  return (
    <form onSubmit={handleSubmit} >
      <fieldset>
        <h2>Feedback Form</h2>
        <div className="Field">
          <label>Score : {score}</label>
          <br />
          <input
            type="range"
            min="0"
            max="10"
            value={score}
            onChange={(e) => {
              setScore(e.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default Forms;
