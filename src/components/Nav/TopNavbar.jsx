import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, scroller } from "react-scroll";
import { Link as Link1 } from "react-router-dom";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import { LogoApp, BurgerIcon } from "../../assets/svg";
import { useLocation } from "react-router-dom";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [isHome, setIsHome] = useState(true);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  }, [location]);

  const scrollTo = (to) => {
    setTimeout(() => {
      try {
        scroller.scrollTo(to, {
          duration: 1500,
          delay: 100,
          smooth: true,
          offset: 50, // Scrolls to element + 50 pixels down the page
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: TopNavbar.jsx ~ line 37 ~ scrollTo ~ error",
          error
        );
      }
    }, 350);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        {isHome ? (
          <NavInner className="container flexSpaceCenter">
            <Link className="pointer flexNullCenter" smooth={true} to="home">
              <LogoApp />
              <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
                OneDex
              </h1>
            </Link>
            <BurderWrapper
              className="pointer"
              onClick={() => toggleSidebar(!sidebarOpen)}
            >
              <BurgerIcon />
            </BurderWrapper>
            <UlWrapper className="flexNullCenter">
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Home
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="getStarted"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Get Started
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="screenshots"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Screenshots
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Contact
                </Link>
              </li>
            </UlWrapper>
            <UlWrapperRight className="flexNullCenter">
              <li className="semiBold font15 pointer flexCenter">
                <a
                  href="/"
                  className="radius8 lightBg"
                  style={{ padding: "10px 15px" }}
                >
                  Get Started
                </a>
              </li>
            </UlWrapperRight>
          </NavInner>
        ) : (
          <NavInner className="container flexSpaceCenter">
            <Link1
              className="pointer flexNullCenter"
              to="/"
              onClick={() => scrollTo("home")}
            >
              <LogoApp />
              <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
                OneDex
              </h1>
            </Link1>
            <BurderWrapper
              className="pointer"
              onClick={() => toggleSidebar(!sidebarOpen)}
            >
              <BurgerIcon />
            </BurderWrapper>
            <UlWrapper className="flexNullCenter">
              <li className="semiBold font15 pointer">
                <Link1
                  style={{ padding: "10px 15px" }}
                  to="/"
                  onClick={() => scrollTo("home")}
                >
                  Home
                </Link1>
              </li>
              <li className="semiBold font15 pointer">
                <Link1
                  style={{ padding: "10px 15px" }}
                  to="/"
                  onClick={() => scrollTo("getStarted")}
                >
                  Get Started
                </Link1>
              </li>
              <li className="semiBold font15 pointer">
                <Link1
                  style={{ padding: "10px 15px" }}
                  to="/"
                  onClick={() => scrollTo("screenshots")}
                >
                  Screenshots
                </Link1>
              </li>
              <li className="semiBold font15 pointer">
                <Link1
                  style={{ padding: "10px 15px" }}
                  to="/"
                  onClick={() => scrollTo("contact")}
                >
                  Contact
                </Link1>
              </li>
            </UlWrapper>
            <UlWrapperRight className="flexNullCenter">
              <li className="semiBold font15 pointer flexCenter">
                <a
                  href="/"
                  className="radius8 lightBg"
                  style={{ padding: "10px 15px" }}
                >
                  Get Started
                </a>
              </li>
            </UlWrapperRight>
          </NavInner>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
