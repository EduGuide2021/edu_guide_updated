import React, { Component } from "react";
import Authors from "./Authors";
import System from "./System";
import "./Menu.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class About extends Component {
  render() {
    return (
      <div>
        {/* <Router>
          <div className="about__link">
            <table className="about__table">
              <tr>
                <td className="about__box">
                  <Link to="/authors" className="about__link">
                    Authors
                  </Link>
                </td>
                <vr /> <vr /> <vr />
                <td className="about__box">
                  <Link to="/system" className="about__link">
                    System
                  </Link>
                </td>
              </tr>
            </table>
          </div>
          <Route path="/authors" component={Authors} />
          <Route path="/system" component={System} />
        </Router> */}
        <br />
      <h1> Welcome to EduGuide</h1>
      <br />
      <div align="center">
        <img src="./icons/Line.png" className="line"></img>
        <table className="intro-edu">
          <tr>
            <td className="intro-col">
              <h1>Take the test </h1>
              <p>
                Provided with two diagnostic tests: <br></br>Generalized and
                Specialized test
                <br></br>
                These tests will help narrow down the programs to choose from.
              </p>
            </td>
            <td>
              <img src="./images/TakeTest.jpeg" className="img-about"></img>
            </td>
          </tr>
          <tr>
            <td className="intro-col">
              <h1>
                Choose your <br></br> program{" "}
              </h1>
              <p>
                With over 17 programs, test yourself and see where your
                preferences and strengths tie in with them.{" "}
              </p>
            </td>
            <td>
              <img src="./images/Choose.jpeg" className="img-about"></img>
            </td>
          </tr>
          <tr>
            <td className="intro-col">
              <h1>Decide your future</h1>
              <p>
                Once that you have received your results, choose the path that
                you are the most comfortable with and pave your way towards the
                future for a better tomorrow.
              </p>
            </td>
            <td>
              <img src="./images/Decide.jpg" className="img-about"></img>
            </td>
          </tr>
          <tr>
            <td className="intro-col">
              <h1>Share EduGuide with your friends</h1>
              <p>
                Know a friend or classmate that needs help in deciding a program
                in college? Share this test on Facebook!
              </p>
            </td>
            <td>
              <img src="./images/ShareFriends.jpg" className="img-about"></img>
            </td>
          </tr>
        </table>
      </div>
      <br />
      <br />
      <center>
      <Link to="/gendesc" className="test-btn" value="submit">
        Take the Test
      </Link>
      </center>
      <br></br>
        <Authors></Authors>
      
      </div>
    );
  }
}
