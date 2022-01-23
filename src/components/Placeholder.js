import React, { useEffect, useState } from "react";
import logo from "../img/logo.png";

export default function Placeholder() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 3000);
  }, []);

  if(!show){
    return null
  }

  return (
    <div class="art-preloader" style={{ opacity: show ?"100": "0" }}>
      <div class="art-preloader-content text-center" style={{ opacity: "100" }}>
        <img
          src={logo}
          alt="logo"
          width={"60"}
          className="mb-3"
          style={{ borderRadius: "10px" }}
        />
        <h4>Chukwuemeka S. Ifeora</h4>
        <div
          id="preloader"
          class="art-preloader-load"
          style={{ position: "relative" }}
        >
          {/* <svg
            viewBox="0 0 100 1.7"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%" }}
          >
            <path
              d="M 0,0.85 L 100,0.85"
              stroke="#eee"
              stroke-width="1.7"
              fill-opacity="0"
            ></path>
            <path
              d="M 0,0.85 L 100,0.85"
              stroke="#555"
              stroke-width="1.7"
              fill-opacity="0"
              style={{ strokeDasharray: "100, 100", strokeDashoffset: "0" }}
            ></path>
          </svg> */}
          <div
            class="progressbar-text"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              padding: "0px",
              margin: "0px",
              transform: "translate(-50%, -50%)",
              color: "rgb(85, 85, 85)",
            }}
          >
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
}
