import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

import React from "react";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiPowerbi,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava, FaBootstrap, FaGithub } from "react-icons/fa";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                web developer skilled in creating well-designed, user-friendly
                applications. <br></br> Frontend: React, JavaScript, Backend:
                .NET Core, Entity Framework.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <SiReact size={60} color="#61DAFB" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <SiJavascript size={60} color="#F7DF1E" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <SiHtml5 size={60} color="#E34F26" />
                  <SiCss3 size={60} color="#1572B6" />
                  <h5>HTML & CSS</h5>
                </div>
                <div className="item">
                  <SiCsharp size={60} color="#239120" />
                  <h5>C# & ASP.NET Core</h5>
                </div>
                <div className="item">
                  <SiMicrosoftsqlserver size={60} color="#CC2927" />
                  <h5>MS SQL</h5>
                </div>
                <div className="item">
                  <FaJava size={50} color="#007396" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <FaBootstrap size={50} color="#7952b3" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <FaGithub size={50} color="white" />
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                  <SiTailwindcss size={50} color="#38B2AC" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <SiPowerbi size={50} color="#F2C811" />
                  <h5>powerBI</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
