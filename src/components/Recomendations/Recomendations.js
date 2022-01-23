import React from "react";
import RecommendationData from "../../Data/RecommendationData";
import EachRecomendation from "./EachRecomendation";

export default function Recomendations() {
  return (
    <div class="container-fluid mb-5">
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
        {RecommendationData.map((val, i) => {
          return <EachRecomendation data={val} key={`rec-${i}`} />;
        })}
      </div>
    </div>
  );
}
