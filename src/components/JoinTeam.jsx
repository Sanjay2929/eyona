import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import peopleImg from "../assets/img/webp/peopleimg.webp";
const JoinTeam = () => {
  return (
    <>
      <section className="pt-5 joinTeamCircle position-relative">
        <Container className="joinTeamContainer pt-md-5 mt-xl-5 position-relative z-2">
          <h3
            className="text-center ff_inter fw-bold fs_8x5l clr_brownBlack lh_115 mx-auto pb-md-5 pt-sm-5"
            style={{ maxWidth: "1438px" }}
          >
            Join the <span className="clr_red">eyona</span> team and find out
            where the
            <span className="trueMagic"> true magic </span>
            happens!
          </h3>
          <div style={{ maxWidth: "1071px" }} className="pt-sm-5 pt-4">
            <p className="ff_inter fw-normal fs_xl clr_gray lh_200 mb-4">
              pIt doesn’t matter where you come from, how you look or any other
              aspect about yourself. If you’re pssionate about what you do, we
              can’t wait to meet you.
            </p>
            <p className="ff_inter fw-normal fs_xl clr_gray lh_200 mb-2 pb-md-5">
              We are always looking for people, who put customers at the
              forefront. If you are seeking a culture with high performance
              standards that loves to create and build things with exceptional
              people, then Eyona may be the fit for you.
            </p>
            <button className="bg_red btnHover rounded-pill messageBtn py-3 px_30_18 border-0 ff_montserrat fw-bold fs_lg clr_white letter10 lh_115 mt-4">
              Send Us A Message
            </button>
          </div>
        </Container>
        <Row className="justify-content-end align-items-center marginTopN195 mt_N90 pt-lg-0 pt-5">
          <Col lg={4}>
            <a
              className="d-block text-center ff_inter fw-bold fs_3xl clr_red lh_150"
              href="recruitment@eyona.co"
            >
              recruitment@eyona.co
            </a>
          </Col>
          <Col lg={6}>
            <img className="w-100" src={peopleImg} alt="img" />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default JoinTeam;
