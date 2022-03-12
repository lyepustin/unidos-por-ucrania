import { useTranslation } from "next-i18next";

export default () => {
  const { t } = useTranslation();
  return (
    <div id="service-area" className="service-area section pb-65 pt-110">
      <div className="container">
        <div className="row">
          <div className="section-title text-start col-12 mb-70">
            <h4>{t("interesting facts")}</h4>
            {/* <h2>Our Services for you</h2> */}
          </div>
        </div>

        <div className="row">
          <div id="geo" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/geo.png')",
                height: "52px",
                width: "57px"
              }}
            ></span>
            <h4>{t("pick-up")}</h4>
            <p>
              There are many variations of pges of Lorem Ipsu mavailable,but thhave suffered alteration insome form, by
              injected humoura
            </p>
          </div>

          <div id="logistic" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{ backgroundImage: "url('images/sections/logistic.png')", height: "58px", width: "57px" }}
            ></span>
            <h4>{t("logistics centers")}</h4>
            <p>
              There are many variations of pges of Lorem Ipsu mavailable,but thhave suffered alteration insome form, by
              injected humoura
            </p>
          </div>

          <div id="package" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{ backgroundImage: "url('images/sections/package.png')", height: "58px", width: "57px" }}
            ></span>
            <h4>{t("humanitarian supplies")}</h4>
            <p>
              There are many variations of pges of Lorem Ipsu mavailable,but thhave suffered alteration insome form, by
              injected humoura
            </p>
          </div>

          <div id="partnerships" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{ backgroundImage: "url('images/sections/partnerships.png')", height: "65px", width: "57px" }}
            ></span>
            <h4>Our Campaign</h4>
            <p>
              There are many variations of pges of Lorem Ipsu mavailable,but thhave suffered alteration insome form, by
              injected humoura
            </p>
          </div>

          <div id="partnerships" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span className="image" style={{ backgroundImage: "url('img/service/partners.png')" }}></span>
            <h4>Become a Volunteer</h4>
            <p>
              There are many variations of pges of Lorem Ipsu mavailable,but thhave suffered alteration insome form, by
              injected humoura
            </p>
          </div>

          <div className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span className="image" style={{ backgroundImage: "url('img/service/3.png')" }}></span>
            <h4>Donation</h4>
            <p>
              There are many variations of pges of Lorem Ipsu mavailable,but thhave suffered alteration insome form, by
              injected humoura
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
