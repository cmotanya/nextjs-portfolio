import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const WelcomePopup = () => {
  const canvasRef = useRef(null);
  const handleClose = () => {
    const popup = document.getElementById("welcome-popup");
    if (popup) {
      popup.style.display = "none";
    }
  };

  useEffect(() => {
    const hasVisited = localStorage.getItem("visited");

    if (!hasVisited) {
      const canvas = canvasRef.current;
      if (canvas) {
        const myConfetti = confetti.create(canvas, {
          resize: true,
          useWorker: true,
        });
        myConfetti({ particleCount: 100, spread: 100 });
        localStorage.setItem("visited", "true");
      }
    }
  });
  return (
    <div
      id="welcome-popup"
      className="fixed inset-0 z-50 m-auto max-h-fit max-w-[90%] rounded-md bg-800 p-4 md:max-w-md"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      <div className="space-y-5">
        <h2 className="text-2xl font-semibold uppercase">Welcome</h2>
        <p>
          Thank you for visiting my portfolio. I&apos;m delighted to have you
          here!
        </p>
        <button
          onClick={() => handleClose()}
          className="rounded-full bg-700 px-3 py-2 justify-center w-full md:w-fit flex mx-auto"
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default WelcomePopup;
