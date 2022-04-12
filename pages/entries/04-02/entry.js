import Zoom from "react-medium-image-zoom";

const directions = { previous: "/entries/03-02", next: "/entries/04-02" };

const Entry = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="blog-details-wrapper col-xl-8 col-lg-10 col-12 mx-auto">
            <div id="navigation" className="mt-1 mb-2">
              <div className="flex justify-between">
                <a className="text-base" href="/">
                  <i className="zmdi zmdi-home"></i>
                </a>
                <div>
                  <a className="text-base mr-5" href={directions["previous"]}>
                    <i className="zmdi zmdi-long-arrow-left"></i>
                  </a>
                  <a className="text-base" href={directions["next"]}>
                    <i className="zmdi zmdi-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="blog-details-media">
              <img src="/images/blog/UkraniaFest.jpg" alt="blog" />
            </div>

            <div className="blog-details-content fix mt-2 mb-2">
              <h3 className="blog-title">Ucrania Fest en Orihuela</h3>
              <div className="blog-meta fix">
                <a href="#">
                  <i className="zmdi zmdi-calendar-check"></i> 02/04/2022
                </a>
              </div>
              <p>
                La asociación de _nombre_ organizó una fiesta solidaria en honor a Ucrania en Orihuela, esta sirvió para
                recaudar fondos para ayuda humanitaria a favor de los afectados por la invasión de Rusia. La fiesta
                consistió en:
                <dl>
                  <dt>Gran fiesta infantil</dt>
                  <dd>
                    Para la diversión de los más pequeñosse se han preparado colchonetas hincables, talleres infantiles
                    y actuaciones dirigidas a los niños.
                  </dd>
                  <dt>Mercadillo solidario</dt>
                  <dd>Venta de merchandising del evento para la recaudación de fondos.</dd>
                  <dt>Barra solidaria</dt>
                  <dd>
                    Venta de comida y bebida para el disfrute de todos. La comida incluye dulces, salados, paella,
                    bollería y aperitivos.
                  </dd>
                  <dt>Actuaciones de:</dt>
                  <dd>Dj David Rodriguez</dd>
                  <dd>Dj Agustín Cascales</dd>
                  <dd>Dj Patrik</dd>
                  <dt>Conciertos de:</dt>
                  <dd>ABRAM</dd>
                  <dd>Los Happys</dd>
                  <dd>Aixa y Paula U</dd>
                </dl>
              </p>
              <h3 className="blog-title" style={{ margin: "0 0 30px 0" }}>
                Galería de imágenes
              </h3>
              <div className="px-5 grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-5 grid-flow-row gap-10">
                <Zoom>
                  <img src="/images/blog/ucraniafest/IMG_0410.jpg" />
                </Zoom>
                <Zoom>
                  <img src="/images/blog/ucraniafest/IMG_0437.jpg" />
                </Zoom>
                <Zoom>
                  <img src="/images/blog/ucraniafest/IMG_0543.jpg" />
                </Zoom>
                <Zoom>
                  <img src="/images/blog/ucraniafest/IMG_0546.jpg" />
                </Zoom>
                <Zoom>
                  <img src="/images/blog/ucraniafest/IMG_0561.jpg" />
                </Zoom>
                <Zoom>
                  <img src="/images/blog/ucraniafest/IMG_0621.jpg" />
                </Zoom>
                <Zoom>
                  <img src="/images/blog/ucraniafest/IMG_0538.jpg" />
                </Zoom>
                <Zoom>
                  <img src="/images/blog/ucraniafest/IMG_0550.jpg" />
                </Zoom>
                <Zoom>
                  <img src="/images/blog/ucraniafest/IMG_0522.jpg" />
                </Zoom>
                <Zoom>
                  <img src="/images/blog/ucraniafest/IMG_0529.jpg" />
                </Zoom>
              </div>

              <div>
                <h2 class="text-2xl text-gray-800 font-bold mb-6">Option 3</h2>
                <div class="px-6 py-8 bg-gray-50 border border-gray-200 rounded-sm">
                  <div>
                    <nav class="flex justify-between" role="navigation" aria-label="Navigation">
                      <div class="flex-1 mr-2">
                        <a
                          class="btn bg-white border-gray-200 text-gray-300 cursor-not-allowed"
                          href="#0"
                          disabled="disabled"
                        >
                          &lt;-<span class="hidden sm:inline">&nbsp;Previous</span>
                        </a>
                      </div>
                      <div class="grow text-center">
                        <ul class="inline-flex text-sm font-medium -space-x-px">
                          <li>
                            <span class="inline-flex items-center justify-center rounded-full leading-5 px-2 py-2 bg-white border border-gray-200 text-indigo-500 shadow-sm">
                              <span class="w-5">1</span>
                            </span>
                          </li>
                          <li>
                            <a
                              class="inline-flex items-center justify-center leading-5 px-2 py-2 text-gray-600 hover:text-indigo-500 border border-transparent"
                              href="#0"
                            >
                              <span class="w-5">2</span>
                            </a>
                          </li>
                          <li>
                            <a
                              class="inline-flex items-center justify-center leading-5 px-2 py-2 text-gray-600 hover:text-indigo-500 border border-transparent"
                              href="#0"
                            >
                              <span class="w-5">3</span>
                            </a>
                          </li>
                          <li>
                            <span class="inline-flex items-center justify-center leading-5 px-2 py-2 text-gray-400">
                              …
                            </span>
                          </li>
                          <li>
                            <a
                              class="inline-flex items-center justify-center rounded-r leading-5 px-2 py-2 text-gray-600 hover:text-indigo-500 border border-transparent"
                              href="#0"
                            >
                              <span class="w-5">9</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="flex-1 text-right ml-2">
                        <a class="btn bg-white border-gray-200 hover:border-gray-300 text-indigo-500" href="#0">
                          <span class="hidden sm:inline">Next&nbsp;</span>-&gt;
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex justify-between">
                  <a className="text-base" href="/">
                    <i className="zmdi zmdi-home"></i>
                  </a>
                  <div>
                    <a className="text-base mr-5" href={directions["previous"]}>
                      <i className="zmdi zmdi-long-arrow-left"></i>
                    </a>
                    <a className="text-base" href={directions["next"]}>
                      <i className="zmdi zmdi-long-arrow-right"></i>
                    </a>
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

export default Entry;
