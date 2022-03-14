import { useTranslation } from "next-i18next";

export default () => {
  const info = {
    "pick-up points": 3,
    "pick-up city": 3,
    "logistics centres": 2,
    "boxes recived": 2000,
    "trucks sent": 2,
    "palets sent": 66,
    "boxes sent": 1518
  };
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const { t } = useTranslation();
  return (
    <div id="service-area" className="service-area section pb-40 pt-40">
      <div className="container">
        <div className="row">
          <div className="section-title text-start col-12 mb-20">
            <h4>{t("interesting facts")}</h4>
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
            <p>{t("pick-up info", { points: info["pick-up points"], city: info["pick-up city"] })}</p>
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
            <h4>{t("logistics centers")}</h4>
            <p>{t("logistics centers info", { centres: info["logistics centres"] })}</p>
          </div>

          <div id="supplies" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{
                backgroundImage: "url('images/sections/package.png')",
                height: "58px",
                width: "57px"
              }}
            ></span>
            <h4>{t("humanitarian supplies")}</h4>
            <p>{t("humanitarian supplies date")}</p>
            <dl>
              {t("")}
              <dt>{t("humanitarian supplies recive")}</dt>
              <dd>- {t("humanitarian supplies recive data", { boxes: info["boxes recived"] })}</dd>
              <dt>{t("humanitarian supplies sent")}</dt>
              <dd>- {t("humanitarian supplies sent data trailer", { trailers: info["trucks sent"] })}</dd>
              <dd>- {t("humanitarian supplies sent data palets", { palets: info["palets sent"] })}</dd>
              <dd>- {t("humanitarian supplies sent data boxs", { boxes: info["boxes sent"] })}</dd>
            </dl>
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
            <h4>{t("associations")}</h4>
            <p>
              Pretendemos dar a conocer el trabajo y colaboración de las <b>I</b> asociaciones en la ayuda a Ucrania por
              la invasión rusa.
            </p>
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
            <h4>{t("partnership network")}</h4>
            <p>
              Agradecemos el apoyo de todos los <b>J</b> colaboradores y empresas que hacen posible nuestro trabajo.
            </p>
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
            <h4>{t("volunteers")}</h4>
            <p>
              Gracias a la colaboración de nuestros <b>K</b> voluntarios, podemos ayudar a Ucrania a resistir la
              invasión rusa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
