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
import logoWhite from "../assets/img/webp/eyonaWhiteLogo.webp";
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
        <Container
          id="who"
          className="HeroContainer py-1 position-relative z-2"
        >
          <div className="d-flex justify-content-between align-items-center position-absolute z_100 top-0 pt-5 w-100 pe-4 bg_xs_white">
            <img
              className="maxW149 cursiorPointer"
              src={heroNavLogo}
              alt="logo"
            />
            <div
              className={
                first
                  ? "navbarNone position-fixed w-100 clipPathCircle min-vh-100 top-0 end-0 "
                  : "navShow end-0 top-0 position-fixed w-100 min-vh-100 bg_brownBlack z_100"
              }
            >
              <div className=" overflow-auto">
                <section className="bg_brownBlack vh-100 d-flex flex-column pt-5 bg_circleNav position-relative overflow-x-hidden">
                  <div className="d-flex HeroContainer justify-content-between px-5 mx-2 position-relative z-2 cursiorPointer">
                    <img className="maxW133" src={logoWhite} alt="logo" />
                  </div>
                  <Container className="NavContainer d-flex flex-column justify-content-center flex-grow-1 position-relative z-2 py-5">
                    <Row className="justify-content-between align-items-lg-end align-items-start">
                      <Col lg={6} xl={5} md={7} className="pb-md-5">
                        <ul className="Navul mb-0 ps-0 pb-5">
                          <li>
                            <a onClick={() => setfirst(true)} href="#who">
                              Who we are
                            </a>
                          </li>
                          <li>
                            <a onClick={() => setfirst(true)} href="#company">Our Companies</a>
                          </li>
                          <li>
                            <a onClick={() => setfirst(true)} href="#what">What we do</a>
                          </li>
                          <li>
                            <a onClick={() => setfirst(true)} href="#contact">Contact us</a>
                          </li>
                          <li>
                            <a onClick={() => setfirst(true)} href="#career">Careers</a>
                          </li>
                        </ul>
                      </Col>
                      <Col xxl={4} md={5}>
                        <Row className="justify-content-between">
                          <Col md={12} className="pb-3 policies">
                            <a
                              className="ff_montserrat fw-bold fs_2x5l clr_red pb-2 mb-1"
                              href="contact@eyona.co"
                            >
                              contact@eyona.co
                            </a>
                            <ul className="ps-0">
                              <li>
                                <p className="ff_montserrat fw-normal fs_md clr_white cursiorPointer mb-0 lh_170">
                                  Terms &
                                </p>
                              </li>
                              <li>
                                <p className="ff_montserrat fw-normal fs_md clr_white cursiorPointer mb-0 lh_170">
                                  Conditions
                                </p>
                              </li>
                              <li>
                                <p className="ff_montserrat fw-normal fs_md clr_white cursiorPointer mb-0 lh_170">
                                  Privacy Policy
                                </p>
                              </li>
                            </ul>
                          </Col>
                          <Col xl={5} lg={6} md={12}>
                            <h4 className="ff_montserrat fw-bold fs_2x5l clr_red pb-3 mb-1">
                              London
                            </h4>
                            <p className="ff_montserrat fw-normal fs_md clr_white ps-0 cursiorPointer lh_170 address">
                              77 Farringdon
                              <span className="d-block">Road</span>
                              <span className="d-block">London</span>
                              <span className="d-block">EC1m 3JU</span>
                            </p>
                          </Col>
                          <Col xl={5} lg={6} md={12}>
                            <h4 className="ff_montserrat fw-bold fs_2x5l clr_red pb-3 mb-1">
                              Cape Town
                            </h4>
                            <p className="ff_montserrat fw-normal fs_md clr_white ps-0 pb-3 mb-3 cursiorPointer lh_170 address">
                              4 Alphons way,
                              <span className="d-block">Tokai, Cape Town,</span>
                              <span className="d-block">
                                Western Cape 7420,
                              </span>
                              <span className="d-block">ZA</span>
                            </p>
                          </Col>
                        </Row>
                        <svg
                          className="cursiorPointer in"
                          width="29"
                          height="29"
                          viewBox="0 0 29 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.26433 28.7542H0.102661V8.21533H6.26433V28.7542ZM28.8571 28.7542H22.6955V17.7824C22.6955 14.9233 21.6767 13.5 19.6578 13.5C18.0578 13.5 17.0431 14.2969 16.5338 15.8928V28.7542H10.3721C10.3721 28.7542 10.4543 10.2692 10.3721 8.21533H15.2357L15.6116 12.3231H15.7389C17.0021 10.2692 19.021 8.87668 21.7897 8.87668C23.8949 8.87668 25.5976 9.46204 26.8977 10.9326C28.206 12.4053 28.8571 14.3811 28.8571 17.1559V28.7542Z"
                            fill="white"
                            fillOpacity="0.25"
                          />
                          <path
                            d="M3.18353 6.16167C4.94175 6.16167 6.36706 4.78233 6.36706 3.08084C6.36706 1.37934 4.94175 0 3.18353 0C1.42532 0 0 1.37934 0 3.08084C0 4.78233 1.42532 6.16167 3.18353 6.16167Z"
                            fill="white"
                            fillOpacity="0.25"
                          />
                        </svg>
                      </Col>
                    </Row>
                  </Container>
                </section>
              </div>
            </div>
            <div className="d-flex align-items-center gap-4">
              <button className="border-0 bg-transparent ff_inter fw-medium fs_sm letterspace15 clr_black">
                Let’s Talk
              </button>
              <span
                onClick={showUl}
                className="menuCross position-relative z_110 d-flex justify-content-center align-items-center rounded-pill cursiorPointer"
              >
                {first ? (
                  <img src={menulines} alt="menyIcon" />
                ) : (
                  <img src={menuCross} alt="cross" />
                )}
              </span>
            </div>
          </div>
          <Row className="align-items-center justify-content-between pb-sm-5">
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
            <Col xl={5} lg={6} className="pt-lg-0 pt-3">
              <h3 className=" ff_montserrat fw-bold fs_5xl lh_130 clr_brownBlack mb-3">
                We’re a multi-product company specialising in B2B products.
              </h3>
              <p className="ff_montserrat fw-normal fs_md clr_brownBlack op_75 PB-1">
                Eyona is a team of dedicated, passionate people building B2B
                software for the FMCG industry.
              </p>
              <button className="bg_red rounded-pill btnHover py-3 px_31_34 ff_montserrat fw-bold fs_lg clr_white letter10 lh_115 mt-3">
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
