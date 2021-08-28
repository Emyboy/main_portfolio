import React, { ReactElement } from "react";
import { AuthCard as Card, BasicInfo } from "../Styled/AuthCard.styled";
import EmyImage from "../../assets/img/emy.jpeg";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { GrLocation, GrGithub } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";
import { Button } from "../Styled/Button.styled";
import { BiDownload } from 'react-icons/bi'

export default function AuthCard(): ReactElement {
  return (
    <div>
      <Card className="shadow">
        <div className="img-container">
          <img src={EmyImage} alt="Emy" width="200" />
        </div>
        <BasicInfo>
          <h2>Chukwuemeka Ifeora Stanley</h2>
          <div className="container">
            <div className="title">
              <h4>Full Stack Developer</h4>
            </div>
            <div className="row justify-content-center">
              <a
                href="https://www.linkedin.com/in/chukwuemeka-ifeora/"
                target="_blank"
                rel="noreferrer"
                className="text-muted"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://twitter.com/ifeora_emeka"
                target="_blank"
                rel="noreferrer"
                className="text-muted"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/ifeora_emeka/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="text-muted"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </BasicInfo>
        <div className="p-2 pb-3 bg-gray">
          <div className="mb-1 mt-2">
            <GrLocation />
            <span className="ml-1">Lagos, Nigeria</span>
          </div>
          <div className="mb-1 mt-2">
            <AiOutlinePhone />
            <span className="ml-1 text-dark">
              <a href="tel:+234 08081008437" className="text-dark">
                +234 08081008437
              </a>
            </span>
          </div>
          <div className="mb-1 mt-2">
            <FiMail />
            <span className="ml-1">chukwuemekaifeora@gmail.com</span>
          </div>
          <div className="mb-1 mt-2">
            <GrGithub />
            <span className="ml-1">
              <a href="http://github.com/emyboy" target="_blank"
              rel="noreferrer" className='text-dark'>
                Emyboy
              </a>
            </span>
          </div>
        </div>
        <div className="text-center mt-4">
          <Button className="shadow w-50">
            <BiDownload /> Download CV
          </Button>
        </div>
      </Card>
    </div>
  );
}
