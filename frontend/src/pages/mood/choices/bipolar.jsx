import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function Bipolar() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    "Bagaimana perasaan Anda hari ini? (Skala 1-10)": "",
    "Apakah Anda mengalami perubahan suasana hati yang tajam atau cepat?": "",
    "Apakah Anda merasa sangat bersemangat atau hiperaktif (mania)?": "",
    "Apakah Anda merasa sedih atau kehilangan minat (depresi)?": "",
    "Apakah Anda mengalami kesulitan tidur atau tidur terlalu banyak?": "",
    "Apakah Anda memiliki energi yang berlebihan atau merasa kelelahan secara berlebihan?":
      "",
    "Apakah Anda mengalami peningkatan dalam aktivitas atau perilaku impulsif?":
      "",
    "Apakah Anda mengalami perubahan drastis dalam berpikir atau berbicara?":
      "",
    "Apakah Anda merasa sulit untuk berkonsentrasi atau membuat keputusan?": "",
    "Apakah Anda mengalami perubahan dalam berat badan atau pola makan?": "",
    "Apakah Anda merasa kehilangan minat atau kesenangan dalam aktivitas yang biasanya Anda nikmati?":
      "",
    "Apakah Anda merasa sulit untuk menjaga hubungan interpersonal yang stabil?":
      ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleYesNoClick = (question, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [question]: value
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const unansweredQuestions = Object.keys(formData).filter(
      (key) => formData[key] === ""
    );

    if (unansweredQuestions.length > 0) {
      setErrorMessage("Harap jawab semua pertanyaan sebelum mengirimkan.");
      return;
    }

    setErrorMessage("");
    console.log(formData);
    try {
      const authToken = localStorage.getItem('authToken');
      
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/expert-systems/bipolar",
        formData,
        {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
        }
      );
      if (response.data.status == 0) {
        toast.info(
          "Anda tidak terdeteksi mengalami gejala bipolar! Berikut artikel yang mungkin membantu!"
        );
        setTimeout(() => {
          router.push("/article");
        }, 2000);
      } else {
        localStorage.setItem("expertSystem", "Bipolar");
        router.push("/mood/result");
      }
    } catch (error) {
      toast.error("Ada kesalahan dalam mengirimkan data. Silakan coba lagi.");
    }
  };

  const questions = [
    "Apakah Anda mengalami perubahan suasana hati yang tajam atau cepat?",
    "Apakah Anda merasa sangat bersemangat atau hiperaktif (mania)?",
    "Apakah Anda merasa sedih atau kehilangan minat (depresi)?",
    "Apakah Anda mengalami kesulitan tidur atau tidur terlalu banyak?",
    "Apakah Anda memiliki energi yang berlebihan atau merasa kelelahan secara berlebihan?",
    "Apakah Anda mengalami peningkatan dalam aktivitas atau perilaku impulsif?",
    "Apakah Anda mengalami perubahan drastis dalam berpikir atau berbicara?",
    "Apakah Anda merasa sulit untuk berkonsentrasi atau membuat keputusan?",
    "Apakah Anda mengalami perubahan dalam berat badan atau pola makan?",
    "Apakah Anda merasa kehilangan minat atau kesenangan dalam aktivitas yang biasanya Anda nikmati?",
    "Apakah Anda merasa sulit untuk menjaga hubungan interpersonal yang stabil?"
  ];

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="w-full min-h-screen bg-green-100 flex justify-center items-center font-['Poppins'] p-4 pt-32">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h1 className="text-xl font-bold mb-4 text-center">
            Ceritakan perasaan Anda
          </h1>
          <p className="text-center mb-6">
            Dapatkan rekomendasi tindakan untuk memperbaiki mood anda
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="Bagaimana perasaan Anda hari ini? (Skala 1-10)"
                className="block text-sm font-medium mb-2"
              >
                Bagaimana perasaan Anda hari ini? (Skala 1-10)
              </label>
              <input
                type="number"
                id="Bagaimana perasaan Anda hari ini? (Skala 1-10)"
                value={
                  formData["Bagaimana perasaan Anda hari ini? (Skala 1-10)"]
                }
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="Masukkan nilai antara 1-10"
                min="1"
                max="10"
                required
              />
            </div>
            {questions.map((question, index) => (
              <div className="mb-4" key={index}>
                <label className="block text-sm font-medium mb-2">
                  {question}
                </label>
                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleYesNoClick(question, "Yes")}
                    className={`p-4 rounded ${
                      formData[question] === "Yes"
                        ? "bg-green-400 text-white"
                        : "bg-gray-300 text-black"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => handleYesNoClick(question, "No")}
                    className={`p-4 rounded ${
                      formData[question] === "No"
                        ? "bg-green-400 text-white"
                        : "bg-gray-300 text-black"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>
            ))}
            {errorMessage && (
              <p className="text-red-500 text-center mb-4">{errorMessage}</p>
            )}
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
