import { i18n } from "next-i18next";
export default () => {
  return (
    <div
      className="header-bottom"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 9999,
        backgroundColor: "white"
      }}
    >
      <div className="container">
        <div className="row justify-content-between justify-content-md-center justify-content-lg-between position-relative">
          <div className="col-md-auto col-12">
            <div className="navbar-header d-flex justify-content-between">
              <a href="/" className="logo navbar-brand">
                <img
                  src="images/logo.png"
                  alt="logo"
                  style={{
                    height: "100px",
                    width: "100px"
                  }}
                />
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
              <button onClick={() => i18n.changeLanguage("en")}>CLICK</button>
              <a className="btn" data-scroll="" href="#donation-area">
                donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
