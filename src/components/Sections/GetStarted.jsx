import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

import { Connect } from "../../assets/svg/index";

export default function GetStarted() {
  return (
    <Element name="getStarted">
      <Wrapper id="getStarted" className="w-full h-full ">
        <div className="whiteBg h-full min-h-screen">
          <div className="container">
            <HeaderInfo>
              <h1 className="font30 extraBold">
                Connect safely to the portfolio you are using to begin.
              </h1>
            </HeaderInfo>
          </div>

          <LogoContainer>
            <Connect />
          </LogoContainer>
        </div>
      </Wrapper>
    </Element>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem;
  min-height: 100vh;
  @media (max-width: 960px) {
    padding: 0.5rem;
  }
`;
