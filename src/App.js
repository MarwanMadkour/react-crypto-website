import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.js";
import Featured from "./components/Featured";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Featured></Featured>
      <Signup></Signup>
      <Footer></Footer>
    </>
  );
}

export default App;
