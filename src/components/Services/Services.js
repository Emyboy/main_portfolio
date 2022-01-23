import React from "react";
import ServicesData from "../../Data/ServicesData";

export default function Services() {
  return (
    <div class="container-fluid mb-5">
      <div class="row">
        <div class="col-lg-12">
          <div class="art-section-title">
            <div class="art-title-frame">
              <h4>My Services</h4>
            </div>
          </div>
        </div>

        {
          ServicesData.map((val, i) => {
            return (
              <div class="col-lg-4 col-md-6" key={`service-${i}`}>
                <div class="art-a art-service-icon-box">
                  <div class="art-service-ib-content">
                    <h5 class="mb-15">{val.name}</h5>
                    <div class="mb-15">
                      {val.description}
                    </div>
                    <div class="art-buttons-frame">
                      <a
                        href="#contact"
                        class="art-link art-color-link art-w-chevron"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }

        
      </div>
    </div>
  );
}
