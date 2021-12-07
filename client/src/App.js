
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Themmoi from "./Hoso/ThemMoi";
import Hoso from "./Hoso/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hoso/themmoi" element={<Themmoi />} />
        <Route path="/hoso" element={<Hoso />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;