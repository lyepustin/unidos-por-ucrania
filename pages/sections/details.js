import Zoom from "react-medium-image-zoom";

const Details = () => {
  return (
    <div>
      <div id="blog-area" className="blog-area section pb-110 pt-110">
        <div className="container">
          <div className="row">
            <div className="blog-details-wrapper col-xl-8 col-lg-10 col-12 mx-auto">
              <div className="single-blog-details fix">
                <div className="blog-details-media">
                  <img src="img/blog/single.jpg" alt="blog" />
                </div>

                <div className="blog-details-content fix">
                  <h3 className="blog-title">
                    Randomised Words Which Don't Look Out
                  </h3>
                  <div className="blog-meta fix">
                    <a href="#">
                      <i className="zmdi zmdi-calendar-check"></i> 28/02/2020
                    </a>
                    <a href="#">
                      <i className="zmdi zmdi-slideshow"></i> 9
                    </a>
                    {/* <a href="#">
                      <i className="zmdi zmdi-comments"></i> 19
                    </a> */}
                  </div>
                  <p>
                    There are many variaons of passages of Lorem Ipsuable, amrn
                    in some by injected humour, There are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or
                    randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text.
                  </p>
                  <p>
                    There are many variaons of passages of Lorem Ipsuable, amrn
                    in some by injected humour, There are many variations of
                    passages of Lorem Ipsum available,
                  </p>
                  <blockquote>
                    <p>
                      but the majority have suffered alteration in some form, by
                      injected humour, or randomised words which don't look even
                      slightly believable. If you are going to use a passage of
                      Loremsum, you need to be sure there isn't anything
                      embarrassing hidden in the middle of text.
                    </p>
                  </blockquote>
                  <p>
                    Lorem Ipsuable, amrn in some by injected humour, There are
                    many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by
                    injected humour, or randised words which don't look even
                    slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure there isn't anything
                    embarrassing hidden in the middle of text.
                  </p>
                  <h3 className="blog-title" style={{ margin: "0 0 30px 0" }}>
                    Photo Gallery
                  </h3>
                  <div className="px-5 grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-5 grid-flow-row gap-10">
                    <Zoom>
                      <img
                        src="https://placekitten.com/200/300"
                        alt=""
                        width="500"
                      />
                    </Zoom>
                    <Zoom>
                      <img
                        src="https://placekitten.com/200/300"
                        alt=""
                        width="500"
                      />
                    </Zoom>
                    <Zoom>
                      <img
                        src="https://placekitten.com/200/300"
                        alt=""
                        width="500"
                      />
                    </Zoom>
                  </div>

                  <div className="mt-5">
                    <div className="flex justify-between">
                      <a className="text-base" href="/">
                        home
                      </a>
                      <div>
                        <a className="text-base mr-5" href="/">
                          ← previa
                        </a>
                        <a className="text-base" href="#">
                          siguiente →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
