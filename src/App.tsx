import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Gopher from "./Components/Gopher";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Empresa from "./Pages/Empresa";
// @ts-ignore
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Projects from "./Pages/Projects/Projects";
function App() {
  return (
    <div className="overflow-x-hidden App">
      <NavBar></NavBar>
      <Routes location={window.location} key={window.location.pathname}>
        <Route path="/" element={<Home></Home>} />
        <Route path="/projects" element={<Projects></Projects>} />
        <Route path="/empresa" element={<Empresa></Empresa>} />
        <Route path="/*" element={<NotFound></NotFound>} />
      </Routes>
      <div className="fixed z-10 w-20 bottom-2 left-2 md:w-32 h-42">
        <Gopher></Gopher>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
