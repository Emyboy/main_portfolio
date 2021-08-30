import React, { ReactElement } from "react";
import Heading from "../components/Heading";
import SkillCard from "../components/SkillCard/SkillCard";
import { Section } from "../components/Styled/Section.styled";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { GiPaintBrush } from "react-icons/gi";
import { BiTestTube } from "react-icons/bi";

const thingsIDo = [
  {
    heading: "Web Development",
    subHeading:
      "Using state-of-the-art web technologies to build web applications.",
  },
  {
    heading: "Mobile Development",
    subHeading:
      "I also build cross-platform mobile applications to tailor your needs.",
  },
  {
    heading: "UX/UI Design",
    subHeading:
      "I build pixel-perfect UI designs, following the latest UI design trends.",
  },
  {
    heading: "Testing",
    subHeading:
      "To be confident of software in production, I write Unit and Integration tests.",
  },
];

const icons = [
  <AiOutlineGlobal />,
  <FaMobileAlt size={24} />,
  <GiPaintBrush />,
  <BiTestTube />,
];

export default function AboutMe(): ReactElement {
  return (
    <div>
      <Section>
        <Heading heading="About Me" />
        <div>
          <p style={{ fontSize: "19px" }}>
            Hi there, I am a self-taught frontend developer, as you will see I
            have hands-on experience building scalable, dynamic, and secure web
            applications. My strengths are building beautiful and interactive
            user interfaces and, amazing user experience.
          </p>
        </div>
      </Section>
      <Section gray>
        <Heading noLine heading="What I do" />
        <div className="row">
          {thingsIDo.map((val, i) => {
            return (
              <div className="col-lg-9 col-sm-12" key={i}>
                <SkillCard
                  heading={val.heading}
                  icon={icons[i]}
                  body={<p>{val.subHeading}</p>}
                />
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
