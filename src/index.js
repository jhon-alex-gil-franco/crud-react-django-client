import React from "react";
import ReactDOM from "react-dom/client";
//importacion de bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
