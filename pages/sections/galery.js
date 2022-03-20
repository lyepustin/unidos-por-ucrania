import Zoom from "react-medium-image-zoom";

export default () => {
  return (
    // <div id="gallery-area" className="gallery-area section pb-100 pt-110">
    <div id="gallery-area" className="section pb-100 pt-110">
      <div className="container">
        <div className="row">
          <div className="section-title text-center col-12 mb-70">
            <h4>Photo Gallery</h4>
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
        </div>
      </div>
    </div>
  );
};
