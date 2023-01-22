import { useState } from "react";
import HomePage from "./pages/homePage/homePage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about/aboutPage";

function App() {
  return (
      <Routes>
          <Route index path="/" element={<HomePage/>}/>
          <Route index path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage />}/>
      </Routes>

  );
}

export default App;
