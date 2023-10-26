import React from "react";
import { NavLink } from "react-router-dom";
import "../PageStyles/contact.css";

const Contacts = () => {
  return (
    <div className="contacts">
      <form className="msg">
        <input type="name" name="name" className="inpt" placeholder="Name" />
        <input type="name" name="name" className="inpt" placeholder="Email" />
        <input
          type="name"
          name="message"
          className="inpt"
          placeholder="Message"
        />
        <button className="button">Submit</button>
      </form>
      <div className="social">
        <NavLink to="" className="socials" target="blank">
          Facebook
        </NavLink>
        <NavLink to="" className="socials" target="blank">
          Twitter
        </NavLink>
        <NavLink to="" className="socials" target="blank">
          Linked-In
        </NavLink>
      </div>
      <input
        type="email"
        name="email"
        placeholder="Send me an Email"
        className=" inpt Mail"
      />
    </div>
  );
};

export default Contacts;
