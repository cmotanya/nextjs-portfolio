import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { date } from "zod";

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

    const duration = 30 * 100;
    const end = Date.now() + duration;

    if (!hasVisited) {
      const canvas = canvasRef.current;
      if (canvas) {
        const myConfetti = confetti.create(canvas, {
          resize: true,
          useWorker: true,
        });

        (function timestamp() {
          myConfetti({
            particleCount: 7,
            spread: 100,
            angle: 60,
            startVelocity: 30,
            origin: { x: 0 },
          });
          myConfetti({
            particleCount: 7,
            spread: 100,
            angle: 120,
            startVelocity: 30,
            origin: { x: 1 },
          });

          if (Date.now() < end) {
            requestAnimationFrame(timestamp);
          }
        })();

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
          className="mx-auto flex w-full justify-center rounded-full bg-red-600 px-4 py-2 text-200 active:scale-105 md:w-fit md:py-1"
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default WelcomePopup;
