export default () => {
  return (
    <div id="contact-area" className="contact-area section pb-80 pt-110">
      <div className="container">
        <div className="row">
          <div className="section-title text-center col-12 mb-70">
            <h4>Get in touch</h4>
            <h2>Contact us</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 col-12 mx-auto">
            <div className="row">
              <div className="sin-contact col-md-4 col-12 text-center mb-30">
                <i className="zmdi zmdi-pin"></i>
                <p>
                  77 Seventh Streeth, Mongoila, <br />
                  South USA, 123566.
                </p>
              </div>

              <div className="sin-contact col-md-4 col-12 text-center mb-30">
                <i className="zmdi zmdi-phone"></i>
                <p>+112 222 5555</p>
                <p>+112 666 5547</p>
              </div>

              <div className="sin-contact col-md-4 col-12 text-center mb-30">
                <i className="zmdi zmdi-email"></i>
                <p>political@mail.com</p>
                <p>politician@polity.info</p>
              </div>
            </div>
          </div>

          <div className="col-lg-10 col-12 mt-20 mx-auto">
            <div className="row">
              <div className="col-lg-5 col-12 mb-30">
                <iframe
                  id="contact-map"
                  style={{ border: "none" }}
                  src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
              <div className="col-lg-7 col-12 mb-30">
                <div className="contact-form">
                  <form id="contact-form" action="mail.php" method="post">
                    <div className="row">
                      <div className="col-sm-6 col-xs-12 mb-20">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                      <div className="col-sm-6 col-xs-12 mb-20">
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                      <div className="col-xs-12 mb-20">
                        <input type="text" name="subject" placeholder="Subject" />
                      </div>
                      <div className="col-xs-12 mb-20">
                        <textarea name="message" placeholder="Message"></textarea>
                      </div>
                      <div className="col-xs-12">
                        <button type="submit">send</button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
