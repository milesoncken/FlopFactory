import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./screens/home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Plans from "./screens/plans/Plans";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='plans' element={<Plans />} />
    </Routes>
  </BrowserRouter>
);
