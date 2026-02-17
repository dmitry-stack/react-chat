import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { auth, firestore } from "./firebase";

export const Context = React.createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context.Provider value={{ auth, firestore }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
