import React from "react";
import TechStackData from "../../Data/TechStacksData";
import emy from "../../img/emy2.0.jpg";

export default function Sidebar() {
  return (
    <div className="art-info-bar">
      <div className="art-info-bar-frame">
        <div className="art-info-bar-header">
          <div className="art-info-bar-btn">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>

        <div className="art-header">
          <div className="art-avatar">
            <a
              data-fancybox="avatar"
              data-no-swup=""
              href={emy}
              className="art-avatar-curtain"
            >
              <img src={emy} alt="avatar" />
              <i className="fas fa-expand"></i>
            </a>
            <div className="art-lamp-light">
              <div className="art-available-lamp"></div>
            </div>
          </div>
          <h5 className="art-name mb-10">Chukwuemkea Ifeora</h5>
          <div className="art-sm-text">
            A.K.A Emy <br />
            Full Stack Developer{" "}
          </div>
        </div>

        <div
          id="scrollbar2"
          className="art-scroll-frame"
          data-scrollbar="true"
          tabindex="-1"
          style={{ overflow: "scroll", outline: "none" }}
        >
          <div className="scroll-content">
            <div className="art-table p-15-15">
              <ul>
                <li>
                  <h6>Language:</h6>
                  <span>English</span>
                </li>
                <li>
                  <h6>Residence:</h6>
                  <span>Nigeira</span>
                </li>
                <li>
                  <h6>City:</h6>
                  <span>Lagos</span>
                </li>
                <li>
                  <h6>Age:</h6>
                  <span>26</span>
                </li>
                <li>
                  <a
                    href="mailto: chukwuemekaifeora@gmail.com"
                    className="d-flex w-100 justify-content-between align-items-center"
                  >
                    <h6>Email:</h6>
                    <span>click here</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel: +234 8081008437"
                    className="d-flex w-100 justify-content-between align-items-center"
                  >
                    <h6>Phone No:</h6>
                    <span>+234 8081008437</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="art-ls-divider"></div>

            <div className="art-lang-skills p-30-15">
              <div className="art-lang-skills-item">
                <div
                  id="circleprog1"
                  className="art-cirkle-progress"
                  style={{ position: "relative" }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    style={{ display: "block", width: "100%" }}
                  >
                    <path
                      d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                      stroke="#eee"
                      stroke-width="7"
                      fill-opacity="0"
                    ></path>
                    <path
                      d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                      stroke="#555"
                      stroke-width="7"
                      fill-opacity="0"
                      style={{
                        strokeDasharray: "350.273, 292.273",
                        strokeDashoffset: "90.0000",
                      }}
                    ></path>
                  </svg>
                  <div
                    className="progressbar-text"
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
                    90
                  </div>
                </div>
                <h6>React</h6>
              </div>

              <div className="art-lang-skills-item">
                <div
                  id="circleprog2"
                  className="art-cirkle-progress"
                  style={{ position: "relative" }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    style={{ display: "block", width: "100%" }}
                  >
                    <path
                      d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                      stroke="#eee"
                      stroke-width="7"
                      fill-opacity="0"
                    ></path>
                    <path
                      d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                      stroke="#555"
                      stroke-width="7"
                      fill-opacity="0"
                      style={{
                        strokeDasharray: "330.273, 292.273",
                        strokeDashoffset: "50.2273",
                      }}
                    ></path>
                  </svg>
                  <div
                    className="progressbar-text"
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
                    95
                  </div>
                </div>
                <h6>Javascript</h6>
              </div>

              <div className="art-lang-skills-item">
                <div
                  id="circleprog3"
                  className="art-cirkle-progress"
                  style={{ position: "relative" }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    // style={{ display: "block", width: "100%" }}
                  >
                    <path
                      d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                      stroke="#eee"
                      stroke-width="7"
                      fill-opacity="0"
                    ></path>
                    <path
                      d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                      stroke="#555"
                      stroke-width="7"
                      fill-opacity="0"
                      style={{
                        strokeDasharray: "292.273, 292.273",
                        strokeDashoffset: "70.000",
                      }}
                    ></path>
                  </svg>
                  <div
                    className="progressbar-text"
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
                    70
                  </div>
                </div>
                <h6>Node Js</h6>
              </div>
            </div>

            <div className="art-ls-divider"></div>
            <div className="art-hard-skills p-30-15">
              {TechStackData.map((val, i) => {
                return (
                  <div className="art-hard-skills-item">
                    <div className="art-skill-heading">
                      <h6>{val.name}</h6>
                    </div>
                    <div className="art-line-progress">
                      <div id="lineprog1" style={{ position: "relative" }}>
                        <svg
                          viewBox="0 0 100 1.72"
                          preserveAspectRatio="none"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <path
                            d="M 0,0.86 L 100,0.86"
                            stroke="#eee"
                            stroke-width="1.72"
                            fill-opacity="0"
                          ></path>
                          <path
                            d="M 0,0.86 L 100,0.86"
                            stroke="#555"
                            stroke-width="1.72"
                            fill-opacity="0"
                            style={{
                              strokeDasharray: `${val.percent}, ${val.percent}`,
                              strokeDashoffset: "0",
                            }}
                          ></path>
                        </svg>
                        <div
                          className="progressbar-text"
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
                          {val.percent} %
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="art-ls-divider"></div>

            <ul className="art-knowledge-list p-15-0">
              <li>Ant Design</li>
              <li>Next.js, Express, Sequelize</li>
              <li>Dart, Typescript</li>
              <li>Linting, Webpack, Babel</li>
              <li>GIT, CI/CD, Testing</li>
            </ul>

            <div className="art-ls-divider"></div>

            <div className="art-links-frame p-15-15">
              <a
                href="https://firebasestorage.googleapis.com/v0/b/sheruta-prod.appspot.com/o/DONT%20DELETE%2FResume%2FChukwuemeka's%20Resume%20-.pdf?alt=media&token=218f06d0-07ba-4825-982c-cac1c1881799"
                className="art-link"
                download="https://firebasestorage.googleapis.com/v0/b/sheruta-prod.appspot.com/o/DONT%20DELETE%2FResume%2FChukwuemeka's%20Resume%20-.pdf?alt=media&token=218f06d0-07ba-4825-982c-cac1c1881799"
                data-no-swup=""
              >
                Download cv <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
          <div
            className="scrollbar-track scrollbar-track-x"
            style={{ display: "none" }}
          >
            <div
              className="scrollbar-thumb scrollbar-thumb-x"
              style={{
                width: "230px",
                transform: "translate3d(0px, 0px, 0px)",
              }}
            ></div>
          </div>
          <div
            className="scrollbar-track scrollbar-track-y"
            style={{ display: "block" }}
          >
            <div
              className="scrollbar-thumb scrollbar-thumb-y"
              style={{
                height: "831.483px",
                transform: "translate3d(0px, 0px, 0px)",
              }}
            ></div>
          </div>
        </div>

        <div className="art-ls-social">
          <a
            href="https://www.linkedin.com/in/chukwuemeka-ifeora/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          {/* <a href="#." target="_blank">
            <i className="fab fa-dribbble"></i>
          </a>
          <a href="#." target="_blank">
            <i className="fab fa-behance"></i>
          </a> */}
          <a href="https://github.com/emyboy" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com/ifeora_emeka"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
