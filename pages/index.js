import React from "react";
import { useTranslation, i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Zoom from "react-medium-image-zoom";

export default function Home() {
  const { t } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <div>
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-sm-between align-items-center">
            <div className="header-info col-auto">
              <p>
                <i className="zmdi zmdi-phone"></i> +11 222 3354
              </p>
              <p>
                <i className="zmdi zmdi-email-open"></i> name@mail.com
              </p>
            </div>

            <div className="header-social col-auto">
              <a href="https://www.facebook.com">
                <i className="zmdi zmdi-facebook"></i>
              </a>
              <a href="https://www.rss.com">
                <i className="zmdi zmdi-rss"></i>
              </a>
              <a href="https://www.google.com">
                <i className="zmdi zmdi-google-plus"></i>
              </a>
              <a href="https://www.pinterest.com">
                <i className="zmdi zmdi-pinterest"></i>
              </a>
              <a href="https://www.instagram.com">
                <i className="zmdi zmdi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="header-bottom"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 9999,
          backgroundColor: "white",
        }}
      >
        <div className="container">
          <div className="row justify-content-between justify-content-md-center justify-content-lg-between position-relative">
            <div className="col-md-auto col-12">
              <div className="navbar-header d-flex justify-content-between">
                <a href="index.html" className="logo navbar-brand">
                  <img src="img/logo.png" alt="logo" />
                </a>
                <button
                  className="navbar-toggle collapsed d-block d-md-none"
                  data-bs-toggle="collapse"
                  data-bs-target="#main-menu"
                >
                  <i className="zmdi zmdi-menu menu-open"></i>
                  <i className="zmdi zmdi-close menu-close"></i>
                </button>
              </div>
            </div>

            <div className="col-auto">
              <div className="main-menu collapse" id="main-menu">
                <nav>
                  <ul>
                    <li className="active">
                      <a href="#hero-area">home</a>
                    </li>
                    <li>
                      <a href="#about-area">about</a>
                    </li>
                    <li>
                      <a href="#service-area">service</a>
                    </li>
                    <li>
                      <a href="#event-area">event</a>
                    </li>
                    <li>
                      <a href="#gallery-area">gallery</a>
                    </li>
                    <li>
                      <a href="#blog-area">blog</a>
                    </li>
                    <li>
                      <a href="#contact-area">contact us</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-auto d-none d-lg-block">
              <div className="header-donation">
                <a className="btn" data-scroll="" href="#donation-area">
                  donate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper fix">
        <div id="service-area" className="service-area section pb-65 pt-110">
          <div className="container">
            <div className="row">
              <div
                className="section-title text-start col-12 mb-70"
                style={{ zIndex: 0 }}
              >
                <h4>work for you</h4>
                <h2>Our Services for you</h2>
              </div>
            </div>

            <div className="row">
              <div className="single-service col-lg-4 col-md-6 col-12 mb-45">
                <span className="image"></span>
                <h4>Our Campaign</h4>
                <p>
                  There are many variations of pges of Lorem Ipsu mavailable,but
                  thhave suffered alteration insome form, by injected humoura
                </p>
              </div>

              <div className="single-service col-lg-4 col-md-6 col-12 mb-45">
                <span className="image"></span>
                <h4>Become a Volunteer</h4>
                <p>
                  There are many variations of pges of Lorem Ipsu mavailable,but
                  thhave suffered alteration insome form, by injected humoura
                </p>
              </div>

              <div className="single-service col-lg-4 col-md-6 col-12 mb-45">
                <span className="image"></span>
                <h4>Donation</h4>
                <p>
                  There are many variations of pges of Lorem Ipsu mavailable,but
                  thhave suffered alteration insome form, by injected humoura
                </p>
              </div>

              <div className="single-service col-lg-4 col-md-6 col-12 mb-45">
                <span className="image"></span>
                <h4>Our Campaign</h4>
                <p>
                  There are many variations of pges of Lorem Ipsu mavailable,but
                  thhave suffered alteration insome form, by injected humoura
                </p>
              </div>

              <div className="single-service col-lg-4 col-md-6 col-12 mb-45">
                <span className="image"></span>
                <h4>Become a Volunteer</h4>
                <p>
                  There are many variations of pges of Lorem Ipsu mavailable,but
                  thhave suffered alteration insome form, by injected humoura
                </p>
              </div>

              <div className="single-service col-lg-4 col-md-6 col-12 mb-45">
                <span className="image"></span>
                <h4>Donation</h4>
                <p>
                  There are many variations of pges of Lorem Ipsu mavailable,but
                  thhave suffered alteration insome form, by injected humoura
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="gallery-area" className="gallery-area section pb-100 pt-110">
        <div className="container">
          <div className="row">
            <div className="section-title text-center col-12 mb-70">
              <h4>happy moments</h4>
              <h2>Photo Gallery</h2>
            </div>
          </div>
        </div>

        <div className="px-5 grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-5 grid-flow-row gap-10">
          <Zoom>
            <img src="https://placekitten.com/200/300" alt="" width="500" />
          </Zoom>
          <Zoom>
            <img src="https://placekitten.com/200/300" alt="" width="500" />
          </Zoom>
          <Zoom>
            <img src="https://placekitten.com/200/300" alt="" width="500" />
          </Zoom>
          <Zoom>
            <img src="https://placekitten.com/200/300" alt="" width="500" />
          </Zoom>
          <Zoom>
            <img src="https://placekitten.com/200/300" alt="" width="500" />
          </Zoom>
          <Zoom>
            <img src="https://placekitten.com/200/300" alt="" width="500" />
          </Zoom>
          <Zoom>
            <img src="https://placekitten.com/200/300" alt="" width="500" />
          </Zoom>
          <Zoom>
            <img src="https://placekitten.com/200/300" alt="" width="500" />
          </Zoom>
          <Zoom>
            <img src="https://placekitten.com/200/300" alt="" width="500" />
          </Zoom>
          <Zoom>
            <img src="https://placekitten.com/200/300" alt="" width="500" />
          </Zoom>
          <Zoom>
            <img src="https://placekitten.com/200/300" alt="" width="500" />
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
