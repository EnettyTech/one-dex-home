import React from "react";
import styled from "styled-components";
// Assets
import HeaderImage from "../../assets/img/header-img.png";
import Dots from "../../assets/svg/Dots";
import { Element } from "react-scroll";
import { AppStoreDownload, GooglePlayDownload } from "../../assets/svg";

export default function Header() {
  return (
    <Element name="home">
      <Wrapper id="home" className="container flexSpaceCenter">
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold font30">
              Be up-to-date and track your favorite cryptocurrency's movement
              with OneDex. Designed for beginners and built for experts
            </h1>
            <HeaderP className="font13 semiBold">
              - Easily connect with your favourite exchange.
            </HeaderP>
            <HeaderP className="font13 semiBold">
              - Manage all your accounts in one place.
            </HeaderP>
            <HeaderP className="font13 semiBold">
              - Automatically import your trade history.
            </HeaderP>
            <HeaderP className="font13 semiBold">
              - Sell/buy with one click.
            </HeaderP>
            <p className="font13 semiBold mb-10">
              Now available for all cryptocurrencies!
            </p>
            <BtnWrapper>
              <div className="flex flex-row justify-between items-center ">
                <a href="https://apps.apple.com/app/apple-store/id1635732387?mt=8">
                  <AppStoreDownload />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.launchzone.onedex">
                  <GooglePlayDownload />
                </a>
              </div>
            </BtnWrapper>
          </div>
        </LeftSide>
        <RightSide>
          <ImageWrapper>
            <Img
              className="radius8"
              src={HeaderImage}
              alt="office"
              style={{ zIndex: 9, height: 680, width: 330 }}
            />
            <DotsWrapper>
              <Dots />
            </DotsWrapper>
          </ImageWrapper>
          <GreyDiv className="lightBg"></GreyDiv>
        </RightSide>
      </Wrapper>
    </Element>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 5px 0 5px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 5px 0 5px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 290px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -45px;
  bottom: -60px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
