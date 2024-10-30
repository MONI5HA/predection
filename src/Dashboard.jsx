import React from 'react';
import './Dashboard.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="header">
    <h1>Global Health Risk</h1>
    <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/dasboard">Recommendations</Link>
        <Link to="/">Login/Logout</Link>
      </nav>
  </header>

      <div className="tagline">
        <h2>Unlock the Power of Nutrition: Transform Your Health, Elevate Your Life, and Thrive with Every Bite!</h2>
      </div>

      <div className="info-section">
        <div className="info-card">
          <h3>Total Calories Consumed</h3>
          <p>450</p>
        </div>
        <div className="info-card">
          <h3>Total Daily Protein Intake</h3>
          <p>450</p>
        </div>
        <div className="info-card">
          <h3>Total Daily Carbohydrate Intake</h3>
          <p>450</p>
        </div>
      </div>

      <div className="macro-nutrient-section">
        <h3>Macro-nutrient Breakdown</h3>
        <table>
          <thead>
            <tr>
              <th>Nutrient</th>
              <th>Total</th>
              <th>Goal</th>
              <th>Left</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Protein</td><td>0</td><td>190</td><td>190g</td></tr>
            <tr><td>Carbohydrates</td><td>0</td><td>160</td><td>160g</td></tr>
            <tr><td>Fiber</td><td>0</td><td>38</td><td>38g</td></tr>
            <tr><td>Sugar</td><td>0</td><td>99</td><td>99g</td></tr>
            <tr><td>Fat</td><td>0</td><td>55</td><td>55g</td></tr>
            <tr><td>Saturated Fat</td><td>0</td><td>29</td><td>29g</td></tr>
            <tr><td>Polyunsaturated Fat</td><td>0</td><td>-</td><td>0g</td></tr>
          </tbody>
        </table>
      </div>

      <div className="gauge-section">
        <div className="gauge-card">
          <p>Sugar Consumption</p>
          <div className="gauge"></div>
        </div>
        <div className="gauge-card">
          <p>Fiber Intake</p>
          <div className="gauge"></div>
        </div>
        <div className="gauge-card">
          <p>Nutritional Deficiencies</p>
          <div className="gauge"></div>
        </div>
      </div>

      <div className="table-section">
        <h3>Food Labels - Recommended Daily Intake</h3>
        <table>
          <thead>
            <tr>
              <th>Nutrient</th>
              <th>Recommended Daily Intake</th>
              <th>Nutrient</th>
              <th>Recommended Daily Intake</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Vitamin A</td><td>1,000 RE</td><td>Vitamin E</td><td>10 mg</td></tr>
            <tr><td>Biotin</td><td>30 µg</td><td>Riboflavin</td><td>1.7 mg</td></tr>
            <tr><td>Vitamin C</td><td>60 mg</td><td>Niacin</td><td>23 NE</td></tr>
            <tr><td>Vitamin B6</td><td>1.8 mg</td><td>Vitamin B12</td><td>2 µg</td></tr>
            <tr><td>Thiamin</td><td>1.3 mg</td><td>Chromium</td><td>120 µg</td></tr>
            <tr><td>Folic acid</td><td>220 µg</td><td>Phosphorus</td><td>1,100 mg</td></tr>
            <tr><td>Pantothenic acid</td><td>7 mg</td><td>Selenium</td><td>50 µg</td></tr>
            <tr><td>Vitamin K</td><td>80 µg</td><td>Calcium</td><td>1,100 mg</td></tr>
            <tr><td>Iodide</td><td>160 µg</td><td>Magnesium</td><td>250 mg</td></tr>
            <tr><td>Molybdenum</td><td>75 µg</td><td>Manganese</td><td>2 mg</td></tr>
            <tr><td>Iron</td><td>14 mg</td><td>Zinc</td><td>9 mg</td></tr>
            <tr><td>Vitamin D</td><td>5 µg</td><td>Chloride</td><td>3,400 mg</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
