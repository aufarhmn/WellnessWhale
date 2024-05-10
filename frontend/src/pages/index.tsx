import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Action from "../components/Action";
import Footer from "../components/Footer";
import Article from "../components/Article";
import Interactive from "../components/Interactive";

export default function Home() {
  return (
    <>
      <main className="bg-white">
        <Navbar />
        <Hero />
        <Action />
        <Article />
        <Interactive />
        <Footer />
      </main>
    </>
  );
}
