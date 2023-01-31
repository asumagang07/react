import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineFacebook,
} from "react-icons/ai";
import { VscLightbulb } from "react-icons/vsc";
import { SiJavascript } from "react-icons/si";
import styled from "styled-components";

function GetStarted() {
  return (
    <StyledDiv className="flex w-full h-full justify-center items-center text-primary-text p-4 bg-secondary-400">
      <div className="w-4/5 h-3/4 mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl">Adrian Sumagang</h1>
          <p className="text-xl text-primary-text">
            UI Developer || Graphics Designer
          </p>
        </div>

        <div className="flex w-full mt-8 gap-8">
          <div className="flex flex-col gap-2 w-[500px]">
            <p className="text-xl">Connect with me</p>
            <button className="flex items-center gap-3 text-primary-600">
              <AiOutlineLinkedin size={25} />
              <a href=" https://www.linkedin.com/in/adrian-sumagang-16aaa4195/">
                adriansumagang
              </a>
            </button>
            <button className="flex items-center gap-3 text-primary-600">
              <AiOutlineMail size={25} />
              adrianr.sumagang@gmail.com
            </button>
            <button className="flex items-center gap-3 text-primary-600">
              <AiOutlineFacebook size={25} />
              adrianronquillosumagang
            </button>
          </div>
          <div className="flex flex-col gap-4 w-[500px]">
            <p className="text-xl">Walkthroughs</p>

            <div className=" bg-secondary-300 flex flex-col rounded-md py-2 px-4">
              <p>Get Started with VS Code</p>
              <p>Discover the best customizations to make VS Code</p>
            </div>
            <div className=" bg-secondary-300 flex flex-col rounded-md py-2 px-4">
              <button className="flex items-center gap-2">
                <VscLightbulb size={20} color="#397cff" />
                Learn the Fundamentals
              </button>
            </div>
            <div className=" bg-secondary-300 flex flex-col rounded-md py-2 px-4">
              <p>Get Started with VS Code</p>
              <p>Discover the best customizations to make VS Code</p>
            </div>
            <div className=" bg-secondary-300 flex flex-col rounded-md py-2 px-4">
              <button className="flex items-center gap-2">
                <SiJavascript size={20} color="#f2eb00" />
                Get Started with Javascript
              </button>
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
