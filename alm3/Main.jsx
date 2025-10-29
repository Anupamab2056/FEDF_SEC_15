import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Main";   // or "./App" if you rename it
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
