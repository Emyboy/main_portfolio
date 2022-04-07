import React from "react";
import WorkData from "../../Data/WorkData";
import EachWorkHistory from "./EachWorkHistory";

export default function History() {
  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="art-section-title">
            <div className="art-title-frame">
              <h4>Education</h4>
            </div>
          </div>

          <div className="art-timeline art-gallery" id="history">
            <div className="art-timeline-item">
              <div className="art-timeline-mark-light"></div>
              <div className="art-timeline-mark"></div>

              <div className="art-a art-timeline-content">
                <div className="art-card-header">
                  <div className="art-left-side">
                    <h5>National Open University of Nigeria</h5>
                    <div className="art-el-suptitle mb-15">Lagos, Nigeria</div>
                  </div>
                  <div className="art-right-side">
                    <span className="art-date">Till date</span>
                  </div>
                </div>

                <p>
                  Bachelor's degree in Computer Science
                </p>
                {/* <a
                  data-fancybox="diplome"
                  data-no-swup=""
                  href="files/certificate.jpg"
                  className="art-link art-color-link art-w-chevron"
                >
                  Diplome
                </a> */}
              </div>
            </div>

            

            
          </div>
        </div>
        <div className="col-lg-6">
          <div className="art-section-title">
            <div className="art-title-frame">
              <h4>Work History</h4>
            </div>
          </div>

          <div className="art-timeline">
            
            {
              WorkData.map((val,i) => {
                return <EachWorkHistory key={`work-${i}`} data={val} />
              })
            }

            
          </div>
        </div>
      </div>
    </div>
  );
}


