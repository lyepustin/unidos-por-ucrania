import { useTranslation } from "next-i18next";

export default () => {
  const { t } = useTranslation();
  return (
    <div id="hero-area">
      {/* <div id="hero-area" className="hero-area section"> */}
      {/* <!--Hero Slider--> */}
      <div className="hero-slider">
        {/* <!--Hero Slide Item Start--> */}
        <div className="hs-item" style={{ backgroundImage: "url(images/heroBackgroud.jpg)" }}>
          <div className="container">
            <div className="row">
              {/* <!--Hero Slide Content--> */}
              <div className="hs-item-wrapper col-12 d-flex">
                <div className="row">
                  <div className="col-xl-8 col-lg-6 col-md-8 col-9 offset-lg-1 offset-xxl-0">
                    <div className="hs-content">
                      <h2>{t("human effort")}</h2>
                      <h1>{t("how we are")}</h1>
                      <p>{t("our mission")}</p>
                      <a href="#about-area" data-scroll className="btn btn-xlg">
                        {t("join with us")} <i className="zmdi zmdi-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hs-image">
                  <img className="img-fluid" src="images/hero.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="hs-item" style={{ "background-image": "url(img/hero/2.jpg)" }}>
          <div className="container">
            <div className="row">
              <div className="hs-item-wrapper col-12 d-flex">
                <div className="row">
                  <div className="col-xl-8 col-lg-6 col-md-8 col-9 offset-lg-1 offset-xxl-0">
                    <div className="hs-content">
                      <h2>join with us !</h2>
                      <h1>We are tring to make city again</h1>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text.{" "}
                      </p>
                      <a href="#about-area" data-scroll className="btn btn-xlg">
                        join with us <i className="zmdi zmdi-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hs-image">
                  <img className="img-fluid" src="img/hero/1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
