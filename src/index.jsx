import React from "react";
import "./assets/index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EmailsProvider } from "./context/emailsContext";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <EmailsProvider>
    <App />
  </EmailsProvider>
);
