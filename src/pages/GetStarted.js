import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiStyledcomponents,
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobeaftereffects,
} from "react-icons/si";
import { VscLightbulb } from "react-icons/vsc";
import { SiJavascript } from "react-icons/si";
import styled from "styled-components";
import LinearProgress from "../reusesableComponents/LinearProgress";

function GetStarted() {
  return (
    <StyledDiv className="flex w-full h-full justify-center items-center text-grayText p-4 bg-secondary-400">
      <div className="w-4/5 h-3/4 mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl text-white">Adrian Sumagang</h1>
          <p className="text-xl text-primary-text">
            UI Developer || Graphics Designer
          </p>
        </div>

        <div className="flex w-full mt-8 gap-8">
          <div className="flex flex-col gap-8 w-[500px]">
            <div className="flex flex-col gap-2">
              <p className="text-xl">Connect with me</p>
              <button className="flex items-center gap-3 text-blueText">
                <AiOutlineLinkedin size={25} />
                <a href=" https://www.linkedin.com/in/adrian-sumagang-16aaa4195/">
                  adriansumagang
                </a>
              </button>
              <button className="flex items-center gap-3 text-blueText">
                <AiOutlineMail size={25} />
                adrianr.sumagang@gmail.com
              </button>
              <button className="flex items-center gap-3 text-blueText">
                <AiOutlineFacebook size={25} />
                adrianronquillosumagang
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl">Project Created With</p>
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <FaReact color="#0dd4f6" size={25} />
                </div>
                <div>
                  <SiTailwindcss color="#00b1d1" size={25} />
                </div>
                <div>
                  <SiStyledcomponents color="#e552aa" size={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[500px]">
            <p className="text-xl">Skills</p>

            <div>
              <div className=" bg-default-400 hover:bg-default-300 flex flex-row gap-2 rounded-t-md py-2 px-4">
                <FaReact color="#0dd4f6" size={20} />
                <p className="font-semibold">React</p>
                <p> - Fundamentals</p>
              </div>
              <LinearProgress percent={70} />
            </div>

            <div>
              <div className=" bg-default-400 hover:bg-default-300 flex flex-col rounded-t-md py-2 px-4">
                <button className="flex items-center gap-2">
                  <FaReact color="#0dd4f6" size={20} />
                  <p className="font-semibold">React</p>
                </button>
              </div>
              <LinearProgress percent={50} />
            </div>

            <div>
              <div className=" bg-default-400 hover:bg-default-300 flex flex-col rounded-t-md py-2 px-4">
                <button className="flex items-center gap-2">
                  <SiJavascript size={20} color="#f2eb00" />
                  <p className="font-semibold">Javascript</p>
                  <p className="font-semibold">Typescript</p>
                </button>
              </div>
              <LinearProgress percent={60} />
            </div>

            <div>
              <div className=" bg-default-400 hover:bg-default-300 flex flex-col rounded-t-md py-2 px-4 gap-2">
                <p className="font-semibold">Adobe Application</p>
                <div className="flex gap-2 flex-wrap">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png" className="w-5 h-5" />
                  <p className="">Photoshop</p>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png" className="w-6 h-6" />
                  <p className="">XD</p>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png" className="w-6 h-6" />
                  <p className="">After Effects</p>
                  <SiAdobeillustrator color="#f78d00" size={20} />
                  <p className="">Adobe Illustrator</p>
                </div>
              </div>
              <LinearProgress percent={90} />
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
}

export default GetStarted;

const StyledDiv = styled.div`
  min-height: calc(100vh - 132px);
`;
