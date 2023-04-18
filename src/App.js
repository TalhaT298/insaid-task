import React from "react";
import Food from "./components/Food/Food";
import Footer from "./components/Footer/Footer";
import HeadlineCard from "./components/HeadLineCard/HeadlineCard";
import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Last from "./components/Last/Last";
import Tastimonial from "./components/Tastimonial/Tastimonial";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCard />
      <Food />
      <Footer />
      <Tastimonial/>
      <Last/>
    </div>
  );
}

export default App;
