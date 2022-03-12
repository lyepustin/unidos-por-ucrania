import { useTranslation } from "next-i18next";

export default () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const { t } = useTranslation();
  return (
    <div id="service-area" className="service-area section pb-65 pt-110">
      <div className="container">
        <div className="row">
          <div className="section-title text-start col-12 mb-70">
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
            <p>
              Existen un total de <b>A</b> puntos de recogida de material humanitario.
            </p>
            <p>
              Existen un total de <b>B</b> cuidades con puntos de recogida de material humanitario.
            </p>
          </div>

          <div id="logistic" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{ backgroundImage: "url('images/sections/logistic.png')", height: "58px", width: "57px" }}
            ></span>
            <h4>{t("logistics centers")}</h4>
            <p>
              Disponemos de <b>C</b> centros de logística, donde se realizan las operaciones de almacenaje,
              procesamiento y empaquetado de ayuda material humanitario.
            </p>
          </div>

          <div id="supplies" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{ backgroundImage: "url('images/sections/package.png')", height: "58px", width: "57px" }}
            ></span>
            <h4>{t("humanitarian supplies")}</h4>
            <p>A día de {date} se han:</p>
            <dl>
              <dt>Recibido y procesado</dt>
              <dd>
                - Más de 2000 <b>D</b> cajas de material humanitario
              </dd>
              <dt>Enviado a Ucrania</dt>
              <dd>
                - 2 <b>E</b> tráiler completos.{" "}
              </dd>
              <dd>
                - 66 <b>F</b> palets de material humanitario (33 por tráiler){" "}
              </dd>
              <dd>
                - 1518 <b>H</b> cajas de material humanitario (23 por palet){" "}
              </dd>
            </dl>
          </div>

          <div id="association" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{ backgroundImage: "url('images/sections/association.png')", height: "65px", width: "57px" }}
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
              style={{ backgroundImage: "url('images/sections/partnerships.png')", height: "50px", width: "56px" }}
            ></span>
            <h4>{t("partnership network")}</h4>
            <p>
              Agradecemos el apoyo de todos los <b>J</b> colaboradores y empresas que hacen posible nuestro trabajo.
            </p>
          </div>

          <div id="volunteers" className="single-service col-lg-4 col-md-6 col-12 mb-45">
            <span
              className="image"
              style={{ backgroundImage: "url('images/sections/volunteers.png')", height: "57px", width: "57px" }}
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
