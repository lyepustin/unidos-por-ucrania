import { useTranslation } from "next-i18next";
import Image from "next/image";
import heroPic from "/public/images/hero.jpg";
import Database from "data/bbdd";

const Hero = () => {
  const ActualDatabase = Database();
  const { t } = useTranslation();
  return (
    <div id="hero-area" className="hero-slider">
      <div className="hs-item" style={{ backgroundImage: "url(images/heroBackgroud.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="hs-item-wrapper col-12 d-flex">
              <div className="row">
                <div className="col-xl-8 col-lg-6 col-md-8 col-9 offset-lg-1 offset-xxl-0">
                  <div className="hs-content">
                    <h1>{t("how we are")}</h1>
                    <p>
                      {t("our mission")} {t("our help")}:{ActualDatabase["destinations"].map((e) => " " + e)}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="hs-image">
                <Image
                  src={heroPic}
                  alt="Picture of people loading a truck"
                  placeholder="blur" // Optional blur-up while loading
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
