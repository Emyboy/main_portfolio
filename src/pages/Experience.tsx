import React, { ReactElement } from "react";
import Heading from "../components/Heading";
import SkillCard from "../components/SkillCard/SkillCard";
import { Section } from "../components/Styled/Section.styled";

export default function Experience(): ReactElement {
  return (
    <div>
      <Section>
        <Heading heading="My Work Experience" />
      </Section>
      <Section gray>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-8">
            <SkillCard
              heading="Full Stack Developer"
              body={
                <div>
                  <h5>My Ways</h5>
                  <span className="text-theme">04/2018 - 02/2020</span>
                  <p>
                    MyWays is an Artificial Intelligence and Psychometrics
                    empowered Personalized Career Growth Platform for students.
                  </p>
                  <label>
                    <b>What I did</b>
                  </label>
                  <ol>
                    <li>
                      Worked on improving performance and load time in a react
                      application
                    </li>
                    <li>
                      Created new features & components, and also writing unit
                      and integration tests for them.
                    </li>
                    <li>Consumed data from a machine learning API</li>
                    <li>
                      Worked closely with the UX/UI team and the project manager
                    </li>
                  </ol>
                </div>
              }
              icon={
                <img
                  src={"https://myways.in/static/media/newFavicon.a6e8cb85.png"}
                  width="70"
                  alt=""
                />
              }
            />
          </div>
          <div className="col-sm-12 col-lg-8">
            <SkillCard
              heading="Full Stack Developer (Team Lead)"
              body={
                <div>
                  <h5>Meet Kumba</h5>
                  <span className="text-theme">03/2020 - Present</span>
                  <p>
                    Kumba is a one stop solution for F&B businesses that
                    provides a complete online ordering and engagement solution
                    for brands across channels
                  </p>
                  <label>
                    <b>What I did</b>
                  </label>
                  <ol>
                    <li>
                      Worked on UI design from Figma to React and React Native Code
                    </li>
                    <li>
                      Also integrated real time geolocation update to Google Maps using Socket.IO 
                      for food delivery.
                    </li>
                    <li>As the team lead, I work closely with the CTO and Product Manager</li>
                    <li>
                      I also interviewed interns and junior developers who applied for a position at the company
                    </li>
                  </ol>
                </div>
              }
              icon={
                <img
                  src={
                    "https://static.wixstatic.com/media/9d7539_77e824c2bf5e468f9f6b1bf93a43167f~mv2.png/v1/fill/w_192,h_268,q_90/9d7539_77e824c2bf5e468f9f6b1bf93a43167f~mv2.png"
                  }
                  width="70"
                  alt=""
                />
              }
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
