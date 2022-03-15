import { useTranslation } from "next-i18next";
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
          <div className="col-lg-4 col-md-6 col-12 mb-30">
            <div className="blog-item">
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
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mb-30">
            <div className="blog-item">
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
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mb-30">
            <div className="blog-item">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
