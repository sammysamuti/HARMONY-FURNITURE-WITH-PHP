import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // Assuming your main App component is in App.js

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
