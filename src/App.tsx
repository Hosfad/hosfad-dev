import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
// @ts-ignore
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <div className="App overflow-x-hidden">
      <NavBar></NavBar>
	     <Routes location={window.location} key={window.location.pathname}>
          <Route path="*" element={<Home></Home>}/>
          <Route path="/*" element={<NotFound></NotFound>}/>

          </Routes>
		  <Footer></Footer>
     
    </div>
  );
}

export default App;
