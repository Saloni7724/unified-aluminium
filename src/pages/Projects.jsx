import React from "react";
import "../css/Projects.css";

import partitionImg from "../photos/officegolden.png";
import windowImg from "../photos/windows.png";
import wardrobeImg from "../photos/room.png";
import BalconyImg from "../photos/balcony.png";
import officedoorImg from "../photos/officedoor.jpeg";
import windows1Img from "../photos/windows1.png";
import window1Img from "../photos/window1.png";
import window2Img from "../photos/window2.png";
import officegateImg from "../photos/officegate.png";
import classicImg from "../photos/hallclassic.png";
import curveImg from "../photos/hallcurve.png";
import goldenImg from "../photos/hallgolden.png";
import squareImg from "../photos/hallsquare.png";
import blackImg from "../photos/officeblack.png";



import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function Projects() {

const projects = [
  { img: windowImg, title:"Residential Windows Installation", desc:"Modern aluminium sliding windows for contemporary homes."},
  { img: partitionImg, title:"Modern Glass Wardrobe", desc:"Elegant black glass wardrobe with aluminium framing."},
  { img: BalconyImg, title:"Residential Glass Balcony", desc:"Premium glass balcony system for modern architecture."},
  { img: wardrobeImg, title:"Modern Wardrobe Design", desc:"Stylish aluminium and glass wardrobes for interiors."},
  { img: officedoorImg, title:"Modern Office Glass Door", desc:"Durable aluminium office doors with smooth operation."},
  { img: windows1Img, title:"Classic Sliding Window", desc:"Elegant sliding window with grid detailing."},
  { img: window1Img, title:"Central Opening Window", desc:"Windows that swing from the middle."},
  { img: officegateImg, title:"Slim Partition With Door", desc:"Elegant slim partitions with integrated doors."},
  { img: window2Img, title:"Casement Window With Grill", desc:"Secure windows with metal grill."},

  { img: blackImg, title:"Casement Window With Grill", desc:"Secure windows with metal grill."},
  { img: squareImg, title:"Casement Window With Grill", desc:"Secure windows with metal grill."},
  { img: goldenImg, title:"Casement Window With Grill", desc:"Secure windows with metal grill."},
  { img: curveImg, title:"Casement Window With Grill", desc:"Secure windows with metal grill."},
  { img: classicImg, title:"Casement Window With Grill", desc:"Secure windows with metal grill."}
];

return (
<section id="projects" className="projects-page">
<div className="projects-container">

<p className="section-label">POPULAR PROJECTS</p>
<h1 className="main-heading">
Delivering precision and quality in every aluminium installation.
</h1>

<Swiper
modules={[Navigation, Autoplay, EffectCoverflow]}
effect="coverflow"
centeredSlides={true}
slidesPerView={3}
loop={true}
navigation={true}

coverflowEffect={{
rotate: 0,
stretch: 0,
depth: 120,
modifier: 2.5,
slideShadows: false
}}

autoplay={{
delay: 2500,
disableOnInteraction: false
}}

breakpoints={{
1024: { slidesPerView: 3 },
768: { slidesPerView: 2 },
480: { slidesPerView: 1 }
}}

>

{projects.map((item,index)=>(
<SwiperSlide key={index}>
<div className="project-card">
<img src={item.img} alt={item.title}/>
<div className="project-info">
<h3>{item.title}</h3>
<p>{item.desc}</p>
</div>
</div>
</SwiperSlide>
))}

</Swiper>

</div>
</section>
);
}