import { useTranslation } from "next-i18next";
import Database from "data/bbdd";

const Service = () => {
  const current = new Date();
  const ActualDatabase = Database();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const { t } = useTranslation();
  return (
    <div
      id="service-area"
      className="service-area section pb-40 pt-40 relative"
    >
      <div id="service-area-anchor" className="absolute top-[-123px]" />
      <div className="container">
        <div className="row">
          <div className="section-title text-start col-12 mb-20">
            <h4>{t("interesting facts")}</h4>
          </div>
        </div>

        <div className="row">
          <div
            id="geo"
            className="single-service col-lg-4 col-md-6 col-12 mb-45"
          >
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/geo.png')",
                height: "52px",
                width: "57px",
              }}
            ></span>
            <h4>{t("pick-up")}</h4>
            <p>
              {t("pick-up info", {
                points: ActualDatabase["pick-up points"],
                city: ActualDatabase["pick-up city"],
              })}
            </p>
          </div>

          <div
            id="logistic"
            className="single-service col-lg-4 col-md-6 col-12 mb-45"
          >
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/logistic.png')",
                height: "58px",
                width: "57px",
              }}
            ></span>
            <h4>{t("logistics centers")}</h4>
            <p>
              {t("logistics centers info", {
                centres: ActualDatabase["logistics centres"],
              })}
            </p>
          </div>

          <div
            id="supplies"
            className="single-service col-lg-4 col-md-6 col-12 mb-45"
          >
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/package.png')",
                height: "58px",
                width: "57px",
              }}
            ></span>
            <h4>{t("humanitarian supplies")}</h4>
            <p>{t("humanitarian supplies date")}</p>
            <dl>
              <dt>{t("humanitarian supplies recive")}</dt>
              <dd>
                -{" "}
                {t("humanitarian supplies recive data", {
                  boxes: ActualDatabase["boxes recived"],
                })}
              </dd>
              <dt>{t("humanitarian supplies sent")}</dt>
              <dd>
                -{" "}
                {t("humanitarian supplies sent data trailer", {
                  trailers: ActualDatabase["trucks sent"],
                })}
              </dd>
              <dd>
                -{" "}
                {t("humanitarian supplies sent data palets", {
                  palets: ActualDatabase["palets sent"],
                })}
              </dd>
              <dd>
                -{" "}
                {t("humanitarian supplies sent data boxs", {
                  boxes: ActualDatabase["boxes sent"],
                })}
              </dd>
            </dl>
          </div>

          <div
            id="association"
            className="single-service col-lg-4 col-md-6 col-12 mb-45"
          >
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/association.png')",
                height: "65px",
                width: "57px",
              }}
            ></span>
            <h4>{t("associations")}</h4>
            <p>
              {t("associations text", {
                boxes: ActualDatabase["number of associations"],
              })}
            </p>
          </div>

          <div
            id="partnerships"
            className="single-service col-lg-4 col-md-6 col-12 mb-45"
          >
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/partnerships.png')",
                height: "50px",
                width: "56px",
              }}
            ></span>
            <h4>{t("partners")}</h4>
            <p>
              {t("partners text", {
                partners: ActualDatabase["number of partners"],
              })}
            </p>
          </div>

          <div
            id="volunteers"
            className="single-service col-lg-4 col-md-6 col-12 mb-45"
          >
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/volunteers.png')",
                height: "57px",
                width: "57px",
              }}
            ></span>
            <h4>{t("volunteers")}</h4>
            <p>
              {t("volunteers text", {
                volunteers: ActualDatabase["number of volunteers"],
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
