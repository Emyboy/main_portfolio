import styled from "styled-components";
import Global from "../../Global";


export const Button = styled.button`
    background-color: ${Global.theme_color};
    border: none;
    border-radius: 15px;
    color: white;
    padding: 12px;
    :hover {
        background-color: #f31818;
        color: ${Global.secondary_color};
    };
    font-size: 19px;
    svg {
        font-size: 25px;
    }
`;

