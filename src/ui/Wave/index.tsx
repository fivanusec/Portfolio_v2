import React from "react";
import styles from "../../styles/Navbar.module.css";

export const Wave: React.FC<{}> = ({}) => {
  return (
    <>
      <style jsx>{`
        .wave-container {
          color: #fff;
          text-align: center;
        }
        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }
        @keyframes animateWave {
          0% {
            transform: scale(1, 0);
          }
          100% {
            transform: scale(1, 1);
          }
        }
        .wave-container > svg {
          transform-origin: top;
          animation: animateWave 1000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>
      <div className="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#145494"
            fillOpacity="1"
            d="M0,64L48,64C96,64,192,64,288,90.7C384,117,480,171,576,176C672,181,768,139,864,133.3C960,128,1056,160,1152,144C1248,128,1344,64,1392,32L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};
