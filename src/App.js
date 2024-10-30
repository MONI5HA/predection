import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import Main from "./temp.jpeg";
import Food from "./food.jpeg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import "./App.css";
import HealthForm from "./HealthForm";
import Dashboard from "./Dashboard";
import Mainpage from "./Mainpage";

// Register necessary chart components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/dasboard" element={<Dashboard />} />
        <Route path="/form" element={<HealthForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
