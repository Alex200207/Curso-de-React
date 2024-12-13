import { useState } from "react";
import FirstApp from "./firstApp";

const App = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <FirstApp />
      <h1>{props}</h1>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Haz clic aquí</button>
    </div>
  );
};
export default App;
