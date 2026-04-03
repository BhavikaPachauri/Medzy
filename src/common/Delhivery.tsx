import React, { useState } from "react";

function Delhivery() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        .delhivery-tab {
          position: fixed;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          z-index: 9999;
          cursor: pointer;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 11px;
          padding: 16px 5px;
          width: 40px;
          min-height: 168px;
          border-radius: 16px 0 0 16px;
          border-left: 2px solid #fff;
          border: none;
          outline: none;

          /* Vivid teal — high contrast on BOTH light & dark backgrounds */
          background: #00C9D4;
          box-shadow:
            -2px 0 0 0 #008C96,
            -4px 0 16px rgba(0, 180, 190, 0.4);

          transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }

        .delhivery-tab:hover {
          background: #00B5BF;
          box-shadow:
            -2px 0 0 0 #007A83,
            -8px 0 28px rgba(0, 180, 190, 0.55);
          transform: translateY(-50%) translateX(-4px);
        }

    

     

        .delhivery-label {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          line-height: 1;
        }

        .delhivery-label--main {
          font-weight: 800;
          color: #fff;
        }

        .delhivery-label--sub {
          font-weight: 500;
          color: #fff;
        }

      
      `}</style>

      <div
        className="delhivery-tab"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="delhivery-accent" />
    
        <span className="delhivery-label delhivery-label--main text-black">Delivery</span>
        <span className="delhivery-label delhivery-label--sub text-black">One Day</span>
        
      </div>
    </>
  );
}

export default Delhivery;