import React from "react";
import { Routes, Route } from "react-router-dom";
import Step2 from "../pages/Step2";
import Step1 from "../pages/Step1";
import Step3 from "../pages/Step3";
import Step4 from "../pages/Step4";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
      </Routes>
    </div>
  );
}
