import React from "react";
import "../css/Projects.css";
import partitionImg from "../photos/door1.png";
import windowImg from "../photos/windows.png";
import wardrobeImg from "../photos/room.png";
import BalconyImg from "../photos/balcony.png";
import officedoorImg from "../photos/officedoor.jpeg";
import windows1Img from "../photos/windows1.png";
import window1Img from "../photos/window1.png";
import window2Img from "../photos/window2.png";
import officegateImg from "../photos/officegate.png";
export default function Projects() {
  return (
    <section id="projects" className="projects-page">
      <div className="projects-container">

        <p className="section-label">POPULAR PROJECTS</p>
        <h1 className="main-heading">
          Delivering precision and quality in every aluminium installation.
        </h1>

       <div className="projects-grid">
  
  <div className="project-card">
    <img
      src={windowImg}
      alt="Residential Windows"
    />
    <div className="project-info">
      <h3>Residential Windows Installation</h3>
      <p>Modern aluminium sliding windows for contemporary homes.</p>
    </div>
  </div>

  <div className="project-card">
    <img
      src={partitionImg}
      alt="Office Partition"
    />
    <div className="project-info">
    <h3>Modern Glass Wardrobe</h3>
<p>Elegant black glass wardrobe with aluminium framing, designed to enhance bedroom interiors with a modern and luxurious look.</p>
    </div>
  </div>

<div className="project-card">
    <img
      src={BalconyImg}
      alt="Residential Balcony"
    />
    <div className="project-info">
      <h3>Residential glass Balcony Installation</h3>
      <p>Premium glass balcony system offering a sleek, contemporary design that adds elegance and openness to residential architecture.</p>
    </div>
  </div>
  
   <div className="project-card">
    <img
      src={wardrobeImg}
      alt="Modern Wardrobe"
    />
    <div className="project-info">
      <h3>Modern Wardrobe Design</h3>
      <p> Stylish aluminium and glass wardrobes designed for modern interiors,
    offering spacious storage with a sleek and elegant finish.</p>
    </div>
  </div>

<div className="project-card">
    <img
      src={officedoorImg}
      alt="Modern Office Door"
    />
    <div className="project-info">
     <h3>Modern Office Glass Door</h3>
    <p> Premium aluminium and glass office doors designed for durability,
        smooth operation, and a professional workspace appearance. </p>
      </div>
   </div>

    <div className="project-card">
    <img
      src={windows1Img}
      alt="Modern Wardrobe"
    />
   <div className="project-info">
      <h3>Classic Sliding Window</h3>
    <p> Elegant white sliding window with grid detailing, designed for durability, smooth operation, and a clean modern look.</p>
      </div>
  </div>

 <div className="project-card">
    <img
      src={window1Img}
      alt="Modern Wardrobe"
    />
   <div className="project-info">
      <h3>Central opening window</h3>
    <p> Modern central opening windows that swing from the middle, offering easy ventilation and a clean, symmetrical look for contemporary interiors..</p>
      </div>
  </div>

<div className="project-card">
    <img
      src={officegateImg}
      alt="Modern Wardrobe"
    />
   <div className="project-info">
      <h3>Slim partition with door</h3>
    <p> Elegant slim partitions with integrated doors, designed to divide spaces while maintaining an open and airy feel in modern interiors.</p>
      </div>
  </div>
  
   <div className="project-card">
    <img
      src={window2Img}
      alt="Modern Wardrobe"
    />
   <div className="project-info">
      <h3>Casement window with safety grill</h3>
    <p> Durable casement windows paired with secure metal grills, offering safety without compromising on natural light and ventilation. Perfect for modern homes seeking both style and protection.</p>
      </div>
  </div>


</div>
</div>
    </section>
  );
}