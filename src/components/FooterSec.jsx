import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import footerLogo from "../assets/img/svg/footerLogo.svg";

const FooterSec = () => {
  return (
    <>
      <section className="bg_brownBlack py-sm-5 footerCircle position-relative overflow-hidden">
        <Container className="footerContainer py-5 mt-md-5 mb-md-4 position-relative z-2">
          <img className="mt-sm-5 cursiorPointer footerLogo" src={footerLogo} alt="logo" />
          <Row className=" justify-content-between pt-sm-5 pt-2 pb-4 mb-3 mt-2">
            <Col xxl={3} lg={4} sm={8}>
              <a
                className="ff_inter fw-bold fs_3x5l clr_red pb-4 mb-0 "
                href="#"
              >
                contact@eyona.co
              </a>
              <p className=" ff_inter fw-normal fs_md clr_EF lh_170 pt-1 mb-0 cursiorPointer">
                Terms & Conditions
              </p>
              <p className=" ff_inter fw-normal fs_md clr_EF lh_170 mb-0 cursiorPointer">
                Privacy Policy
              </p>
            </Col>
            <Col xxl={2} lg={3} sm={5} className="pt-lg-2 pt-4">
              <h3 className="ff_inter fw-bold fs_3x5l clr_white pb-3 mb-0 cursiorPointer">
                London
              </h3>
              <a className=" ff_inter fw-normal fs_md clr_EF lh_170 cursiorPointer" href="#">
                77 Farringdon Roadspan
                <span className="d-block l_h170"> London</span>
                EC1m 3JU
              </a>
            </Col>
            <Col xxl={2} lg={3} sm={5} className="pt-lg-2 pt-4">
              <h3 className="ff_inter fw-bold fs_3x5l clr_white pb-3 mb-0 cursiorPointer">
                Cape Town
              </h3>
              <a className=" ff_inter fw-normal fs_md clr_EF lh_170" href="#">
                4 Alphons way,
                <span className="d-block l_h170">Tokai, Cape Town,</span>
                Western Cape 7420, ZA
              </a>
            </Col>
          </Row>
          <svg
            className="in"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.26433 29.4906H0.102661V8.95166H6.26433V29.4906ZM28.8571 29.4906H22.6955V18.5187C22.6955 15.6597 21.6767 14.2363 19.6578 14.2363C18.0578 14.2363 17.0431 15.0332 16.5338 16.6291V29.4906H10.3721C10.3721 29.4906 10.4543 11.0056 10.3721 8.95166H15.2357L15.6116 13.0594H15.7389C17.0021 11.0056 19.021 9.61301 21.7897 9.61301C23.8949 9.61301 25.5976 10.1984 26.8977 11.669C28.206 13.1416 28.8571 15.1174 28.8571 17.8922V29.4906Z"
              fill="white"
              fill-opacity="0.15"
            />
            <path
              d="M3.18353 6.898C4.94175 6.898 6.36706 5.51866 6.36706 3.81716C6.36706 2.11567 4.94175 0.736328 3.18353 0.736328C1.42532 0.736328 0 2.11567 0 3.81716C0 5.51866 1.42532 6.898 3.18353 6.898Z"
              fill="white"
              fill-opacity="0.15"
            />
          </svg>
          <div className="py-lg-5 my-lg-5 h_150px d-md-block d-none"></div>
          <p className="pt-5 mb-sm-3 mb-0 ff_inter fw-normal fs_md clr_fadeWhite">
            © Copyright – eyona
          </p>
        </Container>
      </section>
    </>
  );
}

export default FooterSec