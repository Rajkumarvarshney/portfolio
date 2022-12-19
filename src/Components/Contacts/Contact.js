import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Button Pressed");

    emailjs
      .sendForm(
        "service_4m6qo9o",
        "template_v629b3o",
        form.current,
        "XiEnHAf_MGTU5CGBb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blue s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user-name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user-email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks  for contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var:(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
