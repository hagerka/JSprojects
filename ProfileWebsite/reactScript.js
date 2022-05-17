// import React from "react";
// import ReactDOM from "react-dom";

// const circle = () => (
//   <svg width="900" height="500">
//     <circle r="100" />
//   </svg>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(circle);
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

var element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
ReactDOM.render(element, document.getElementById("root"));

reportWebVitals();
