// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
// import { createRoot } from 'react-dom/client'
// createRoot(document.getElementById('root')).render(<App/>);
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Replace with your main component file

const root = createRoot(document.getElementById("root")); // Replace 'root' with the ID of your root DOM element
root.render(<App />);
