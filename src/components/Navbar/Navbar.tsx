import React, { ReactElement } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Global from "../../Global";

const Nav = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-left: 10px;
    z-index: 3;
    button {
        background-color: ${Global.theme_color};
        color: white;
        font-size: 35px;
        border: none;
        border-radius: 0px 20px 20px 0px;
        padding: 5px;
        svg {
            margin-bottom: 10px;
        }
    };
    nav {
        background-color: ${Global.theme_color};
        border-radius: 10px 0px 0px 10px;
        display: flex;
        /* justify-content: flex-end; */
    };
    a {
        margin: 0px 20px 0px 20px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        align-self: center;
        :hover {
            color: ${Global.secondary_color}
        }
    }
`;

export default function Navbar(): ReactElement {
  return (
    <Nav>
      <nav className='col-sd-8 col-lg-6 shadow'>
          <Link to='/'>About</Link>
          <Link to='/experience'>Experience</Link>
          <Link to='/skills'>Skills</Link>
          <Link to='/projects'>Projects</Link>
      </nav>
      <button>
          <HiMenuAlt3 />
      </button>
    </Nav>
  );
}
