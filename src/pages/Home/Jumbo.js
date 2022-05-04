import React from 'react';
import bg from "../../img/bg.jpg";
import emy from "../../img/emy.png";
import TypeWriterEffect from "react-typewriter-effect";

export default function Jumbo() {
  return (
    <div className="container-fluid">
      <div className="row p-60-0 p-lg-30-0 p-md-15-0 pt-5">
        <div className="col-lg-12">
          <div
            className="art-a art-banner"
            style={{ backgroundImage: `url(${bg})` }}
          >
            {/* <div className="art-banner-back"></div> */}
            <div className="art-banner-dec"></div>
            <div className="art-banner-overlay">
              <div className="art-banner-title">
                <h1 className="mb-15">
                  Discover my Amazing <br />
                  Tech Space!
                </h1>
                <div className="art-lg-text art-code mb-25 d-flex">
                  &lt;<i>code</i>&gt;{" "}
                  <h1
                    style={{
                      // fontFamily: "Red Hat Display",
                      // fontWeight: 500,
                      fontFamily: "Courier Prime",
                      fontSize: "20px",
                      color: "#ffff",
                      paddingLeft: "10px",
                    }}
                  >
                    I
                  </h1>{" "}
                  <span
                    className="txt-rotate"
                    data-period="2000"
                    data-rotate='[ "web interfaces.", "ios and android applications.", "design mocups.", "automation tools." ]'
                  >
                    <span>
                      {" "}
                      <TypeWriterEffect
                        textStyle={{
                          // fontFamily: "Red Hat Display",
                          // fontWeight: 500,
                          fontFamily: "Courier Prime",
                          fontSize: "20px",
                          color: "#ffff",
                          paddingLeft: "10px",
                        }}
                        startDelay={2000}
                        cursorColor="#ffff"
                        multiText={[
                          "build SEO friendly web applications",
                          "write scalable and secure code.",
                          "build dynamic websites",
                          "design modern user interfaces",
                          "build and manage APIs",
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={30}
                      />
                    </span>
                    {/* <span className="wrap">web applications. </span> */}
                  </span>
                  &lt;/<i>code</i>&gt;
                </div>
                <div className="art-buttons-frame">
                  <a href="#projects" className="art-btn art-btn-md">
                    <span>Explore now</span>
                  </a>
                  <a
                    href="#contact"
                    className="art-link art-white-link art-w-chevron"
                  >
                    Hire me
                  </a>
                </div>
              </div>
              {/* <img
                src={emy}
                className="art-banner-photo"
                alt="Your Name"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
