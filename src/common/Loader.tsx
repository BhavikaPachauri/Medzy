import React from "react";

const Loader: React.FC = () => {
  return (
    <>
      <div className="loader-wrapper">
        <div className="loader">
          <div className="loading-text">
            Loading
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </div>

          <div className="loading-bar-background">
            <div className="loading-bar">
              <div className="white-bars-container">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div className="white-bar" key={i}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS inside component */}
      <style>{`
        .loader-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .loader {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .loading-text {
          color: #fff;
          font-size: clamp(14px, 2vw, 18px);
          font-weight: 600;
          margin-bottom: 10px;
        }

        .dot {
          margin-left: 3px;
          animation: blink 1.5s infinite;
        }

        .dot:nth-child(2) {
          animation-delay: 0.3s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.6s;
        }

        .loading-bar-background {
          --height: clamp(10px, 1vw, 20px);
          width: clamp(120px, 30vw, 230px);
          height: var(--height);
          padding: 5px;
          display: flex;
          align-items: center;
          background-color: #212121;
          box-shadow: #0c0c0c -2px 2px 4px inset;
          border-radius: calc(var(--height) / 2);
        }

        .loading-bar {
          width: 0%;
          height: 100%;
          position: relative;
          overflow: hidden;
          border-radius: inherit;
          background: linear-gradient(
            0deg,
            rgb(15, 222, 205) 0%,
            rgb(79, 249, 206) 100%
          );
          animation: loading 4s ease-out infinite;
        }

        .white-bars-container {
          position: absolute;
          display: flex;
          gap: clamp(10px, 2vw, 18px);
        }

        .white-bar {
          width: clamp(6px, 1vw, 10px);
          height: clamp(30px, 5vw, 45px);
          opacity: 0.3;
          transform: rotate(45deg);
          background: linear-gradient(
            -45deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 70%
          );
        }

        @keyframes loading {
          0% { width: 0; }
          80% { width: 100%; }
          100% { width: 100%; }
        }

        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Loader;