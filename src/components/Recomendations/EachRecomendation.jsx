import React from "react";

export default function EachRecomendation({data}) {
  return (
    <div className="col-md-6 col-sm-12">
      <div class="art-a art-testimonial mb-4">
        <div class="testimonial-body">
          <img
            class="art-testimonial-face"
            src={data.img}
            alt="face"
          />
          <h5>{data.name}</h5>
          <div class="art-el-suptitle mb-15">{data.occupation}</div>
          <div class="mb-15">
            {data.text}
          </div>
        </div>

        <div class="art-testimonial-footer">
          <div class="art-left-side">
            <ul class="art-star-rate">
              {data.contact}
            </ul>
          </div>
          <div class="art-right-side"></div>
        </div>
      </div>
    </div>
  );
}
