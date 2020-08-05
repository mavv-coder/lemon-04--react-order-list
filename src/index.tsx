import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { AppContextProvider } from "./core/context";

ReactDOM.render(
  <div>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </div>,
  document.getElementById("root")
);
