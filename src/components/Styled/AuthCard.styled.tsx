import styled from "styled-components";
import Global from '../../Global';
export const AuthCard = styled.div`
    border-radius: 30px;
    background-color: white;
    position: relative;
    height: 90vh;
    .img-container {
        text-align: center;
    }
    img {
        border-radius: 50px;
        padding: 1em;
    };
    .bg-gray {
        background-color: ${Global.gray_color};
    }
`;

export const BasicInfo = styled.div`
    text-align: center;
    padding: 20px;
    h2 {
        margin-bottom: 10px;
    }
    .title {
        padding: 5px;
        background-color: ${Global.gray_color};
        border-radius: 20px;
    }
    .title h4 {
        font-size: 16px;
    }
    svg {
        margin: 1em;
    }
`;
