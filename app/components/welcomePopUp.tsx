import React, { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

const WelcomePopup = () => {
  const [hasVisited, _] = useState(localStorage.getItem("visited") === "true");
  const canvasRef = useRef(null);

  const handleClose = () => {
    const popup = document.getElementById("welcome-popup");

    if (popup) {
      popup.remove();
    }
  };

  useEffect(() => {
    const hasVisited = localStorage.getItem("visited");

    const duration = 4 * 1000;
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
            particleCount: 5,
            spread: 360,
            angle: 60,
            startVelocity: 30,
            origin: { x: Math.random(), y: Math.random() - 0.2 },
          });

          if (Date.now() < end) {
            requestAnimationFrame(timestamp);
          }
        })();

        localStorage.setItem("visited", "true");
      }
    }
  }, [hasVisited]);

  return !hasVisited ? (
    <div
      id="welcome-popup"
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
    >
      <canvas
        ref={canvasRef}
        className="absolute left-1/2 top-1/2 z-[100] h-full w-full -translate-x-1/2 -translate-y-1/2"
      ></canvas>
      <div className="relative z-[999999] max-h-fit max-w-[90%] rounded-md bg-800 p-4 md:max-w-md">
        <div className="">
          <h2 className=" mb-4 text-center text-2xl font-semibold uppercase">
            Welcome
          </h2>
          <p className="text-balance">Thank you for visiting my portfolio.</p>
          <p>Please feel free to reach out for comments and questions.</p>
          <button
            onClick={handleClose}
            className="mx-auto mt-6 flex w-full justify-center rounded-full bg-red-600 px-5 py-2 text-200 transition active:-translate-y-2 md:max-w-fit md:py-1"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;
};
export default WelcomePopup;
