import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Me from "./components/me";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
