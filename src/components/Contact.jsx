import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <>
      <section className="bg_brownBlack py-sm-5">
        <Container className="contactContainer py-sm-5 my-lg-5">
          <div className="py-5 my-md-5"></div>
          <Row className="align-items-center justify-content-between">
            <Col xl={4} lg={6}>
              <div className="position-relative">
                <h3 className="ff-inter fw-bold position-relative z-1 fs_7x5l clr_white mb-2">
                  Let’s Talk
                </h3>
                <h4 className='position-absolute z-0 top-50 ff_inter fw-bold fs_2xxl contactBg'>Contact</h4>
              </div>
              <p className="ff_inter fw-normal fs_xl lh_200 clr_fadeWhite pt-5">
                We would love to hear from you. Fill out the form or contact us
                sending an email to.
              </p>
              <a
                className="ff_inter fw-bold fs_2x5l clr_red d-block pb-lg-3 mb-3"
                href="contact@eyona.co"
              >
                contact@eyona.co
              </a>
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.26433 28.7545H0.102661V8.21558H6.26433V28.7545ZM28.8571 28.7545H22.6955V17.7826C22.6955 14.9236 21.6767 13.5002 19.6578 13.5002C18.0578 13.5002 17.0431 14.2971 16.5338 15.893V28.7545H10.3721C10.3721 28.7545 10.4543 10.2695 10.3721 8.21558H15.2357L15.6116 12.3234H15.7389C17.0021 10.2695 19.021 8.87693 21.7897 8.87693C23.8949 8.87693 25.5976 9.46229 26.8977 10.9329C28.206 12.4055 28.8571 14.3814 28.8571 17.1562V28.7545Z"
                  fill="white"
                  fill-opacity="0.15"
                />
                <path
                  d="M3.18353 6.16167C4.94175 6.16167 6.36706 4.78233 6.36706 3.08084C6.36706 1.37934 4.94175 0 3.18353 0C1.42532 0 0 1.37934 0 3.08084C0 4.78233 1.42532 6.16167 3.18353 6.16167Z"
                  fill="white"
                  fill-opacity="0.15"
                />
              </svg>
            </Col>
            <Col lg={5} className='position-relative z-2 pt-lg-0 pt-3'>
              <input
                className="w-100 border-0 bg-transparent borderbottomInputs p-3 mb-4"
                type="text"
                name="Your Name"
                placeholder="Your Name"
              />
              <input
                className="w-100 border-0 bg-transparent borderbottomInputs p-3 mb-4"
                type="text"
                placeholder="Your Email"
              />
              <textarea
                className="w-100 border-0 bg-transparent borderbottomInputs p-3 mt-2 mb-3"
                placeholder="What would you like to know?"
                rows="4"
              ></textarea>
              <button className="bg_red rounded-pill messageBtn py-3 px_29_22 border-0 ff_montserrat fw-bold fs_lg clr_white letter10 lh_115 mt-4">
                Send Message
              </button>
            </Col>
          </Row>
          <div className="py-5 my-md-5"></div>
        </Container>
      </section>
    </>
  );
}

export default Contact