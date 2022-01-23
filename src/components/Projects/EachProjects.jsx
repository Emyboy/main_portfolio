import React from 'react';
import { Link } from 'react-router-dom';

export default function EachProjects() {
  return (
    <div className="col-md-4 col-lg-6">
      <div class="art-a art-blog-card">
        <a href="#." class="art-port-cover">
          <img src="img/blog/2.jpg" alt="blog post" />
        </a>
        <div class="art-post-description">
          <Link to={'/project/2323-23-232'}>
            <h5 class="mb-15">Blog post title</h5>
          </Link>
          <div class="mb-15">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet!
          </div>
          <a href="#." class="art-link art-color-link art-w-chevron">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
