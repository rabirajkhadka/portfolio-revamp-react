import React from "react";

import { AiFillHome } from "react-icons/ai";

import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";

import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import mainlogo from "./image/sidebarimage.png";

const NavBar = () => {
  return (
    <div
      style={{
        width: "230px",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={mainlogo} alt="imge" style={{ width: "100%" }} />

        <h4 style={{ marginTop: "10px" }}>
          Rabiraj <br></br>
          Khadka
        </h4>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "rgb(129, 128, 126)" }}>
            R&D Engineer w/ Masters in
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
            Psychology
          </p>
        </div>

        <ul style={{ listStyleType: "none" }}>
          <li className="list" activeclassname="active">
            <NavLink to="/" className="link" activeclassname="active">
              <AiFillHome /> HOME
            </NavLink>
          </li>

          <li className="list">
            <NavLink to="/myskills" className="link">
              <GiSkills /> MY SKILLS
            </NavLink>
          </li>

          <li className="list">
            <NavLink to="/myprojects" className="link">
              <GrProjects />
              MY PROJECTS
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
