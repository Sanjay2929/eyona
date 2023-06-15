import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import heroNavLogo from "../assets/img/webp/eyonaBlackLogo.webp";
import menulines from "../assets/img/svg/menuLines.svg";
import menuCross from "../assets/img/svg/menuIconCross.svg";
import NavigationBar from "./NavigationBar";
import hero1 from "../assets/img/webp/heroImg1.webp";
import hero2 from "../assets/img/webp/heroImg2.webp";
import hero3 from "../assets/img/webp/heroimg3.webp";
import hero4 from "../assets/img/webp/heroImg4.webp";
import hero5 from "../assets/img/webp/heroImg5.webp";
const HeroSection = () => {
  const [first, setfirst] = useState(true);
  function showUl() {
    setfirst(!first);
  }
  if (!first) {
    document.getElementById("overFlow_nav").classList.add("overflow-hidden");
  } else {
   document.getElementById("overFlow_nav").classList.remove("overflow-hidden");
  }
  return (
    <>
      <section className="pb-5 d-flex min_vh_xl_100 flex-column heroSection position-relative overflow-hidden z_100">
        <Container className="HeroContainer py-1 position-relative z-2">
          <div className="d-flex justify-content-between align-items-center position-absolute z_100 top-0 pt-5 w-100 pe-4 bg_xs_white">
            <img className="maxW149 " src={heroNavLogo} alt="logo" />
            <div
              className={
                first
                  ? "navbarNone position-fixed w-100 clipPathCircle min-vh-100 top-0 end-0 "
                  : "navShow end-0 top-0 position-fixed w-100 min-vh-100 bg_brownBlack z_100"
              }
            >
              <NavigationBar />
            </div>
            <div className="d-flex align-items-center gap-4">
              <button className="border-0 bg-transparent ff_inter fw-medium fs_sm letterspace15 clr_black">
                Let’s Talk
              </button>
              <span
                onClick={showUl}
                className="menuCross position-relative z_110 d-flex justify-content-center align-items-center rounded-pill"
              >
                {first ? (
                  <img src={menulines} alt="menyIcon" />
                ) : (
                  <img src={menuCross} alt="cross" />
                )}
              </span>
            </div>
          </div>
          <Row className="align-items-center justify-content-between pb-5">
            <Col lg={6} sm={8}>
              <div className="d-grid grid_template pe-xl-5">
                <div className="grid_items grid1">
                  <img className="w-100" src={hero1} alt="img" />
                </div>
                <div className="grid_items grid2">
                  <img className="w-100" src={hero2} alt="img" />
                </div>
                <div className="grid_items grid3">
                  <img className="w-100" src={hero3} alt="img" />
                </div>
                <div className="grid_items grid4">
                  <img className="w-100" src={hero4} alt="img" />
                </div>
                <div className="grid_items grid5">
                  <img className="w-100 circleRotate" src={hero5} alt="img" />
                </div>
              </div>
            </Col>
            <Col xl={5} lg={6}>
              <h3 className=" ff_montserrat fw-bold fs_5xl lh_130 clr_brownBlack mb-3">
                We’re a multi-product company specialising in B2B products.
              </h3>
              <p className="ff_montserrat fw-normal fs_md clr_brownBlack op_75 PB-1">
                Eyona is a team of dedicated, passionate people building B2B
                software for the FMCG industry.
              </p>
              <button className="bg_red rounded-pill btnHover py-3 px_31_34 border-0 ff_montserrat fw-bold fs_lg clr_white letter10 lh_115 mt-3">
                Get In Touch
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
