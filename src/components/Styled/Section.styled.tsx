import styled from "styled-components";
import Global from "../../Global";

interface Props {
  gray?: boolean;
}

export const Section = styled.div<Props>`
  padding: 2em;
  background-color: ${(p) => (p.gray ? Global.gray_color : null)};
`;
