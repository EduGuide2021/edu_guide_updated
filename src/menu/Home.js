import React, { Component } from "react";
import "./Menu.css";
import Card from "../container/Card";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const header = useSelector((state) => state.header);
  const job = () => {
    alert("Eduguide");
    window.open("https://www.cioinsight.com/careers/it-top-paying-jobs/")
  }
  const career = () => {
    alert("Eduguide");
    window.open("https://www.monster.com/career-advice/article/10-future-careers")
  }
  const demand = () => {
    alert("Eduguide");
    window.open("https://blog.coastline.edu/top-10-careers-in-demand-for-2021")
  }
  return (
    <div align="center">
      <br></br>
      <h1>Decide your future.</h1>
      <img src="./icons/Line.png" class="line"></img>
      <p className="break">
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
              footer="CIO Insight"
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
              footer="Indeed"
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
              footer="indemand"
            />
          </a>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <br></br>
          <br></br>
          <br></br>
         
          <br></br>
          <br></br>

          
          <br></br>
          <br></br>

        </div>
      </Router>
    </div>
  );
}

export default Home;
