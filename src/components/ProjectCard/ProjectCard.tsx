import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  img: string;
  description: string;
  stacks: string[];
  live_url: string;
  github_url: string;
}

export const Card = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid gray;
  margin-bottom: 20px;
  h4 {
    font-weight: bold;
  }
  img {
    width: 100%;
    height: 230px;
  }
  button {
    border: 0;
    padding: 10px;
  }
  p {
    margin-top: 20px;
  }
`;

export default function ProjectCard({
  title,
  img,
  description,
  stacks,
  live_url,
  github_url,
}: Props): ReactElement {
  return (
    <Card className="shadow">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <div className="container">
        <div className="row">
          {stacks.map((val, i) => {
            return (
              <span
                className={`badge badge-success shadow ${
                  i === 0 ? null : "ml-1"
                }`}
                key={i}
              >
                {val}
              </span>
            );
          })}
        </div>
      </div>
      <p>{description}</p>
      <div>
        <a href={github_url} target="_blank">
          <button className="btn btn-sm">View Code</button>
        </a>
        <a href={live_url} target="_blank">
          <button className="btn ml-2 bg-theme text-white btn-sm">
            Live Preview
          </button>
        </a>
      </div>
    </Card>
  );
}
