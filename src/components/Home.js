import React, { useState, useEffect } from "react";

import homeimage from "../image/rrkwithdrone.jpg";
import "./Home.css";

const Home = () => {
  const [about, setAbout] = useState({ results: [] });

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch("http://127.0.0.1:8000/about/api/about/");
      const data = await resp.json();

      setAbout(data);
    };
    getData();
  }, []);

  return (
    <div className="container">
      <div>
        <img src={homeimage} alt="homephoto" className="homeImage" />
      </div>
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        About Me
      </h3>
      <div>
        {about.results.map((item) => {
          return (
            <div key={item.id} className="description">
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
