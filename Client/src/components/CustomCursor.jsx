import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorStyle, setCursorStyle] = useState({
    left: "0px",
    top: "0px",
    transform: "scale(1)",
    backgroundColor: "rgba(255, 255, 255, 0.0)",
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorStyle((prevStyle) => ({
        ...prevStyle,
        left: `${e.pageX}px`,
        top: `${e.pageY}px`,
      }));
    };

    const handleMouseEnter = () => {
      setCursorStyle((prevStyle) => ({
        ...prevStyle,
        transform: "scale(2)",
        borderColor: "black",

      }));
    };

    const handleMouseLeave = () => {
      setCursorStyle((prevStyle) => ({
        ...prevStyle,
        transform: "scale(1)",
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        borderColor: "white",
      }));
    };

    document.addEventListener("mousemove", handleMouseMove);

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="cursor-circle"
      style={{
        position: "absolute",
        left: cursorStyle.left,
        top: cursorStyle.top,
        transform: cursorStyle.transform,
        backgroundColor: cursorStyle.backgroundColor,
        borderRadius: "50%",
        width: "20px", // Задайте ширину курсора
        height: "20px", // Задайте высоту курсора
        pointerEvents: "none",
        border: `2px solid ${cursorStyle.borderColor}`
      }}
    />
  );
};

export default CustomCursor;
