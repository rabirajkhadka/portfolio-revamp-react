import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import "./Myskills.scss";

const MySkills = () => {
  const [skills, setSkills] = useState({ results: [] });

  const [resume, setResume] = useState({ results: [] });
  useEffect(() => {
    const getData = async () => {
      const resp = await fetch("http://127.0.0.1:8000/about/api/myskills/");
      const data = await resp.json();
      setSkills(data);
    };

    const getResume = async () => {
      const resp = await fetch("http://127.0.0.1:8000/about/api/resume/");
      const data = await resp.json();
      setResume(data);
    };
    getData();
    getResume();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10%",
          width: "100%",
        }}
      >
        <h3>My Skills</h3>
      </div>
      <div className="container">
        {skills.results.map((skill) => {
          return (
            <div className="skills" key={skill.id}>
              <div
                style={{
                  width: skill.skill_rate + "%",
                  backgroundColor: "rgba(24, 35, 43, 80%)",
                  margin: 0,

                  height: "100%",
                  padding: "10px",
                  borderRadius: 7,
                }}
              >
                {skill.skill_name}
              </div>
            </div>
          );
        })}

        <div
          style={{
            marginTop: "100px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {resume.results.map((r) => {
            return (
              <Button
                style={{
                  backgroundColor: "#444422",
                  height: "45px",
                }}
                key={r.id}
              >
                <a
                  href={r.file}
                  download
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Download My CV
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
