import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Gopher from "./Components/Gopher";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
// @ts-ignore
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <div className="overflow-x-hidden App">
      <NavBar></NavBar>
	     <Routes location={window.location} key={window.location.pathname}>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/*" element={<NotFound></NotFound>}/>

          </Routes>
          <div className="fixed z-10 w-20 bottom-2 left-2 md:w-32 h-42">
              <Gopher></Gopher>
            </div>
		  <Footer></Footer>
     
    </div>
  );
}

export default App;
