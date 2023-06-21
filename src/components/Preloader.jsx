import React from "react";

const Preloader = () => {
  document.getElementById("overFlow_nav").classList.add("overflow_hidden");
  setTimeout(() => {
    document.getElementById("none").style.display = "none";
    document.getElementById("overFlow_nav").classList.remove("overflow_hidden");
  }, 3000);
  return (
    <>
      <section
        className="d_flex justify-content-center flex-column align-items-center min-vh-100 w-100 position-fixed top-0 start-0 z_1000 bg_brownBlack"
        id="none"
      >
        <div className="overflow-hidden animationPreloader2">
          <h3 className=" ff_montserrat fs_15xl clr_white fw-bold">
            WELCOME&nbsp;TO
          </h3>
        </div>
        <div className="animationPreloader">
          <h2 className=" ff_montserrat fs_2xxl clr_white fw-bold">EYONA</h2>
        </div>
      </section>
    </>
  );
};

export default Preloader;
