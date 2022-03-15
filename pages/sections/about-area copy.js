import { useTranslation } from "next-i18next";
const AboutArea = () => {
  const { t } = useTranslation();
  return (
    <div id="about-area" className="about-area section pb-40 pt-10">
      <div className="container">
        <div className="row">
          <div className="about-content col-lg-12 col-12">
            <img src="img/icon/flag.png" alt="" />
            {/* <h4>Hello!</h4> */}
            <h2>
              {t("we are")} <i>{t("united for Ukraine")}</i>.
            </h2>
            <p>{t("mission")}</p>
            <a href="#">
              {t("about")} <i className="zmdi zmdi-long-arrow-right"></i>
            </a>
          </div>
          <div className="about-image col-lg-6 col-12">
            <img src="img/about.jpg" alt="" />
          </div>
          <div className="about-image col-lg-6 col-12">
            <img src="img/about.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
