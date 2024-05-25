import React, { useState } from "react";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function MoodLanding() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    mood: ""
  });
  const [error, setError] = useState("");

  const moods = ["Happy", "Sad", "Stressed", "Relaxed", "Angry", "Excited"];

  const handleMoodClick = (mood) => {
    setFormData((prevData) => ({
      ...prevData,
      mood: mood
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.mood) {
      setError("Please select a mood before submitting.");
      return;
    }
    if (formData.mood === "Happy") {
      toast.info("You are happy today! Here are some articles for you.");
      setTimeout(() => {
        router.push("/article");
      }, 3000);
      // DEPRESSION
    } else if (formData.mood === "Sad") {
      router.push("/mood/choices/depression");
      // ANXIETY
    } else if (formData.mood === "Stressed") {
      router.push("/mood/choices/anxiety");
    } else if (formData.mood === "Relaxed") {
      toast.info("You are relaxed today! Here are some articles for you.");
      setTimeout(() => {
        router.push("/article");
      }, 3000);
      // BIPOLAR
    } else if (formData.mood === "Angry") {
      router.push("/mood/choices/bipolar");
    } else if (formData.mood === "Excited") {
      toast.info("You are excited today! Here are some articles for you.");
      setTimeout(() => {
        router.push("/article");
      }, 3000);
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="w-full min-h-screen bg-green-100 flex justify-center items-center font-['Poppins'] p-4 pt-32">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h1 className="text-xl font-bold mb-4 text-center">
            Apa mood anda hari ini?
          </h1>
          <p className="text-center mb-6">
            Dapatkan analisis mendalam mengenai mood Anda
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-wrap justify-center gap-2">
              {moods.map((mood) => (
                <button
                  key={mood}
                  type="button"
                  onClick={() => handleMoodClick(mood)}
                  className={`p-4 rounded ${
                    formData.mood === mood
                      ? "bg-green-400 text-white"
                      : "bg-gray-300 text-black"
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full p-4 bg-green-400 text-white font-bold rounded"
            >
              Simpan
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
