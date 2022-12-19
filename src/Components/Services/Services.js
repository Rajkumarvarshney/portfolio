import React from "react";
import "./Services.css";
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { themeContext } from "../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: "spring" };
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : " " }}>My awesome</span>
        <span>Services</span>
        <span>
          Its a simple text of printing
          <br />
          we can print
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "ABF1FF94" }}>
          {" "}
        </div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "25%" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={Heartemoji}
            heading={"Design"}
            detail={"Figma,Sketch,Photoshop,Adobe xd"}
          />
        </motion.div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html,Css,Javascript,React"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Apne Apne Apne RAM"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
