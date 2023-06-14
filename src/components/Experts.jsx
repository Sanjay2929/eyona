import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import expert1 from "../assets/img/webp/expert1.webp";
import expert2 from "../assets/img/webp/expert2.webp";
import expert3 from "../assets/img/webp/expert3.webp";
import expert4 from "../assets/img/webp/expert4.webp";
import B2B from "../assets/img/svg/B2B.svg";
import ecosystem from "../assets/img/svg/ecoSystem.svg";
import industry from "../assets/img/svg/IndustrySpecific.svg";
import Globally from "../assets/img/svg/Globally.svg";
const Experts = () => {
  return (
    <>
      <section className="py-5">
        <Container className="expertContainer py-5">
          <h3 className="ff_inter fw-bold fs_2xxl clr_black lh_115 mb-0">
            Eyona are
          </h3>
          <h3 className="ff_inter fw-bold fs_15xl clr_red text-end lh_115">
            <span className="WorldClass clr_white lh_115"> World Class </span>
            Experts
          </h3>
          <Row className="mx-xxl-5  justify-content-center py-md-5 mt-sm-5 pt-4 flex-wrap-reverse">
            <Col lg={5} className="pt-lg-0 pt-sm-4 pt-2">
              <p className="fw-normal ff_montserrat fs_2x5l lh_170 clr_gray pt-xl-5 mt-xl-5 me_N20">
                We create
                <a className="fw-bold clr_red" href="#">
                  SaaS products
                </a>
                for markets that have the ability to generate substantial annual
                recurring revenue (ARR). Leveraging big data and automating
                matket facing business processes.
              </p>
            </Col>
            <Col lg={6}>
              <div class="d-grid  grid_temp">
                <div class="grid-items grid-item1 object-fit-cover overflow-hidden">
                  <img className="w-100 h-100" src={expert1} alt="img" />
                </div>
                <div class="grid-items grid-item2 object-fit-cover overflow-hidden">
                  <img className="w-100 h-100" src={expert2} alt="img" />
                </div>
                <div class="grid-items grid-item3 object-fit-cover overflow-hidden">
                  <img className="w-100 h-100" src={expert3} alt="img" />
                </div>
                <div class="grid-items grid-item4 object-fit-cover overflow-hidden">
                  <img className="w-100 h-100" src={expert4} alt="img" />
                </div>
              </div>
            </Col>
          </Row>
          <Row className=" justify-content-around align-items-end">
            <Col lg={5} md={6} className="pb-md-5 py-4">
              <div className="expertiseImg bg_brownBlack d-flex justify-content-center align-items-center">
                <img className="w_md_100 w-50 w_103" src={B2B} alt="img" />
              </div>
              <h3 className="ff_montserrat fw-bold fs_4xl clr_brownBlack pt-4 pb-3 mt-2">
                B2B Software
              </h3>
              <p className="fw-normal fs_xl ff_montserrat clr_gray maxW550 lh_200 mb-md-5 pb-md-5">
                Our products are the forefront of the industry, creating
                streamlined processing for your business needs.
              </p>
            </Col>
            <Col xxl={4} xl={5} md={6} className="py-md-0 py-4">
              <div className="expertiseImg bg_brownBlack d-flex justify-content-center align-items-center">
                <img className="w_md_100 w-50 w_103" src={ecosystem} alt="img" />
              </div>
              <h3 className="ff_montserrat fw-bold fs_4xl clr_brownBlack pt-4 pb-3 mt-2">
                Eco-system Ownership
              </h3>
              <p className="fw-normal fs_xl ff_montserrat clr_gray maxW550 lh_200">
                We provide ourselves on making our products easy to use and
                personalised for your business needs.
              </p>
            </Col>
            <Col lg={5} md={6} className="py-md-5 py-4">
              <div className="expertiseImg bg_brownBlack d-flex justify-content-center align-items-center">
                <img className="w_md_100 w-50 w_135" src={Globally} alt="img" />
              </div>
              <h3 className="ff_montserrat fw-bold fs_4xl clr_brownBlack pt-4 pb-3 mt-2">
                Globally Relevant
              </h3>
              <p className="fw-normal fs_xl ff_montserrat clr_gray maxW550 lh_200 mb-md-5 pb-md-5">
                All our software if fit for purpose and easy to scale across
                your organisation in any country.
              </p>
            </Col>
            <Col xxl={4} xl={5} md={6} className="py-md-0 py-4">
              <div className="expertiseImg bg_brownBlack d-flex justify-content-center align-items-center">
                <img className="w_md_100 w_103 w-50" src={industry} alt="img" />
              </div>
              <h3 className="ff_montserrat fw-bold fs_4xl clr_brownBlack pt-4 pb-3 mt-2">
                Industry Specific
              </h3>
              <p className="fw-normal fs_xl ff_montserrat clr_gray maxW550 lh_200">
                Our products are predominately tailored for a specific vertical
                or industry. We empower domain experts, to ensure you the best
                results.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Experts;
