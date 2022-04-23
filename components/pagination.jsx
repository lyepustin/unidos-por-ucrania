export default function Pagination(props) {
    return (
        <div id="pagination" class="px-6 py-8 rounded-sm" style={{ margin: "30px" }}>
        <nav class="flex justify-between" role="navigation" aria-label="Navigation">
          <div class="flex-1 mr-2">
            <a
              className={`btn bg-white border-gray-200 hover:border-gray-300 ${!props.previous ?'text-gray-300 cursor-not-allowed' :'text-indigo-500'}`} 
              href={props.previous}
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
              className={`btn bg-white border-gray-200 hover:border-gray-300 ${!props.next ?'text-gray-300 cursor-not-allowed' :'text-indigo-500'}`} 
              href={props.next}  
            >
              <i className="zmdi zmdi-long-arrow-right"></i>
            </a>
          </div>
        </nav>
      </div>
    );
  }