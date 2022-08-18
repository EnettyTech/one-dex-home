import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import GetStarted from "../components/Sections/GetStarted";
import Screenshots from "../components/Sections/Screenshots";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <GetStarted />
      <Screenshots />
      <Contact />
      <Footer />
    </>
  );
}
