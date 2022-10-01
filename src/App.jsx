import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  function clickHandler() {
    console.log("from handler", counter);
    setCounter((count) => count + 1);
    console.log("from handler 2", counter);
  }

  useEffect(() => {
    console.log("after render", counter);
  });

  console.log("just before the render", counter);
  return (
    <div className="App">
      <h1 className="app-header">{counter}</h1>
      <button onClick={clickHandler}>+</button>
    </div>
  );
}
