import React from "react";
import { Link } from "react-router-dom";

export default function EachProjects({ data }) {
  return (
    <div className="col-md-4 col-lg-4">
      <div className="art-a art-blog-card">
        <a href="#." className="art-port-cover">
          <img src={data.img} alt="blog post" />
        </a>
        <div className="art-post-description">
          <Link to={`/project/${data?.slug}`}>
            <h5 className="mb-15">{data.title}</h5>
          </Link>
          <div className="mb-15">{data.description}</div>
          <Link
            to={`/project/${data?.slug}`}
            className="art-link art-color-link art-w-chevron"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
