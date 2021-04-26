import { useState } from "react";

import "./Todo.css";

// boolean - true or false
// numbers - 0, 3243, 353.545, -4334
// strings - 'hello', 'jorge', '33'
// arrays - ['apple', 'orange', 'pear']
// arrays - [1, 2, 3]
// objects - { tires: 4, engine: 'honda', isFerrari: false }
// empty object {}

const Todo = () => {
  const [counter, setCounter] = useState(1);
  const [mode, setMode] = useState("normal");
  const [fruits, setFruits] = useState(["grapes", "apple", "pear", "orange"]);

  const onButtonClick = () => {
    setCounter(counter * 2);
  };
  const onModeChange = () => {
    console.log("mode:", mode);
    if (mode === "normal") {
      setMode("edit");
    } else {
      setMode("normal");
    }

    // setMode(mode === "normal" ? "edit" : "normal");
  };

  return (
    <>
      <h2>The Title</h2>
      <div className="container">
        <button onClick={onButtonClick}>count up</button>
        <button onClick={onModeChange}>change mode</button>
        <pre className="display-big">{counter}</pre>
        <pre className="display-big">{mode}</pre>

        <ul className="fruit-list">
          {fruits.map((foo) => {
            return <li className="fruit-item">{foo}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

// (a, b, c, d) => {}

export default Todo;
