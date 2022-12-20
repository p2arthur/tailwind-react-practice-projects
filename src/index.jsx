import React from "react";
import "./assets/index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EmailsProvider } from "./context/emailsContext";
import { NavigationProvider } from "./context/navigationContext";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <NavigationProvider>
    <EmailsProvider>
      <App />
    </EmailsProvider>
  </NavigationProvider>
);
