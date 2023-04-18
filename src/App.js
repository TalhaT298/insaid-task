import React from "react";
import Food from "./components/Food/Food";
import Footer from "./components/Footer/Footer";
import HeadlineCard from "./components/HeadLineCard/HeadlineCard";
import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Last from "./components/Last/Last";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCard />
      <Food />
      <Footer />
      <Last/>
    </div>
  );
}

export default App;
