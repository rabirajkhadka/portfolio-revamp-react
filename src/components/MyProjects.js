import React, { useState, useEffect } from "react";
import { Card, Modal } from "react-bootstrap";
import { GrClose } from "react-icons/gr";

import "./MyProject.scss";

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div style={{ float: "right" }}>
          <GrClose onClick={props.onHide} style={{ cursor: "pointer" }} />
        </div>
        <div>
          <Card.Img
            variant="top"
            src={props.modalindex.image}
            style={{ height: "200px", padding: 10 }}
          />
          <Card.Body>
            <Card.Title>{props.modalindex.title}</Card.Title>
            <Card.Text>{props.modalindex.description}</Card.Text>
          </Card.Body>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const MyProjects = () => {
  const [projects, setProjects] = useState({ results: [] });
  const [modalShow, setModalShow] = useState(false);
  const [modalindex, setModalIndex] = useState({});

  useEffect(() => {
    const getProject = async () => {
      const resp = await fetch("http://127.0.0.1:8000/about/api/myproject/");
      const data = await resp.json();
      setProjects(data);
    };
    getProject();
  }, []);

  const clicked = (id) => {
    setModalShow(true);
    setModalIndex(projects.results.filter((info) => info.id === id)[0]);
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "3%",
          width: "100%",
        }}
      >
        <h3>My Projects</h3>
      </div>
      <div className="container">
        <div className="project-main">
          {projects.results.map((p) => {
            return (
              <Card
                style={{ width: "18rem" }}
                key={p.id}
                className="project-card"
              >
                <Card.Img
                  variant="top"
                  src={p.image}
                  style={{ height: "200px", padding: 10 }}
                  onClick={() => clicked(p.id)}
                />
                <Card.Body>
                  <Card.Title onClick={() => clicked(p.id)}>
                    {p.title}
                  </Card.Title>
                  <Card.Text onClick={() => clicked(p.id)}>
                    {p.description}
                  </Card.Text>
                </Card.Body>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  modalindex={modalindex}
                />
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
