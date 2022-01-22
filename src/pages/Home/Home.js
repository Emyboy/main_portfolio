import React from "react";
import bg from "../../img/bg.jpg";
import Jumbo from "./Jumbo";

export default function Home() {
  return (
    <div>
      <div class="art-top-bg" style={{ backgroundImage: `url(${bg})` }}>
        <div class="art-top-bg-overlay"></div>
      </div>
      <div class="transition-fade" id="swup" data-swup="0">
        <div
          id="scrollbar"
          class="art-scroll-frame"
          data-scrollbar="true"
          tabindex="-1"
          style={{ overflow: "hidden", outline: "none" }}
        >
          <div
            class="scroll-content"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            <Jumbo />
            <div class="container-fluid">
              <div class="row p-30-0">
                <div class="col-md-3 col-6">
                  <div class="art-counter-frame" style={{ opacity: "1" }}>
                    <div class="art-counter-box">
                      <span class="art-counter" style={{ opacity: "1" }}>
                        10
                      </span>
                      <span class="art-counter-plus">+</span>
                    </div>
                    <h6>Years Experience</h6>
                  </div>
                </div>

                <div class="col-md-3 col-6">
                  <div class="art-counter-frame" style={{ opacity: "1" }}>
                    <div class="art-counter-box">
                      <span class="art-counter" style={{ opacity: "1" }}>
                        143
                      </span>
                    </div>
                    <h6>Completed Projects</h6>
                  </div>
                </div>

                <div class="col-md-3 col-6">
                  <div class="art-counter-frame" style={{ opacity: "1" }}>
                    <div class="art-counter-box">
                      <span class="art-counter" style={{ opacity: "1" }}>
                        114
                      </span>
                    </div>
                    <h6>Happy Customers</h6>
                  </div>
                </div>

                <div class="col-md-3 col-6">
                  <div class="art-counter-frame" style={{ opacity: "1" }}>
                    <div class="art-counter-box">
                      <span class="art-counter" style={{ opacity: "1" }}>
                        20
                      </span>
                      <span class="art-counter-plus">+</span>
                    </div>
                    <h6>Honors and Awards</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
