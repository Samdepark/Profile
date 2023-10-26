import React from "react";
import { NavLink } from "react-router-dom";
import "../PageStyles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="self">
        <p className="int">Hi, My name is,</p>
        <h1 className="name">Samuel Gitau </h1>
        <h5>Fullstack in both Web & Software Development.</h5>
        <p className="des">This is my portforlio.</p>
        <button className="btn">
          <NavLink to="/contact" className="btn">
            Contact
          </NavLink>
        </button>
      </section>
    </div>
  );
};

export default Home;
