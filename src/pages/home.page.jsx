import React, { useState } from "react";
import Hero from "../components/hero/hero.component";
import Navbar from "../components/navbar/navbar.component";
import Sidebar from "../components/sidebar/sidebar.component";
import Info from "../components/info/info.component";
import Footer from "../components/footer/footer.component"
import Services from "../components/service-section/service.component";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/info/data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Services />
      <Info {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
