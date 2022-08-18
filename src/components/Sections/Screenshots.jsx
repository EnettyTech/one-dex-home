import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import FullScreenImage from "../Elements/fullScreenImage";
import { Element, scroller } from "react-scroll";

export default function Screenshots() {
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const [urlImage, setUrlImage] = React.useState(null);
  const showFullScreenImage = async (url) => {
    await setUrlImage(url);
    await setIsFullScreen(true);
  };

  const onHideModal = async () => {
    await setIsFullScreen(false);
  };

  const downloadNow = () => {
    scroller.scrollTo("home", {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50, // Scrolls to element + 50 pixels down the page
    });
  };

  return (
    <Element name="screenshots">
      <Wrapper id="screenshots">
        <div className="whiteBg">
          <div className="container">
            <HeaderInfo>
              <h1 className="font30 extraBold">
                All-In-One Crypto and DeFi Asset Management Platform Find Your
                Edge With OneDex now!
              </h1>
              <p className="font13">
                OneDex is compatible with the most popular cryptocurrency
                exchanges, including Binance, Coinbase, FTX, and over 200
                others.
              </p>
            </HeaderInfo>
            <div className="row textCenter">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                  img={ProjectImg1}
                  title="Automated portfolio tracking"
                  text="Real-time access to your market value, investment performance, and portfolio allocation. 
                We consolidate your transaction history across all crypto services and enable you to search and filter it. 
                More than 200 exchanges and 10,000+ cryptocurrencies are supported."
                  action={() => showFullScreenImage(ProjectImg1)}
                />
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                  img={ProjectImg3}
                  title="Manage Alert"
                  text="Crypto in the palm of your hand."
                  action={() => showFullScreenImage(ProjectImg2)}
                />
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                  img={ProjectImg6}
                  title="Fast buy/sell"
                  text="Forget about trading pairs! With one click you can trade from one altcoin to another, without 
                having to trade to Bitcoin or Ethereum first."
                  action={() => showFullScreenImage(ProjectImg3)}
                />
              </div>
            </div>
            <div className="row textCenter">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                  img={ProjectImg4}
                  title="Swift & Safe"
                  text="It takes only a few minutes to sign up for OneDex, which is completely free and secure."
                  action={() => showFullScreenImage(ProjectImg4)}
                />
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                  img={ProjectImg5}
                  title="Manage notification"
                  text="Crypto in the palm of your hand. Easily turn on notifications for price alerts, gas fee alerts, or the whole portfolio hitting $X in value."
                  action={() => showFullScreenImage(ProjectImg5)}
                />
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                  img={ProjectImg2}
                  title="Track your crypto portfolio on the go."
                  text="Our mobile app enables users to monitor their portfolio and cryptocurrency prices. 
                Never lose track of your assets, no matter where you are."
                  action={() => showFullScreenImage(ProjectImg6)}
                />
              </div>
            </div>
            <FullScreenImage
              isShowing={isFullScreen}
              url={urlImage}
              hide={onHideModal}
            />
            <div className="row flexCenter">
              <div style={{ margin: "50px 0", width: "200px" }}>
                <FullButton title="Download now" action={downloadNow} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A few words about company</h4>
              <h2 className="font40 extraBold">A Study of Creativity</h2>
              <p className="font12">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" action={() => alert("clicked")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contact Us" action={() => alert("clicked")} border />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div> */}
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
