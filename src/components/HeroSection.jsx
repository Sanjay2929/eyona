import React, { useState } from "react";
import { Container } from "react-bootstrap";
import heroNavLogo from "../assets/img/webp/eyonaBlackLogo.webp";
import menulines from "../assets/img/svg/menuLines.svg";
import menuCross from "../assets/img/svg/menuIconCross.svg";
import NavigationBar from "./NavigationBar";
const HeroSection = () => {
  const [first, setfirst] = useState(true);
  function showUl() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <section className="py-5">
        <Container className="HeroContainer py-1">
          <div className="d-flex justify-content-between align-items-center">
            <img className="maxW149 " src={heroNavLogo} alt="logo" />
            <div
              className={
                first
                  ? "navbarNone top_N100 end_N100 position-fixed w-100 "
                  : "navShow end-0 top-0 position-fixed w-100 min-vh-100 bg_brownBlack z-3"
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
                className="menuCross position-relative z-3 d-flex justify-content-center align-items-center rounded-pill"
              >
                {first ? (
                  <img src={menulines} alt="menyIcon" />
                ) : (
                  <img src={menuCross} alt="cross" />
                )}
              </span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
