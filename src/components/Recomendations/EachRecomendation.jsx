import React from "react";

export default function EachRecomendation() {
  return (
    <div className="col-md-6 col-sm-12">
      <div class="art-a art-testimonial mb-4">
        <div class="testimonial-body">
          <img
            class="art-testimonial-face"
            src="img/testimonials/face-2.jpg"
            alt="face"
          />
          <h5>Paul Trueman</h5>
          <div class="art-el-suptitle mb-15">Template author</div>
          <div class="mb-15">
            Working with Artur has been a pleasure. Better yet - I alerted them
            of a minor issue before going to sleep. The issue was fixed the next
            morning. I couldn't ask for better support. Thank you Artur! This is
            easily a 5 star freelancer.
          </div>
        </div>

        <div class="art-testimonial-footer">
          <div class="art-left-side">
            <ul class="art-star-rate">
              <li>
                <i class="fas fa-star"></i>
              </li>
              <li>
                <i class="fas fa-star"></i>
              </li>
              <li>
                <i class="fas fa-star"></i>
              </li>
              <li>
                <i class="fas fa-star"></i>
              </li>
              <li class="art-empty-item">
                <i class="fas fa-star"></i>
              </li>
            </ul>
          </div>
          <div class="art-right-side"></div>
        </div>
      </div>
    </div>
  );
}
