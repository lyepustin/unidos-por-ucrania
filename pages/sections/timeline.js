import { useTranslation } from "next-i18next";
import Link from "next/link";

const Timeline = () => {
  const { t } = useTranslation();
  return (
    <div id="timeline-area" section-scroll="2" className="wd_scroll_wrap">
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

                <div id="ucrania_fest_beniel" className="wd_story_covers_box_left">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/21-05.jpg" alt="Story" />
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>21/05/2022</span>
                    <h1>{t("21/05 title")}</h1>
                    <p>{t("21/05 text")}</p>
                  </div>
                </div>

                <div id="tercer_camion" className="wd_story_covers_box_right">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/04-05.jpg" alt="Story" />
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>04/05/2022</span>
                    <h1>{t("04/05 title")}</h1>
                    <p>{t("04/05 text")}</p>
                  </div>
                </div>

                <div id="futbol_orihuela" className="wd_story_covers_box_left">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/24-04.jpg" alt="Story" />
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>24/04/2022</span>
                    <h1>{t("24/04 title")}</h1>
                    <p>{t("24/04 text")}</p>
                  </div>
                </div>

                <div id="futbol_beniel" className="wd_story_covers_box_right">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/16-04.jpg" alt="Story" />
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>16/04/2022</span>
                    <h1>{t("16/04 title")}</h1>
                    <p>{t("16/04 text")}</p>
                  </div>
                </div>

                <Link id="orihuela_fest" href="/entries/04-02">
                  <a>
                    <div className="wd_story_covers_box_left">
                      <div className="wd_story_dot">
                        <span></span>
                      </div>
                      <div className="wd_story_covers_box_datails">
                        <span>02/04/2022</span>
                        <h1>{t("02/04 title")}</h1>
                        <p>{t("02/04 text")}</p>
                      </div>
                      <div className="wd_story_covers_box_img">
                        <img src="images/timeline/2-04.jpg" alt="Story" />
                      </div>
                    </div>
                  </a>
                </Link>

                <div id="tercer_camion" className="wd_story_covers_box_right">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/30-03.jpg" alt="Story" />
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>30/03/2022</span>
                    <h1>{t("30/03 title")}</h1>
                    <p>{t("30/03 text")}</p>
                  </div>
                </div>

                <div id="segundo_camion" className="wd_story_covers_box_left">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/15-03.jpg" alt="Story" />
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>15/03/2022</span>
                    <h1>{t("15/03 title")}</h1>
                    <p>{t("15/03 text")}</p>
                  </div>
                </div>

                <div id="primer_camion" className="wd_story_covers_box_right">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/5-03.jpg" alt="Story" />
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>05/03/2022</span>
                    <h1>{t("05/03 title")}</h1>
                    <p>{t("05/03 text")}</p>
                  </div>
                </div>

                <div id="donativos_beniel" className="wd_story_covers_box_left">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>04/03/2022</span>
                    <h1>{t("04/03 title")}</h1>
                    <p>{t("04/03 text")}</p>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/4-03.jpg" alt="Story" />
                  </div>
                </div>

                <div id="recogida_varios" className="wd_story_covers_box_right">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/3-03.jpg" alt="Story" />
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>03/03/2022</span>
                    <h1>{t("03/03 title")}</h1>
                    <p>{t("03/03 text")}</p>
                  </div>
                </div>

                <div id="segunda_furgo" className="wd_story_covers_box_left">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>02/03/2022</span>
                    <h1>{t("02/03 title")}</h1>
                    <p>{t("02/03 text")}</p>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/2-03.jpg" alt="Story" />
                  </div>
                </div>

                <div id="primera_furgo" className="wd_story_covers_box_right">
                  <div className="wd_story_dot">
                    <span></span>
                  </div>
                  <div className="wd_story_covers_box_img">
                    <img src="images/timeline/28-02.jpg" alt="Story" />
                  </div>
                  <div className="wd_story_covers_box_datails">
                    <span>28/02/2022</span>
                    <h1>{t("28/02 title")}</h1>
                    <p>{t("28/02 text")}</p>
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

export default Timeline;
