import React, { ReactElement } from "react";
import Heading from "../components/Heading";
import SkillCard from "../components/SkillCard/SkillCard";
import { Section } from "../components/Styled/Section.styled";


const skillsData = [
    {
        skill: 'Javascript',
        years: 3,
        progress: 97,
    },
    {
        skill: 'CSS',
        years: 3,
        progress: 95,
    },
    {
        skill: 'React Native',
        years: 2,
        progress: 60,
    },
    {
        skill: 'React',
        years: 3,
        progress: 97,
    },
    {
        skill: 'Redux',
        years: 3,
        progress: 90,
    },
    {
        skill: 'TypeScript',
        years: 2,
        progress: 60,
    },
    {
        skill: 'Node',
        years: 3,
        progress: 60,
    },
    {
        skill: 'PostgreSQL',
        years: 2,
        progress: 50,
    },
    {
        skill: 'MongoDB',
        years: 1,
        progress: 40,
    },
    {
        skill: 'Bootstrap',
        years: 3,
        progress: 90,
    },
];

export default function Skills(): ReactElement {
  return (
    <div>
      <Section>
        <Heading heading="My Tech Skills" />
      </Section>
      <Section gray>
        <div className="row ">
            {
                skillsData.map((val, i) => {
                    return (
                      <div className="col-lg-8 col-sm-12">
                        <SkillCard
                          stand_alone
                          //   heading="React"
                          body={
                            <div>
                              <h6>
                                {val.skill}{" "}
                                <small className="text-muted">
                                  <b>{val.years} Yrs</b>
                                </small>
                              </h6>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-theme"
                                  role="progressbar"
                                  style={{ width: `${val.progress}%` }}
                                  aria-valuenow={100}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  {val.progress}%
                                </div>
                              </div>
                            </div>
                          }
                        />
                      </div>
                    );
                })
            }
          
        </div>
      </Section>
    </div>
  );
}
