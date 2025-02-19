import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Innovación.", "Educación.", "Conexión."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-designColor text-lg font-normal">BIENVENIDO</h4>
        <h1 className="text-6xl font-bold text-darkText">
          Hola, somos{" "}
          <span className="text-designColor capitalize">
            Engineering Innovation
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-darkText">
          somos <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-darkText font-bodyFont leading-6 tracking-wide">
          Desarrollamos soluciones digitales para potenciar la gestión
          educativa, promoviendo la eficiencia y la colaboración en las unidades
          educativas.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
