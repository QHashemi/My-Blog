import React from "react";
import Picture from "./hoome-components/Picture.js";
import Information from "./hoome-components/Information.js";
import HomeAbout from "./hoome-components/Home_about.js";
import Background from "./hoome-components/Background.js";
import Coding from "./hoome-components/Coding.js";
import Timeline from "./hoome-components/Timeline.js"
import SecondBackground from "./hoome-components/SecondBackground.js";
import Blogs from "./hoome-components/Blogs.js";
import Footer from "./hoome-components/Footer.js";

export default function Home() {
  return (
    <div>
      <div className="container_home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="svg_home_first"
        >
          <path
            fill="gray"
            fillOpacity=".4"
            d="M0,32L30,53.3C60,75,120,117,180,122.7C240,128,300,96,360,96C420,96,480,128,540,128C600,128,660,96,720,101.3C780,107,840,149,900,176C960,203,1020,213,1080,213.3C1140,213,1200,203,1260,176C1320,149,1380,107,1410,85.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>

        <Information />
        <Picture />
      </div>
      <div>
        <HomeAbout />
        <Background />
        <Coding />
        <Timeline />
        <SecondBackground />
        <Blogs />
        <Footer />
      </div>
    </div>
  );
}
