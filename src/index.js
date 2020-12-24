import loadable from "@loadable/component";
import React from "react";
import ReactDOM from "react-dom";
const App = loadable(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
