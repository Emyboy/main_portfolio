import React, { ReactElement } from "react";
import styled from "styled-components";
import Global from "../../Global";

interface Props {
  icon?: ReactElement;
  heading?: string;
  body?: ReactElement;
  stand_alone?: boolean;
}

interface StyledProps {
  stand_alone?: boolean;
}

export const Skillcard = styled.div<StyledProps>`
  border-radius: 20px;
  background-color: white;
  display: ${(p) => (p.stand_alone ? "block" : "flex")};
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px;
  margin-top: 1em;
  h6 {
    font-weight: bold;
    font-size: 20px;
  }
  svg,
  img {
    font-size: 40px;
    margin-top: 10px;
    margin-right: 1em;
    color: ${Global.theme_color};
    height: 60px;
  }
`;

export default function SkillCard({
  icon,
  heading,
  body,
  stand_alone
}: Props): ReactElement {
  return (
    <Skillcard stand_alone={stand_alone}>
      {icon ?<div>{icon}</div>:null}
      <div>
        <h6>{heading}</h6>
        {body}
      </div>
    </Skillcard>
  );
}
