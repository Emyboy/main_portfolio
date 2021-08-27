import React, { ReactElement } from "react";
import styled from "styled-components";
import Global from "../../Global";

interface Props {
  icon?: ReactElement;
  heading?: string;
  body?: ReactElement;
}

export const _SkillCard = styled.div`
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px;
  margin-top: 1em;
  h6 {
      font-weight: bold;
  }
  svg {
      font-size: 40px;
      margin-top: 10px;
      margin-right: 1em;
      color: ${Global.theme_color};
  }
`;

export default function SkillCard({
  icon,
  heading,
  body,
}: Props): ReactElement {
  return (
    <_SkillCard>
      <div>{icon}</div>
      <div>
        <h6>{heading}</h6>
        {body}
      </div>
    </_SkillCard>
  );
}
