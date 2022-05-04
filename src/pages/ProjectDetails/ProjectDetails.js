import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProjectDetailsData from "../../Data/ProjectDetailsData";
import { BsGlobe2 } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

export default function ProjectDetails() {
  const { slug } = useParams();
  const [data, setData] = useState(ProjectDetailsData[slug]);

  console.log("THE SLUG --", slug);

  useEffect(() => {
    document.querySelector("#first_paragraph").innerHTML +=
      data?.first_paragraph;
  }, [data]);

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
          <div className="col-lg-12">
            <div className="art-section-title">
              <div className="art-title-frame">
                <Link to="/" className="art-link art-color-link ">
                  {"< "} Back
                </Link>
              </div>
              <div className="art-right-frame">
                <div className="art-project-category">{data?.tags}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="art-a art-project-cover">
              <span
                data-fancybox="gallery"
                className="art-portfolio-item-frame art-horizontal"
              >
                <img src={data?.image} alt="item" />
                {/* <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span> */}
              </span>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="art-a art-card">
              <h1
                className="mb-3 art-lg-text art-white"
                style={{ fontSize: "25px" }}
              >
                {data?.heading}
              </h1>

              <p>{data?.description}</p>
              {/* <h2
                className="mb-3 art-lg-text art-white"
                // style={{ fontSize: "18px" }}
              >
                Links
              </h2> */}
              <div className="container-fluid ml-0 pl-4">
                <div className="row">
                  <a
                    className="text-center"
                    target={"_blank"}
                    href={data?.live_link}
                    rel="noreferrer"
                  >
                    <span>
                      <BsGlobe2 size={30} className="art-link art-color-link" />
                      <h5>Live Link</h5>
                    </span>
                  </a>
                  <a
                    target={"_blank"}
                    href={data?.repo_link}
                    rel="noreferrer"
                    className="text-center ml-4"
                  >
                    <span>
                      <FiGithub size={30} className="art-link art-color-link" />
                      <h5>Repo Link</h5>
                    </span>
                  </a>
                </div>
              </div>
              <hr />
              <h2
                className="mb-3 art-lg-text art-white"
                // style={{ fontSize: "18px" }}
              >
                Technologies
              </h2>
              <ul className="art-custom-list row">
                {data?.technologies?.map((val, i) => {
                  return (
                    <div className="col-4">
                      <li key={`tech-${i}`}>{val}</li>
                    </div>
                  );
                })}
              </ul>
              <hr />
              <div className="">
                <h2
                  className="mb-3 art-lg-text art-white"
                  // style={{ fontSize: "18px" }}
                >
                  Video Demo
                </h2>
                <video
                  width={"100%"}
                  style={{ borderRadius: "20px" }}
                  controls
                  src={data?.demo_url}
                />
              </div>
              <hr />
              <h2
                className="mb-3 art-lg-text art-white"
                // style={{ fontSize: "18px" }}
              >
                Description
              </h2>
              <p
                id="first_paragraph"
                className="mt-4"
                style={{ fontSize: "17px" }}
              >
                {/* {data?.first_paragraph} */}
              </p>

              {data?.quote && <blockquote>{data?.quote}</blockquote>}

              <p>{data?.second_paragraph}</p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="art-a art-card">
              <div className="art-table p-15-15">
                <ul>
                  <li>
                    <h6>Date Started:</h6>
                    <span>{data?.date_started}</span>
                  </li>
                  <li>
                    <h6>Date Ended:</h6>
                    <span>{data?.date_finished}</span>
                  </li>
                  <li>
                    <h6>Category:</h6>
                    <span>{data?.category}</span>
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
