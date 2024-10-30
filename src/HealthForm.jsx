import React, { useState } from 'react';
import './Healthform.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function HealthForm() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    bmi: '',
    bloodPressure: '',
    cholesterol: '',
    smokingStatus: '',
    alcoholFrequency: '',
    physicalActivity: '',
    location: '',
    occupation: '',
    livingConditions: '',
    breakfast: '',
    lunch: '',
    dinner: '',
    snacks: '',
    fruitsVegetables: '',
    dairyProducts: '',
    processedFoods: '',
    hydration: '',
    mealTiming: '',
    eatingPatterns: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission, e.g., send data to server
  };

  return (
    <div className="form-container">
      <header>
        <h1>Global Health Risk</h1>
        <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/dasboard">Recommendations</Link>
        <Link to="/">Login/Logout</Link>
      </nav>
      </header>
      
      <h2>Fuel Your Body, Fight Disease – Nutrition for a Healthier Tomorrow!</h2>
      <h3>We Value Your Input!</h3>
      <p>Share Your Details for Tailored Predictions</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" type="text" onChange={handleChange} />
          
          <label>Gender</label>
          <input name="gender" type="text" onChange={handleChange} />

          <label>Age</label>
          <input name="age" type="number" onChange={handleChange} />

          <label>Body Mass Index</label>
          <input name="bmi" type="text" onChange={handleChange} />

          <label>Blood Pressure</label>
          <input name="bloodPressure" type="text" onChange={handleChange} />

          <label>Cholesterol Levels</label>
          <input name="cholesterol" type="text" onChange={handleChange} />

          <label>Smoking Status</label>
          <input name="smokingStatus" type="text" onChange={handleChange} />

          <label>Alcohol Consumption Frequency</label>
          <input name="alcoholFrequency" type="text" onChange={handleChange} />

          <label>Physical Activity Frequency</label>
          <input name="physicalActivity" type="text" onChange={handleChange} />

          <label>Location</label>
          <input name="location" type="text" onChange={handleChange} />

          <label>Occupation</label>
          <input name="occupation" type="text" onChange={handleChange} />

          <label>Living Conditions</label>
          <input name="livingConditions" type="text" onChange={handleChange} />
        </div>

        <div className="food-intake">
          <label>Daily Food Intake: Breakfast Items</label>
          <input name="breakfast" type="text" onChange={handleChange} />

          <label>Daily Food Intake: Lunch Items</label>
          <input name="lunch" type="text" onChange={handleChange} />

          <label>Daily Food Intake: Dinner Items</label>
          <input name="dinner" type="text" onChange={handleChange} />

          <label>Daily Food Intake: Snack Items</label>
          <input name="snacks" type="text" onChange={handleChange} />

          <label>Fruits and Vegetables Intake</label>
          <input name="fruitsVegetables" type="text" onChange={handleChange} />

          <label>Dairy Products Intake</label>
          <input name="dairyProducts" type="text" onChange={handleChange} />

          <label>Processed Foods Intake</label>
          <input name="processedFoods" type="text" onChange={handleChange} />

          <label>Hydration</label>
          <input name="hydration" type="text" onChange={handleChange} />

          <label>Meal Timing</label>
          <input name="mealTiming" type="text" onChange={handleChange} />

          <label>Eating Patterns</label>
          <input name="eatingPatterns" type="text" onChange={handleChange} />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default HealthForm;
