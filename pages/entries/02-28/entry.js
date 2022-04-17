import Zoom from "react-medium-image-zoom";
import Link from "next/link";

const directions = { previous: "/entries/02-28", next: "/entries/03-02" };

const Entry = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="blog-details-wrapper col-xl-8 col-lg-10 col-12 mx-auto">
            <div className="blog-details-media">
              <img src="/img/blog/single.jpg" alt="blog" />
            </div>

            <div className="blog-details-content fix mt-2 mb-2">
              <h3 className="blog-title">1</h3>
              <div className="blog-meta fix">
                <a href="#">
                  <i className="zmdi zmdi-calendar-check"></i> 28/02/2020
                </a>
                <a href="#">
                  <i className="zmdi zmdi-slideshow"></i> 9
                </a>
              </div>
              <p>
                There are many variaons of passages of Lorem Ipsuable, amrn in some by injected humour, There are many
                variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                by injected humour, or randomised words which don't look even slightly believable. If you are going to
                use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle
                of text.
              </p>
              <p>
                There are many variaons of passages of Lorem Ipsuable, amrn in some by injected humour, There are many
                variations of passages of Lorem Ipsum available,
              </p>
              <blockquote>
                <p>
                  but the majority have suffered alteration in some form, by injected humour, or randomised words which
                  don't look even slightly believable. If you are going to use a passage of Loremsum, you need to be
                  sure there isn't anything embarrassing hidden in the middle of text.
                </p>
              </blockquote>
              <p>
                Lorem Ipsuable, amrn in some by injected humour, There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some form, by injected humour, or randised words
                which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
                be sure there isn't anything embarrassing hidden in the middle of text.
              </p>
              <h3 className="blog-title" style={{ margin: "0 0 30px 0" }}>
                Photo Gallery
              </h3>
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
              </div>

              <div id="pagination" class="px-6 py-8 rounded-sm" style={{ margin: "30px" }}>
                <nav class="flex justify-between" role="navigation" aria-label="Navigation">
                  <div class="flex-1 mr-2">
                    <a
                      class="btn bg-white border-gray-200 hover:border-gray-300 text-indigo-500"
                      href={directions["previous"]}
                    >
                      <i className="zmdi zmdi-long-arrow-left"></i>
                    </a>
                  </div>

                  <div class="grow text-center">
                    <ul class="inline-flex text-sm font-medium -space-x-px">
                      <li>
                        <span class="inline-flex items-center justify-center rounded-full leading-5 px-2 py-2 bg-white border border-gray-200 text-indigo-500 shadow-sm">
                          <a className="text-base" href="/">
                            <i className="zmdi zmdi-home"></i>
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div class="flex-1 text-right ml-2">
                    <a
                      class="btn bg-white border-gray-200 hover:border-gray-300 text-indigo-500"
                      href={directions["next"]}
                    >
                      <i className="zmdi zmdi-long-arrow-right"></i>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
