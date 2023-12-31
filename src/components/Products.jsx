import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import trueData from "../assets/img/svg/trueData.svg";
import repforce from "../assets/img/svg/repforce.svg";
import assetforce from "../assets/img/svg/assetforce.svg";
import assetforceImg from "../assets/img/webp/assetforce.webp";
import trueDataImg from "../assets/img/webp/trueData.webp";
import repforceImg from "../assets/img/webp/repforce.webp";
import easyHr from "../assets/img/svg/easyhr.svg";
import easyHrImg from "../assets/img/webp/easyHr.webp";
import arivu from "../assets/img/svg/arivu.svg";
import Zoosh from "../assets/img/svg/zoosh.svg";
import ZooshImg from "../assets/img/webp/ZooshImg.webp";
import arivuImg from "../assets/img/webp/arivu.webp";
import bgEasyhr from "../assets/img/webp/cardEasyhrbg.webp";
import coldDrink from "../assets/img/webp/drinkGlass.webp";
const Products = () => {
  return (
    <>
      <section className="py-sm-5">
        <Container className="py-5 productsContainer">
          <h3
            className="ff_inter fw-bold fs_8x5l clr_brownBlack text-center pb-4 mb-0"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            Our products.
          </h3>
          <p
            className="maxW872 mx-auto ff_inter fw-normal fs_xl lh_200 clr_gray text-center pb-xl-5"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            We exclusively create and build B2B software. This specialization
            has helped us build unmatched deep domain expertise for global fit
            and scale.
          </p>
          <Row>
            <Col lg={6} className="px-4 py-md-5 pt-sm-4 py-2 ">
              <div
                className="trueData cursiorPointer porductCards br_25 overflow-hidden h-100 d-flex flex-column justify-content-between position-relative"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="productData position-relative z-2">
                  <img src={trueData} alt="img" />
                  <h3 className="pt-4 mt-3 mb-3 pb-1 ff_inter fw-bold fs_3xl lh_190 clr_brownBlack letterN1">
                    Data Unifying & Analytics Platform
                  </h3>
                  <p className="ff_inter fw-normal fs_md clr_gray lh_190 mb-0">
                    Basecamp software to automate the collation, cleaning,
                    integrating and visualising for all of your businesses
                    market facing sales data across all channels.
                  </p>
                </div>
                <img className="w-100" src={trueDataImg} alt="img" />
              </div>
            </Col>
            <Col lg={6} className="px-4 py-md-5 pt-sm-4 py-2 ">
              <div
                className="repforce cursiorPointer porductCards br_25 overflow-hidden h-100 d-flex flex-column justify-content-between"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="productData position-relative z-2">
                  <img src={repforce} alt="img" />
                  <h3 className="pt-4 mt-3 mb-3 pb-1 ff_inter fw-bold fs_3xl lh_190 clr_brownBlack letterN1">
                    Field Sales Automation Software
                  </h3>
                  <p className="ff_inter fw-normal fs_md clr_gray lh_190 mb-0">
                    Provides superior field sales routing capability, retail
                    execution management and sales order integration for mobile
                    workforces within businesses.
                  </p>
                </div>
                <img
                  className="w-100 mt_N172 mt_N226 mt_N72 position-relative z-0"
                  src={repforceImg}
                  alt="img"
                />
              </div>
            </Col>
            <Col lg={6} className="px-4 py-md-5 pt-sm-4 py-2 ">
              <div
                className="assetforce cursiorPointer porductCards br_25 overflow-hidden h-100 d-flex flex-column justify-content-between"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="productData position-relative z-2">
                  <img src={assetforce} alt="img" />
                  <h3 className="pt-4 mt-3 mb-3 pb-1 ff_inter fw-bold fs_3xl lh_190 clr_brownBlack letterN1">
                    Facility & Maintenance Management Software
                  </h3>
                  <p className="ff_inter fw-normal fs_md clr_gray lh_190 mb-0 maxW508">
                    Web and mobile-based CMMS software that offers asset
                    management, downtime tracking & workflow automation
                    solutions of businesses.
                  </p>
                </div>
                <img
                  className="w-100 mt_N140 mt_N190 mt_N72 position-relative z-0"
                  src={assetforceImg}
                  alt="img"
                />
              </div>
            </Col>
            <Col lg={6} className="px-4 py-md-5 pt-sm-4 py-2 ">
              <div
                className="easyHr cursiorPointer porductCards br_25 overflow-hidden h-100 d-flex flex-column justify-content-between position-relative easyhrBgImg"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                <div className="productData position-relative z-2">
                  <img src={easyHr} alt="img" />
                  <h3 className="pt-4 mt-3 mb-3 pb-1 ff_inter fw-bold fs_3xl lh_190 clr_brownBlack letterN1">
                    HR Management Software
                  </h3>
                  <p className="ff_inter fw-normal fs_md clr_gray lh_190 mb-0 maxW508">
                    Human resource software solution that combines several
                    systems and processes to manage and optimize daily HR tasks
                    and the overall HR goals of a given organization.
                  </p>
                </div>
                <img
                  className="w-100 mt_N140 mt_N190 mt_N72 position-relative z-0"
                  src={easyHrImg}
                  alt="img"
                />
                <img
                  style={{ maxWidth: "122px" }}
                  className="position-absolute end-0 top_20 z-0"
                  src={bgEasyhr}
                  alt="img"
                />
              </div>
            </Col>
            <Col lg={6} className="px-4 py-md-5 pt-sm-4 py-2 ">
              <div
                className="Zoosh cursiorPointer porductCards br_25 overflow-hidden h-100 d-flex flex-column justify-content-between position-relative z-2"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                <div className="productData position-relative z-2">
                  <img src={Zoosh} alt="img" />
                  <h3 className="pt-4 mt-3 mb-3 pb-1 ff_inter fw-bold lh_190 fs_3xl clr_brownBlack letterN1">
                    Gig Economy for Activations
                  </h3>
                  <p className="ff_inter fw-normal fs_md clr_gray lh_190 mb-0 maxW508">
                    Interconnected ecosystem for promotions management. Where
                    brands and agencies promote products and capture consumer
                    feedback and behaviour.
                  </p>
                </div>
                <img
                  className="w-100 position-relative z-0"
                  src={ZooshImg}
                  alt="img"
                />
                <img
                  style={{ maxWidth: "149px" }}
                  className="position-absolute end-0 top-0 z-0"
                  src={coldDrink}
                  alt="img"
                />
              </div>
            </Col>
            <Col lg={6} className="px-4 py-md-5 pt-sm-4 py-2 ">
              <div
                className="arivu cursiorPointer porductCards br_25 overflow-hidden h-100 d-flex flex-column justify-content-between"
                data-aos="zoom-in"
                data-aos-delay="1200"
              >
                <div className="productData position-relative z-2">
                  <img src={arivu} alt="img" />
                  <h3 className="pt-4 mt-3 mb-3 pb-1 ff_inter fw-bold lh_190 fs_3xl clr_brownBlack letterN1">
                    Learning Management Software
                  </h3>
                  <p className="ff_inter fw-normal fs_md clr_gray lh_190 mb-0 maxW508">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <img
                  className="w-100 mt_N172 mt_N72 mt_N226 position-relative z-0"
                  src={arivuImg}
                  alt="img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Products;
