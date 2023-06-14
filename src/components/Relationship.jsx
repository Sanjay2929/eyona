import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import macdonalds from "../assets/img/svg/mcdonalds-logo.svg";
import diageo from "../assets/img/svg/diageo.svg";
import backardi from "../assets/img/svg/Bacardi.svg";
import heineken from "../assets/img/svg/Heineken.svg";
import redBull from "../assets/img/svg/redBull.svg";
import prenod from "../assets/img/svg/prenod.svg";
import kfc from "../assets/img/svg/kfc.svg";
import Halewood from "../assets/img/svg/Halewood.svg";
import BeamSuntory from "../assets/img/svg/BeamSuntory.svg";
import sab from "../assets/img/svg/sab.svg";
import edrington from "../assets/img/svg/edrington.svg";
import burgerKing from "../assets/img/svg/burgerKing.svg";
import campariGroup from "../assets/img/svg/campariGroup.svg";

const Relationship = () => {
  return (
    <>
      <section className="pt-sm-4 pt-5 pb-5">
        <Container className="relationShipContainer pb-sm-5 mb-sm-5">
          <h3 className="maxW1048 mx-auto ff_inter fw-bold fs_8x5l clr_brownBlack text-center lh_115 mb-3">
            We’ve built relationships based on
            <span className="clr_red">trust.</span>
          </h3>
          <p className="maxW872 mx-auto text-center ff_inter fw-normal fs_xl clr_gray lh_200">
            We pride ourselves on having global companies as our partners & we
            also service independant small businesses. We love to work with all
            businesses big or small.
          </p>
          <div className="bg_map py-lg-5 mt-xl-5">
            <Row className="align-items-center justify-content-between py-md-5 py-4 my-lg-5">
              <Col xs={12} className="pt-md-5">
                <Row className="align-items-center justify-content-between py-md-4">
                  <Col
                    lg={2}
                    sm={3}
                    xs={6}
                    className="d-flex justify-content-center py-sm-0 py-3"
                  >
                    <img
                      className="w-100"
                      style={{ maxWidth: "64px" }}
                      src={macdonalds}
                      alt="img"
                    />
                  </Col>
                  <Col
                    lg={2}
                    sm={3}
                    xs={6}
                    className="d-flex justify-content-center py-sm-0 py-3"
                  >
                    <img
                      className="w-100"
                      style={{ maxWidth: "143px" }}
                      src={diageo}
                      alt="img"
                    />
                  </Col>
                  <Col
                    lg={2}
                    sm={3}
                    xs={6}
                    className="d-flex justify-content-center py-sm-0 py-3"
                  >
                    <img
                      className="w-100"
                      style={{ maxWidth: "182px" }}
                      src={backardi}
                      alt="img"
                    />
                  </Col>
                  <Col
                    lg={2}
                    sm={3}
                    xs={6}
                    className="d-flex justify-content-center py-sm-0 py-3"
                  >
                    <img
                      className="w-100"
                      style={{ maxWidth: "211px" }}
                      src={heineken}
                      alt="img"
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row className="align-items-center justify-content-between py-md-4">
                  <Col
                    lg={2}
                    sm={3}
                    xs={6}
                    className="d-flex justify-content-center py-sm-0 py-3"
                  >
                    <img
                      className="w-100"
                      style={{ maxWidth: "187px" }}
                      src={redBull}
                      alt="img"
                    />
                  </Col>
                  <Col
                    lg={2}
                    sm={3}
                    xs={6}
                    className="d-flex justify-content-center py-sm-0 py-3"
                  >
                    <img
                      className="w-100"
                      style={{ maxWidth: "266px" }}
                      src={prenod}
                      alt="img"
                    />
                  </Col>
                  <Col
                    lg={2}
                    sm={3}
                    xs={6}
                    className="d-flex justify-content-center py-sm-0 py-3"
                  >
                    <img
                      className="w-100"
                      style={{ maxWidth: "63px" }}
                      src={kfc}
                      alt="img"
                    />
                  </Col>
                  <Col
                    lg={2}
                    sm={3}
                    xs={6}
                    className="d-flex justify-content-center py-sm-0 py-3"
                  >
                    <img
                      className="w-100"
                      style={{ maxWidth: "188px" }}
                      src={Halewood}
                      alt="img"
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={12} className="pb-md-5">
                <Row className="align-items-center justify-content-between py-md-4">
                  <Col
                    lg={2}
                    sm={3}
                    xs={6}
                    className="d-flex justify-content-center py-sm-0 py-3"
                  >
                    <img
                      className="w-100"
                      style={{ maxWidth: "194px" }}
                      src={BeamSuntory}
                      alt="img"
                    />
                  </Col>
                  <Col
                    sm={2}
                    xs={6}
                    className="d-flex justify-content-center py-sm-0 py-3"
                  >
                    <img
                      className="w-100"
                      style={{ maxWidth: "79px" }}
                      src={sab}
                      alt="img"
                    />
                  </Col>
                  <Col
                    sm={2}
                    xs={6}
                    className="d-flex justify-content-center py-sm-0 py-3"
                  >
                    <img
                      className="w-100"
                      style={{ maxWidth: "187px" }}
                      src={edrington}
                      alt="img"
                    />
                  </Col>
                  <Col
                    sm={2}
                    xs={6}
                    className="d-flex justify-content-center py-sm-0 py-3"
                  >
                    <img
                      className="w-100"
                      style={{ maxWidth: "79px" }}
                      src={burgerKing}
                      alt="img"
                    />
                  </Col>
                  <Col
                    lg={2}
                    sm={3}
                    xs={6}
                    className="d-flex justify-content-center py-sm-0 py-3"
                  >
                    <img
                      className="w-100"
                      style={{ maxWidth: "203px" }}
                      src={campariGroup}
                      alt="img"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div
            className="mx-auto companyDetail d-flex justify-content-between align-items-center bg_red px_75_72 py-2 br_25 px-3 mb-sm-4"
            style={{ maxWidth: "670px" }}
          >
            <div className="pt-1 pb-4">
              <h4 className="text-center ff_inter fw-semibold fs_5xl clr_white mb-0">
                6
              </h4>
              <h3 className=" ff_inter text-center fw-normal fs_md clr_fadeWhite mb-0">
                Products
              </h3>
            </div>
            <div className="pt-1 pb-4">
              <h4 className="text-center ff_inter fw-semibold fs_5xl clr_white mb-0">
                5
              </h4>
              <h3 className=" ff_inter text-center fw-normal fs_md clr_fadeWhite mb-0">
                Countries
              </h3>
            </div>
            <div className="pt-1 pb-4">
              <h4 className="text-center ff_inter fw-semibold fs_5xl clr_white mb-0">
                50+
              </h4>
              <h3 className=" ff_inter text-center fw-normal fs_md clr_fadeWhite mb-0">
                Employees
              </h3>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Relationship;
