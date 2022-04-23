import { useTranslation } from "next-i18next";
import Database from "data/bbdd";

const Service = () => {
  const current = new Date();
  const ActualDatabase = Database();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const { t } = useTranslation();
  return (
    <div id="service-area" className="service-area section pb-40 pt-40 relative">
      <div id="service-area-anchor" className="absolute top-[-123px]" />
      <div className="container">
        <div className="row">
          <div className="section-title text-start col-12 mb-20">
            <h4>{t("interesting facts")}</h4>
          </div>
        </div>

        <div className="row">
          <div id="events" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/event.png')",
                height: "52px",
                width: "57px"
              }}
            ></span>
            <div
              style={{
                lineHeight: "13px",
                marginBottom: "14px"
              }}
            >
              <div className="text-3xl font-bold text-gray-800 mr-2">{ActualDatabase["events"]}</div>

              <div className="text-xl text-gray-500">{t("events")}</div>
            </div>
            <p>{t("events info")}</p>
          </div>

          <div id="pick-up" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/geo.png')",
                height: "52px",
                width: "57px"
              }}
            ></span>
            <div
              style={{
                lineHeight: "13px",
                marginBottom: "14px"
              }}
            >
              <div className="text-3xl font-bold text-gray-800 mr-2">{ActualDatabase["pick-up points"]}</div>

              <div className="text-xl text-gray-500">{t("pick-up")}</div>
            </div>
            <p>{t("pick-up info")}</p>
          </div>

          <div id="supplies" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/package.png')",
                height: "58px",
                width: "57px",
                paddingBottom: "40px"
              }}
            ></span>
            <div
              style={{
                lineHeight: "13px",
                marginBottom: "14px"
              }}
            >
              <div className="text-3xl font-bold text-gray-800 mr-2">+{ActualDatabase["boxes recived"]}</div>
              <div className="text-xl text-gray-500">{t("humanitarian supplies info")}</div>
            </div>

            <p>{t("humanitarian supplies recived")}</p>
          </div>

          <div id="logistic" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/logistic.png')",
                height: "58px",
                width: "57px"
              }}
            ></span>
            <div
              style={{
                lineHeight: "13px",
                marginBottom: "14px"
              }}
            >
              <div className="text-3xl font-bold text-gray-800 mr-2">+{ActualDatabase["boxes sent"]}</div>
              <div className="text-xl text-gray-500">{t("humanitarian supplies info")}</div>
            </div>

            <p>{t("humanitarian supplies sent")}</p>
          </div>

          <div id="palets" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/palet.png')",
                height: "57px",
                width: "55px"
              }}
            ></span>
            <div
              style={{
                lineHeight: "13px",
                marginBottom: "14px"
              }}
            >
              <div className="text-3xl font-bold text-gray-800 mr-2">+{ActualDatabase["palets sent"]}</div>
              <div className="text-xl text-gray-500">{t("humanitarian supplies palets")}</div>
            </div>

            <p>{t("humanitarian supplies palets text")}</p>
          </div>

          <div id="trailers" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/trailer.png')",
                height: "50px",
                width: "151px"
              }}
            ></span>
            <div
              style={{
                lineHeight: "13px",
                marginBottom: "14px"
              }}
            >
              <div className="text-3xl font-bold text-gray-800 mr-2">+{ActualDatabase["trucks sent"]}</div>
              <div className="text-xl text-gray-500">{t("humanitarian supplies trailer")}</div>
            </div>

            <p>{t("humanitarian supplies trailer text")}</p>
          </div>

          <div id="destination" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/city.png')",
                height: "50px",
                width: "57px"
              }}
            ></span>
            <div
              style={{
                lineHeight: "13px",
                marginBottom: "14px"
              }}
            >
              <div className="text-3xl font-bold text-gray-800 mr-2">+{ActualDatabase["destinations"].length}</div>
              <div className="text-xl text-gray-500">{t("humanitarian supplies destination")}</div>
            </div>

            <p>{t("humanitarian supplies destination text")}</p>
          </div>

          <div id="association" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/association.png')",
                height: "65px",
                width: "57px"
              }}
            ></span>
            <div
              style={{
                lineHeight: "13px",
                marginBottom: "14px"
              }}
            >
              <div className="text-3xl font-bold text-gray-800 mr-2">{ActualDatabase["number of associations"]}</div>
              <div className="text-xl text-gray-500">{t("associations")}</div>
            </div>

            <p>{t("associations text")}</p>
          </div>

          <div id="partnerships" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/partnerships.png')",
                height: "50px",
                width: "56px"
              }}
            ></span>
            <div
              style={{
                lineHeight: "13px",
                marginBottom: "14px"
              }}
            >
              <div className="text-3xl font-bold text-gray-800 mr-2">+{ActualDatabase["number of partners"]}</div>
              <div className="text-xl text-gray-500">{t("partners")}</div>
            </div>

            <p>{t("partners text")}</p>
          </div>

          <div id="volunteers" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/volunteers.png')",
                height: "57px",
                width: "57px"
              }}
            ></span>
            <div
              style={{
                lineHeight: "13px",
                marginBottom: "14px"
              }}
            >
              <div className="text-3xl font-bold text-gray-800 mr-2">+{ActualDatabase["number of volunteers"]}</div>
              <div className="text-xl text-gray-500">{t("volunteers")}</div>
            </div>

            <p>{t("volunteers text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
