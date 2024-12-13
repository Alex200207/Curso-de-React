import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { CounterApp } from "./CounterApp";

//cada componente debe ir upperCamelCase

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*usando el modo estricto recomendado */}
    <CounterApp value={20} />
  </React.StrictMode>
);
