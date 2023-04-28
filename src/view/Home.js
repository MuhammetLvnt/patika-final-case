import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
