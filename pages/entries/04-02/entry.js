import Zoom from "react-medium-image-zoom";

import Pagination from "components/pagination";

const directions = { previous: "/entries/03-02", next: "/entries/04-02" };

const Entry = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="blog-details-wrapper col-xl-8 col-lg-10 col-12 mx-auto">
            <div className="blog-details-media" style={{ marginTop: "30px" }}>
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
                La asociación de _nombre_ organizó una fiesta solidaria en honor
                a Ucrania en Orihuela, esta sirvió para recaudar fondos para
                ayuda humanitaria a favor de los afectados por la invasión de
                Rusia. La fiesta consistió en:
                <dl>
                  <dt>Gran fiesta infantil</dt>
                  <dd>
                    Para la diversión de los más pequeñosse se han preparado
                    colchonetas hincables, talleres infantiles y actuaciones
                    dirigidas a los niños.
                  </dd>
                  <dt>Mercadillo solidario</dt>
                  <dd>
                    Venta de merchandising del evento para la recaudación de
                    fondos.
                  </dd>
                  <dt>Barra solidaria</dt>
                  <dd>
                    Venta de comida y bebida para el disfrute de todos. La
                    comida incluye dulces, salados, paella, bollería y
                    aperitivos.
                  </dd>
                  <dt>Actuaciones de:</dt>
                  <div style={{ marginLeft: "10px" }}>
                    <dd>Dj David Rodriguez</dd>
                    <dd>Dj Agustín Cascales</dd>
                    <dd>Dj Patrik</dd>
                  </div>
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
              <Pagination {...directions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
