import React from "react";
import "../PageStyles/abouts.css";
const about = () => {
  return (
    <div className="about">
      <h1 className="abt">About me</h1>
      <p>
        i'm <strong>Samuel Gitau</strong>,{" "}
        <strong>Full stack developer.</strong>
      </p>
      <section className="def">
        I am a full stack developer with skills on web development and design. I
        can work in both Front and back development.For Front-end development i
        have the knowledge of React Frameowrk. For the Back-end i can work with
        Node Js and django.I create fully functional dynamic websites.
      </section>
      <hr />
      <div className="skills">
        <h2>skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Django</li>
          <li>Python</li>
          <li>Node Js</li>
          <li>Javascript</li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default about;
