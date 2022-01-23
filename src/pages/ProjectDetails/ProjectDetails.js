import React from "react";
import { Link } from "react-router-dom";

export default function ProjectDetails() {
  return (
    <div
      id="scrollbar"
      className="art-scroll-frame"
      data-scrollbar="true"
      tabindex="-1"
      style={{ overflow: "scroll", outline: "none" }}
    >
      <div className="container-fluid">
        <div className="row p-30-0">
          <div class="col-lg-12">
            <div class="art-section-title">
              <div class="art-title-frame">
                <Link to="/" className="art-link art-color-link ">
                  {"< "} Back
                </Link>
              </div>
              <div class="art-right-frame">
                <div class="art-project-category">Ui Design, Graphic</div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="art-a art-project-cover">
              <a
                data-fancybox="gallery"
                href="img/blog/2.jpg"
                class="art-portfolio-item-frame art-horizontal"
              >
                <img src="img/blog/2.jpg" alt="item" />
                <span class="art-item-hover">
                  <i class="fas fa-expand"></i>
                </span>
              </a>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="art-a art-card">
              <p class="art-lg-text art-white">
                <i>
                  Consectetur adipisicing elit. Magni debitis nemo, minus aut
                  tempora impedit quis quam omnis, odit saepe ipsa sunt magnam
                  culpa quisquam iusto consectetur necessitatibus. Tenetur,
                  eligendi!
                </i>
              </p>

              <p>
                Vero praesentium voluptatibus repellendus, delectus harum.
                Necessitatibus temporibus, veritatis sapiente laudantium eius
                rem dolore voluptas porro assumenda quam ea earum ad dolor
                dolores ut ipsam optio! Numquam dolore quidem sequi eum placeat
                voluptatum, assumenda et culpa iure nemo vero animi mollitia
                facere fuga sit debitis doloremque quo tempore nesciunt
                voluptates cum. Est, labore pariatur cupiditate non alias
                officia ad nihil animi itaque soluta quo perferendis vero libero
                ex. Iste ipsam eaque veniam facilis architecto unde, quibusdam
                accusamus culpa cumque delectus deserunt nemo saepe minima.
              </p>
              <ul class="art-custom-list">
                <li>Doloribus recusandae</li>
                <li>Alias officia ad nihil </li>
                <li>Culpa repellat</li>
                <li>Officiis deleniti</li>
              </ul>
              <p>
                Doloribus recusandae vel odio laboriosam, officia, neque ad.
                Eius porro, quas adipisci mollitia similique possimus ex odio
                eum harum eos ut optio architecto eveniet corporis nostrum
                beatae impedit, iste officia tempora sapiente aut, distinctio
                numquam inventore et! Ducimus quasi ullam saepe aliquid aut
                minus molestiae nam. Dolor consequuntur cum consectetur ducimus
                obcaecati perspiciatis harum quae atque, architecto aut
                voluptatibus quaerat nisi, nobis asperiores.
              </p>

              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                officiis aliquam, placeat quis voluptatum ad. Eum, alias quo
                fuga sed?
              </blockquote>

              <p>
                Est nesciunt dolorum asperiores sint mollitia quod, nostrum eos
                maxime illo eveniet ducimus labore amet voluptatum laborum, ex
                ut similique omnis ipsum. Totam tempore praesentium assumenda
                ducimus porro ullam quasi, expedita sit esse alias quisquam!
                Asperiores at suscipit officiis deleniti soluta fugit quidem
                illo fuga, adipisci maiores. Nesciunt dolor, minus ex tenetur
                necessitatibus et id minima, vitae sit a, assumenda, iste
                suscipit facere. Voluptatibus animi, laboriosam qui officiis
                voluptatum. Voluptates quibusdam numquam distinctio fuga.
              </p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="art-a art-card">
              <div class="art-table p-15-15">
                <ul>
                  <li>
                    <h6>Date:</h6>
                    <span>24.12.2019</span>
                  </li>
                  <li>
                    <h6>Author:</h6>
                    <span>Artur Carter</span>
                  </li>
                  <li>
                    <h6>Category:</h6>
                    <span>Product design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
