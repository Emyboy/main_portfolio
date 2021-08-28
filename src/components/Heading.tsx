import React, { ReactElement } from "react";
import styled from "styled-components";
import Global from "../Global";

interface Props {
  heading: string;
  noLine?: boolean;
}

const SHeading = styled.div`
  margin-bottom: 20px;
  h2 {
    font-weight: bold;
    color: #444444;
  }
  div {
    padding: 2px;
    background-color: ${Global.theme_color};
    width: 70px;
  }
`;

export default function Heading({ heading, noLine }: Props): ReactElement {
  return (
    <SHeading>
      <h2>{heading}</h2>
      {noLine ? null : <div></div>}
    </SHeading>
  );
}
