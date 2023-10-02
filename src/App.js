import React from "react";
import Style from "./style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
