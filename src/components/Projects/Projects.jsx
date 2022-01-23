import React from "react";
import EachProjects from "./EachProjects";
import projectData from "../../Data/ProjectData";

export default function Projects() {
  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div class="col-lg-12">
          <div class="art-section-title">
            <div class="art-title-frame">
              <h4>Personal Projects</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {projectData.map((val, i) => {
          return <EachProjects data={val} key={`project-${i}`} />;
        })}
      </div>
    </div>
  );
}
