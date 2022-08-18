import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as Link1 } from "react-router-dom";
// Assets
import { LogoApp, ToTop } from "../../assets/svg";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              <LogoApp />
              <h1
                className="font15 extraBold whiteColor"
                style={{ marginLeft: "15px" }}
              >
                OneDex
              </h1>
            </Link>
            <div>
              <div>
                <Link1
                  to={"/privacy-policy"}
                  style={{ color: "white", marginBottom: 10 }}
                >
                  <StyleP className="font13 font-bold">Privacy policy</StyleP>
                </Link1>
                <Link1 to={"/term-conditions"} style={{ color: "white" }}>
                  <StyleP className="font13 font-bold">
                    Terms & conditions
                  </StyleP>
                </Link1>
              </div>
              <StyleP className="whiteColor font13">
                © {getCurrentYear()} -{" "}
                <span className="purpleColor font13">OneDex</span> All Right
                Reserved
              </StyleP>
            </div>

            <Link
              className="whiteColor animate pointer font13"
              to="home"
              smooth={true}
              offset={-80}
            >
              <ToTop size={40} />
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
