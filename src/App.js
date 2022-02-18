import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./components/Home";

import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/myskills" element={<MySkills />}></Route>
          <Route path="/myprojects" element={<MyProjects />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
