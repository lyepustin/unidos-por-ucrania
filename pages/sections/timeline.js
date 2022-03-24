import { useTranslation } from "next-i18next";

const Timeline = () => {
  const { t } = useTranslation();
  return (
    <div section-scroll="2" className="wd_scroll_wrap">
      <div className="wd_story_wrapper wd_toppadder90 wd_bottompadder90">
        <div className="wd_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="wd_heading"></div>
            <div className="section-title text-start col-12 mb-20">
              <h4>{t("timeline")}</h4>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="wd_story_covers">
                <div className="wd_story_line"></div>

                <div id="28/02/2022" className="wd_story_covers_box_left">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/28-02.jpg" alt="Story" />
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>28/02/2022</span>
                    <h1>Beniel</h1>
                    <p>
                      Una furgoneta con remolque que contiene más de 90 cajas de ayuda humanitaria recogidos en la
                      cafeteria Alonushka - Beniel (Murcia, España) sale en dirección Ucrania.
                    </p>
                  </div>
                </div>

                <div id="02/03/2022" className="wd_story_covers_box_right">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>02/03/2022</span>
                    <h1>Beniel</h1>
                    <p>
                      Una furgoneta que contiene más de 50 cajas de ayuda humanitaria recogidos en la cafeteria
                      Alonushka - Beniel (Murcia, España) y donados por el pueblo de Santomera sale en dirección
                      Ucrania.
                    </p>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/2-03.jpg" alt="Story" />
                  </div>
                </div>

                <div id="03/03/2022" className="wd_story_covers_box_left">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/3-03.jpg" alt="Story" />
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>03/03/2022</span>
                    <h1>Alquerias Orihuela Santomera</h1>
                    <p>
                      Se recoge ayuda humanitaria desde Alquerias (Cáritas o Iglesia), Orihuela (La Lonja) y Santomera.
                    </p>
                  </div>
                </div>

                <div id="04/03/2022" className="wd_story_covers_box_right">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>04/03/2022</span>
                    <h1>Ayuntamiento de Beniel</h1>
                    <p>Se recibe ayuda humanitaria que el ayuntamiento de Beniel deja en un punto de recogida.</p>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/4-03.jpg" alt="Story" />
                  </div>
                </div>

                <div id="05/03/2022" className="wd_story_covers_box_left">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/5-03.jpg" alt="Story" />
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>05/03/2022</span>
                    <h1>1º tráiler</h1>
                    <p>
                      Se carga y envía el primer tráiler con 33 palets (más de 750 cajas de ayuda humanitaria) con
                      dirección Lviv.
                    </p>
                  </div>
                </div>
                {/* 
                <div id="04/03/2022" className="wd_story_covers_box_right">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>04/03/2022</span>
                    <h1>Ayuntamiento de Beniel</h1>
                    <p>Se recibe ayuda humanitaria que el ayuntamiento de Beniel deja en un punto de recogida.</p>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/4-03.jpg" alt="Story" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
