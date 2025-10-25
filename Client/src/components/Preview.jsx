import React from "react";
import video from "../../public/assets/preview22.mp4";
import logo from "../../public/assets/logo2.png";
import { motion } from "framer-motion";

export default function Preview() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("process");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="preview" className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={video}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black" />
      <div className="relative z-20 flex h-screen flex-col justify-center items-center">
        <motion.img
          initial={{ opacity: 0, y: -50 }} // Поднимаем логотип выше
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={logo}
          alt="Restaura"
          className="w-full p-4 mb-8" // Задаем ширину и отступ снизу
        />
        <motion.button
        
          onClick={scrollToContact} // Обработчик события
          className="p-6 border-2 cursor-pointer border-white rounded-full backdrop-blur-lg shadow-lg transition duration-200 hover:bg-white hover:text-black lg:m-2 lg:max-w-xs max-w-xs"
        >
          Приобрести номер
        </motion.button>
      </div>
    </section>
  );
}
