import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "././styles/custom.scss";
import { BrowserRouter } from "react-router-dom";
import { FavoriteProvider } from "./context/ContextFavorites";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
