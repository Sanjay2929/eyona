import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Passion = () => {
  return (
    <>
      <section className="bg_red overflow-hidden py-xl-5 sect2Circle position-relative">
        <Container className="passionContainer py-5 my-lg-5 position-relative z-2">
          <div className="py-xxl-5 my-xxl-5"></div>
          <Row className="align-items-center py-sm-5 position-relative z-2">
            <Col lg={10} xs={12} data-aos="fade-right" data-aos-delay="100">
              <h4 className=" ff_montserrat fw-bold fs_5x5l clr_white pb-lg-5 pb-4  mb-0">
                It’s our passion. Our business. We love to see our customers
                reinventing themselves, people discovering their true potential
                and creating products to enable industries.
              </h4>
            </Col>
            <Col lg={8} xs={12} data-aos="fade-right" data-aos-delay="300">
              <p className="fw-medium fs_xl ff_montserrat clr_fadeWhite lh_200 pe-xxl-5 mb-0">
                To us innovation means: Seeing the bigger picture, striving for
                better insights, always curious, thinking the unthinkable, the
                impossible and then making it happen. In other words, we support
                our customers with the business and technology know-how they
                need to continuously improve and gain new advantages to win now
                and in the future.
              </p>
            </Col>
          </Row>
          <div className="py-xxl-5 my-xxl-5"></div>
          <div className="margin_bottomN140 position-absolute end-0 top_10 transformEyona z-0 opacityElona">
            <h3
              className="fs_45xl clr_white ff_inter fw-bolder lh_0"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              e
            </h3>
            <h3
              className="fs_45xl clr_white ff_inter fw-bolder"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              y
            </h3>
            <h3
              className="fs_45xl clr_white ff_inter fw-bolder lh_43"
              data-aos="fade-left"
              data-aos-delay="700"
            >
              o
            </h3>
            <h3
              className="fs_45xl clr_white ff_inter fw-bolder lh_83"
              data-aos="fade-left"
              data-aos-delay="900"
            >
              n
            </h3>
            <h3
              className="fs_45xl clr_white ff_inter fw-bolder lh_40"
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              a
            </h3>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Passion;
