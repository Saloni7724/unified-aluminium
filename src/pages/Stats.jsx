import React from "react";
import CountUp from "react-countup";
import "../css/Stats.css";

export default function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="stats-container">

        <div className="stat-box">
          <h2>
            <CountUp end={120} duration={3} />+
          </h2>
          <p>PROJECTS COMPLETED</p>
        </div>

        <div className="stat-box">
          <h2>
            100%
          </h2>
          <p>QUALITY COMMITMENT</p>
        </div>

        <div className="stat-box">
          <h2>
            <CountUp end={50} duration={3} />+
          </h2>
          <p>CUSTOM DESIGN</p>
        </div>

        <div className="stat-box">
          <h2>
            <CountUp end={85} duration={3} />+
          </h2>
          <p>HAPPY CLIENTS</p>
        </div>

      </div>
    </section>
  );
}