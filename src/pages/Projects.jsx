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
import wooden from "../photos/wooden.png";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function Projects() {

const projects = [
 
 { img: windowImg, title:"Openable Window Without Grill", desc:"Simple openable window with clear glass design."},

{ img: partitionImg, title:"Slim Partition", desc:"Modern slim glass partition for stylish interiors."},

{ img: BalconyImg, title:"Aluminium Glass Railing", desc:"Strong and modern railing for balconies."},

{ img: wardrobeImg, title:"Slider Profile", desc:"Smooth sliding aluminium profile system."},

{ img: officedoorImg, title:"Slim Partition", desc:"Sleek glass partition perfect for offices."},

{ img: windows1Img, title:"Classic Sliding Window", desc:"Classic sliding window with elegant design."},

{ img: window1Img, title:"Central Opening Window", desc:"Window that opens smoothly from the center."},

{ img: officegateImg, title:"Slim Partition With Door", desc:"Slim glass partition with integrated door."},

{ img: window2Img, title:"Casement Window With Grill", desc:"Secure casement window with strong grill."},

{ img: wooden, title:"Slim Partition", desc:"Elegant slim partition with modern finish."},

{ img: blackImg, title:"Slim Partition", desc:"Stylish black frame slim glass partition."},

{ img: squareImg, title:"Slim Partition", desc:"Clean square frame partition design."},

{ img: goldenImg, title:"Slim Partition", desc:"Premium golden finish slim partition."},

{ img: curveImg, title:"Slim Partition", desc:"Modern curved design glass partition."},

{ img: classicImg, title:"Aluminium Profile", desc:"Strong aluminium profile for modern frames."}
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