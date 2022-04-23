const headerTop = () => {
  return (
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
  );
};

export default headerTop;
