import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Action from "../components/Action";
import Footer from "../components/Footer";
import Article from "../components/Article";
import Interactive from "../components/Interactive";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("mood");
    localStorage.removeItem("expertSystem");
    if (!localStorage.getItem("authToken")) {
      toast.error("Please login to get access!");
      setTimeout(() => {
        router.push("/auth/signin");
      }, 3000); 
    }
  }
  , []);

  return (
    <>
      <main className="bg-white">
        <Navbar />
        <ToastContainer />
        <Hero />
        <Action />
        <Article />
        <Interactive />
        <Footer />
      </main>
    </>
  );
}
