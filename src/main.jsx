import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "././styles/custom.scss";
import { BrowserRouter , HashRouter} from "react-router-dom";
import { FavoriteProvider } from "./context/ContextFavorites";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoriteProvider>
      <HashRouter>
          <App />
      </HashRouter>
    </FavoriteProvider>
  </React.StrictMode>
);
