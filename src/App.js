import logo from "./logo.svg";
import "./App.css";
import Testing from "Testing";
import RootLayout from "Layout";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin routes */}
        <Route element={<RootLayout  />}>
          <Route path="/" element={<Testing />} />
        </Route>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
