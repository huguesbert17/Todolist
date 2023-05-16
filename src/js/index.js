//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { TodoProvider } from "./component/context/TodoContext";

//render your react application
ReactDOM.render(<TodoProvider children={<Home />}/>, document.querySelector("#app"));
