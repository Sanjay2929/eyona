import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import magicImg from "../assets/img/webp/magicSecImg.webp";
const Magic = () => {
  return (
    <>
      <section className="py-5 magicCircle position-relative">
        <Container className="magicContainer py-xl-5 mt-md-5 mb-md-4 position-relative z-2">
          <Row className="align-items-center ps-xxl-5 me-xxl-4 py-md-5 mt-3 justify-content-center flex-wrap-reverse">
            <Col xl={6} xs={12} className="pb-xl-5 pt-xl-0 pt-4">
              <h3 className="ff_inter fw-bold clr_brownBlack fs_8x5l lh_115 pb-4 mb-2">
                How we make <span className='clr_red'>magic</span> happen.
              </h3>
              <p className="ff_inter fw-normal fs_xl lh_200 clr_gray pe-xxl-5 pt-1 mb-xxl-4 pb-2">
                We seek breakthroughs that will stand the test of time. We keep
                experimenting that's how we innovate. Innovation we believe is
                admired but execution is worshipped. We love the problem and
                pain point and hence the journey more than the destination. We
                are constantly improving and meticulously refining our products
                foundation that has been built, and that is what we believe
                makes us great.
              </p>
              <p className="ff_inter fw-normal fs_xl lh_200 clr_gray pe-xxl-5 mb-0">
                We are passionately curious as we believe this is the fuel for
                discovery, inquiry and learning. Our main objective is to be
                customer obsessed and build products that are everyday utilities
                for businesses.
              </p>
            </Col>
            <Col xl={6} md={8}>
              <img className="w-100" src={magicImg} alt="img" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Magic