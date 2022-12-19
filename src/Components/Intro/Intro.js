import React from "react";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Git from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Crown from "../../img/crown.png";
import thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
import { motion } from "framer-motion";
const transition = { duration: 2, type: "spring" };
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I am </span>
          <span>Rajkumar Varshney</span>
          <span>
            {" "}
            web develper and frontend developer and also learning backend and
            also trying to learn web designing{" "}
          </span>
        </div>
        <button className=" button i-button">Hire Me</button>
        <div className="i-icons">
          <img src={Git} alt=" " />
          <img src={Linkedin} alt=" " />
          <img src={Instagram} alt=" " />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt=" " />
        <img src={Vector2} alt=" " />
        <img src={boy} alt=" " />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-35%" }}
          transition={transition}
          src={glassesimoji}
          alt=" "
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "9rem", top: "18rem" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Best design" txt2="Award" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238,210,255)" }}></div>
        <div
          className="blur"
          style={{
            backgorund: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
