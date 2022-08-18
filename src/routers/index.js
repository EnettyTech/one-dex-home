import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavbar from "../components/Nav/TopNavbar";
import Home from "../screens/Landing";
import { Policy } from "../screens/policy";
import { Term } from "../screens/term";

export const RootRouters = () => {
  return (
    <BrowserRouter>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/term-conditions" element={<Term />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
