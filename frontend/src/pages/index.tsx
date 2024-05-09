import React from "react";
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Action from "../components/Action"
import Footer from "../components/Footer"
import Article from "../components/Article"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Action />
      <Article />
      <Footer />
    </>
  );
}
