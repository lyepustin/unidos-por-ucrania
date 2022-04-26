import Link from "next/link";

const Pagination = (props) => {
  const { previous = "", next = "" } = props;

  return (
    <div id="pagination" className="rounded-sm my-5">
      <nav
        className="flex justify-between"
        role="navigation"
        aria-label="Navigation"
      >
        <div className="flex-1 mr-2">
          <span className={`${!previous && "hidden disabled:"}`}>
            <Link href={previous}>
              <a className="btn bg-white border-gray-200 hover:border-gray-300 text-indigo-500">
                <i className="zmdi zmdi-long-arrow-left"></i>
              </a>
            </Link>
          </span>
        </div>
        <div className="grow text-center">
          <span className="inline-flex items-center justify-center rounded-full leading-5 px-2 py-2 bg-white border border-gray-200 text-indigo-500 shadow-sm w-10">
            <Link href="/">
              <a className="text-base">
                <i className="zmdi zmdi-home"></i>
              </a>
            </Link>
          </span>
        </div>
        <div className="flex-1 mr-2 text-right">
          <span className={`${!next && "hidden disabled:"}`}>
            <Link href={next}>
              <a className="btn bg-white border-gray-200 hover:border-gray-300 text-indigo-500">
                <i className="zmdi zmdi-long-arrow-right"></i>
              </a>
            </Link>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
