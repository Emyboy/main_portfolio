import React from "react";
import EachRecomendation from "./EachRecomendation";

export default function Recomendations() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="art-section-title">
            <div class="art-title-frame">
              <h4>Recommendations</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <EachRecomendation />
        <EachRecomendation />
        <EachRecomendation />
        <EachRecomendation />
      </div>
    </div>
  );
}
