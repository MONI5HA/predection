import React from 'react'

import { Pie, Bar } from "react-chartjs-2";
import Main from "./temp.jpeg";
import Food from "./food.jpeg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


import "./App.css";
import HealthForm from "./HealthForm";
import Dashboard from "./Dashboard";


function Mainpage() {
  return (
    <div>
        <Header></Header>
        <HeroSection></HeroSection>
        <FilterSection></FilterSection>
        <MetricsSection></MetricsSection>
        <DiseaseThreats></DiseaseThreats>
        <CallToAction></CallToAction>
        <ContentSection></ContentSection>

    </div>
  )
}
// Header Component
const Header = () => (
    <header className="header">
      <h1>Global Health Risk</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/dasboard">Recommendations</Link>
        <Link to="/">Login/Logout</Link>
      </nav>
    </header>
  );
  
  // Hero Section
  const HeroSection = () => (
    <section className="hero-section">
      <img src={Main} alt="Health and Nutrition" className="hero-image" />
      <h2>
        "Fuel Your Body, Fight Disease – Nutrition for a Healthier Tomorrow!"
      </h2>
    </section>
  );
  
  // Filter Section
  const FilterSection = () => (
    <section className="filter-section">
      <button>Select Country</button>
      <button>Select Date</button>
      <button>{`{Download/Share}`}</button>
    </section>
  );
  
  // Metrics Section with Pie Charts
  const MetricsSection = () => (
    <section className="metrics-section">
      <div className="metric-box">
        <h3>Total Population</h3>
        <PieChart />
      </div>
      <div className="metric-box">
        <h3>Type of foods per consumer</h3>
        <PieChart />
      </div>
      <div className="metric-box">
        <h3>Health Risk Percentage</h3>
        <PieChart />
      </div>
    </section>
  );
  
  // Disease Threats Section with Bar Chart
  const DiseaseThreats = () => (
    <section className="disease-threats">
      <h3>Disease Threats</h3>
      <BarChart />
    </section>
  );
  
  // Call to Action Section
  const CallToAction = () => (
    <section className="call-to-action">
      <Link to="/form">
        <button>Wanna Predict your health disease? Let's Get Started</button>
      </Link>
    </section>
  );
  
  // Content Section with Pie Charts
  const ContentSection = () => (
    <div>
      <section className="content-section">
        <div className="content-image">
          <img src={Food} alt="Food" />
        </div>
        <div className="content-text">
          <p>
            Canada's food culture is a rich tapestry that reflects its diverse
            population...
          </p>
        </div>
      </section>
  
      <div className="additional-charts">
        <div className="chart">
          <h4>TITLE</h4>
          <PieChart />
        </div>
        <div className="chart">
          <h4>TITLE</h4>
          <PieChart />
        </div>
      </div>
    </div>
  );
  
  // PieChart Component
  const PieChart = () => {
    const pieData = {
      labels: ["Category 1", "Category 2", "Category 3"],
      datasets: [
        {
          label: "Data",
          data: [30, 40, 30],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };
  
    return <Pie data={pieData} />;
  };
  
  // BarChart Component
  const BarChart = () => {
    const barData = {
      labels: ["Disease 1", "Disease 2", "Disease 3"],
      datasets: [
        {
          label: "Threat Level",
          data: [65, 59, 80],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };
  
    const barOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Disease Threats",
        },
      },
    };
  
    return <Bar data={barData} options={barOptions} />;
  };

export default Mainpage