import React, { Component } from "react";
import "./Menu.css";
import Card from "../container/Card";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const header = useSelector((state) => state.header);
  const job = () => {
    alert("di ko alam kung ano ilalagay dito haha");
    window.open("https://www.cioinsight.com/careers/it-top-paying-jobs/")
  }
  const career = () => {
    alert("di ko alam kung ano ilalagay dito haha");
    window.open("https://www.monster.com/career-advice/article/10-future-careers")
  }
  const demand = () => {
    alert("di ko alam kung ano ilalagay dito haha");
    window.open("https://blog.coastline.edu/top-10-careers-in-demand-for-2021")
  }
  return (
    <div align="center">
      <br></br>
      <h1>Decide your future.</h1>
      <p>
        EduGuide is a Career Decision Tool optimized to help you make a decision
        in finding the right program corresponding to your strengths, interest,
        and skills.
      </p>
      <br></br>
      <br></br>

      {header ? (
        <Link to="/gendesc" className="test-btn" value="submit">
          Take the Test
        </Link>
      ) : (
        <Link to="/login" className="test-btn" value="submit">
          Take the Test
        </Link>
      )}

      <br></br>
      <br></br>
      <Router>
        <Route path="/articles" component={Card} />
        <div className="card-size">
          <a
            onClick={job}
            target="_blank"
          >
            <Card
              title="Top 10 paying jobs in 2021 "
              imageUrl="./images/Top10.png"
            />
          </a>
          <br className="card-br"/>
            <br className="card-br"/>
          <a
          onClick={career}
            
            target="_blank"
          >
            <Card
              title="Top 10 careers in 10 years"
              imageUrl="./images/TopCareers.png"
            />
          </a>
          <br className="card-br"/>
            <br className="card-br"/>
          <a
          onClick={demand}
            target="_blank"
          >
            <Card
              title="In demand careers"
              imageUrl="./images/InDemand.png"
              alt="indemand"
            />
          </a>
          <br></br>
        </div>
      </Router>
    </div>
  );
}

export default Home;
