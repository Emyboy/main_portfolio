import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import History from "../../components/History/History";
import Projects from "../../components/Projects/Projects";
import Recomendations from "../../components/Recomendations/Recomendations";
import Services from "../../components/Services/Services";
import bg from "../../img/bg.jpg";
import Jumbo from "./Jumbo";

export default function Home() {
  return (
    <div>
      <div className="art-top-bg" style={{ backgroundImage: `url(${bg})` }}>
        <div className="art-top-bg-overlay"></div>
      </div>
      <div className="transition-fade" id="swup" data-swup="0">
        <div
          id="scrollbar"
          className="art-scroll-frame"
          data-scrollbar="true"
          tabindex="-1"
          style={{ overflow: "scroll", outline: "none" }}
        >
          <div
            className="scroll-content"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            <Jumbo />
            <div className="container-fluid">
              <div className="row p-30-0">
                <div className="col-md-3 col-6">
                  <div className="art-counter-frame" style={{ opacity: "1" }}>
                    <div className="art-counter-box">
                      <span className="art-counter" style={{ opacity: "1" }}>
                        10
                      </span>
                      <span className="art-counter-plus">+</span>
                    </div>
                    <h6>Years Experience</h6>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="art-counter-frame" style={{ opacity: "1" }}>
                    <div className="art-counter-box">
                      <span className="art-counter" style={{ opacity: "1" }}>
                        143
                      </span>
                    </div>
                    <h6>Completed Projects</h6>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="art-counter-frame" style={{ opacity: "1" }}>
                    <div className="art-counter-box">
                      <span className="art-counter" style={{ opacity: "1" }}>
                        114
                      </span>
                    </div>
                    <h6>Happy Customers</h6>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="art-counter-frame" style={{ opacity: "1" }}>
                    <div className="art-counter-box">
                      <span className="art-counter" style={{ opacity: "1" }}>
                        20
                      </span>
                      <span className="art-counter-plus">+</span>
                    </div>
                    <h6>Honors and Awards</h6>
                  </div>
                </div>
              </div>
            </div>
            <Services />
            <Recomendations />
            <History />
            <Projects />
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  );
}
