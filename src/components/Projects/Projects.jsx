import React from "react";
import EachProjects from "./EachProjects";

export default function Projects() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div class="col-lg-12">
          <div class="art-section-title">
            <div class="art-title-frame">
              <h4>Newsletter</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <EachProjects />
        <EachProjects />
        <EachProjects />
        <EachProjects />
      </div>
    </div>
  );
}
