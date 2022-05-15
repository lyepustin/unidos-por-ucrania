import { useTranslation } from "next-i18next";
import Link from "next/link";

const AboutArea = () => {
  const { t } = useTranslation();
  return (
    <div id="blog-area" className="blog-area section pb-30 pt-30">
      <div className="container">
        <div className="row">
          <div className="section-title text-center col-12 mb-30">
            <h4>{t("members of the group")}</h4>
            <h2>
              <i>{t("united for Ukraine")}</i>
            </h2>
          </div>
        </div>

        <div id="members of the group" className="row">
          <div id="orihuela_asoc" className="col-lg-4 col-md-6 col-12 mb-30 blog-item">
            <Link href="https://www.informacion.es/vega-baja/2022/03/04/orihuela-ucrania-cafeteria-nueva-luna-63341552.html/">
              <a>
                <div className="content">
                  <div
                    className="assoc-item"
                    style={{ backgroundImage: "url(images/associations/orihuela.jpg)" }}
                  ></div>
                  <h4 className="text-center">Asociación Ucranianos Vega Baja</h4>
                  <div className="col-lg-5 col-12 mb-10 mt-30">
                    <iframe
                      id="contact-map"
                      style={{ border: "none" }}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.478166341644!2d-0.9492565494715597!3d38.082532302067115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63991f1941f6d7%3A0x5fb73c5d332e18ea!2sCaf%C3%A9%20La%20Luna!5e0!3m2!1ses!2ses!4v1652642154778!5m2!1ses!2ses"
                    ></iframe>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div id="beniel_asoc" className="col-lg-4 col-md-6 col-12 mb-30 blog-item">
            <Link href="https://www.facebook.com/groups/478681047074048">
              <a>
                <div className="content">
                  <div className="assoc-item" style={{ backgroundImage: "url(images/associations/beniel.jpg)" }}></div>
                  <h4 className="text-center">Asociación de Ucranianos de Beniel</h4>
                  <div className="col-lg-5 col-12 mb-10 mt-30">
                    <iframe
                      id="contact-map"
                      style={{ border: "none" }}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196.37699651532506!2d-1.0033592534612068!3d38.04634201317466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd639d7c579961c7%3A0x604fc90d025ab3c2!2sALEHUSHKA!5e0!3m2!1ses!2ses!4v1652642315563!5m2!1ses!2ses"
                    ></iframe>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div id="torrevieja_asoc" className="col-lg-4 col-md-6 col-12 mb-30 blog-item">
            <Link href="https://www.facebook.com/ucranianos.detorrevieja/">
              <a>
                <div className="content">
                  <div
                    className="assoc-item"
                    style={{ backgroundImage: "url(images/associations/torrevieja.jpg)" }}
                  ></div>
                  <h4 className="text-center">Asociación de Ucranianos de Torrevieja</h4>
                  <div className="col-lg-5 col-12 mb-10 mt-30">
                    <iframe
                      id="contact-map"
                      style={{ border: "none" }}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.985718329596!2d-0.674076383876049!3d37.9774626082435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63aa00b48ef091%3A0xe73d312bcfaeccee!2sC.%20de%20Pedro%20Lorca%2C%2003182%20Torrevieja%2C%20Alicante!5e0!3m2!1ses!2ses!4v1647346962390!5m2!1ses!2ses"
                    ></iframe>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          {/* <div id="example" className="col-lg-4 col-md-6 col-12 mb-30 blog-item">
            <div className="content">
              <div className="assoc-item" style={{ backgroundImage: "url(images/associations/a_u_t_1.jpg)" }}></div>
              <h4 className="text-center">
                <a href="https://www.facebook.com/ucranianos.detorrevieja/">Ucranianos de Torrevieja</a>
              </h4>
              <span className="author text-center">
                <a href="#">Contact person</a>
              </span>
              <div className="row">
                <div className="sin-contact col-md-6 col-6 text-center mb-30">
                  <i className="zmdi zmdi-email"></i>
                  <p>test@mail.com</p>
                </div>
                <div className="sin-contact col-md-6 col-6 text-center mb-30">
                  <i className="zmdi zmdi-phone"></i>
                  <p>+112 222 333</p>
                </div>
              </div>
              <div className="col-lg-5 col-12 mb-30">
                <iframe
                  id="contact-map"
                  style={{ border: "none" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.985718329596!2d-0.674076383876049!3d37.9774626082435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63aa00b48ef091%3A0xe73d312bcfaeccee!2sC.%20de%20Pedro%20Lorca%2C%2003182%20Torrevieja%2C%20Alicante!5e0!3m2!1ses!2ses!4v1647346962390!5m2!1ses!2ses"
                ></iframe>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
