import React from "react";
import ReactDOM from "react-dom/client";
console.log("hello");
const heading = React.createElement("div", {}, "Welcome to Learn React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
