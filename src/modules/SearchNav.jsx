export default function ({ active, onClick }) {
  return (
    <div
      className={
        active
          ? 'opacity-1 visible absolute left-0 top-0 w-full transition-opacity '
          : 'invisible absolute left-0 top-0 h-0 w-0 overflow-hidden opacity-0 transition-opacity'
      }
    >
      <div className="grid w-full items-center space-y-5 bg-primary px-24 pb-10 text-sm text-white">
        <button
          onClick={onClick}
          className="absolute right-0 top-0 bg-blue-700 px-5 py-4 text-2xl"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h2 className="pt-20 font-chiselled text-3xl xl:text-6xl">SEARCH</h2>
        <div className="flex w-full  items-center justify-between rounded-full border border-solid border-white border-opacity-30 bg-transparent">
          <input
            className=" w-full bg-transparent object-contain px-4 py-2 text-2xl placeholder:text-white focus:outline-none"
            placeholder="What are you looking for?"
          />
          <button className="h-8 w-12 text-xl xl:text-2xl">
            <i className="fa-solid fa-magnifying-glass border-opacity-30 text-gray-400"></i>
          </button>
        </div>
        <h2 className="pt-16 text-2xl xl:text-2xl">Useful Links</h2>
        <ul className="space-y-8 pt-8 xl:grid xl:grid-cols-3 xl:space-y-0">
          <li className="mx-10 border-b border-white border-opacity-50">
            <a
              href="#"
              className="flex h-14 justify-between xl:py-5 xl:text-xl"
            >
              <span>How To Buy Men's tickets</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </li>
          <li className="mx-10 border-b border-white border-opacity-50">
            <a
              href="#"
              className="flex h-14 justify-between xl:py-5 xl:text-xl"
            >
              <span>Chelsea FC Women's Tickets</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </li>
          <li className="mx-10 border-b border-white border-opacity-50 ">
            <a
              href="#"
              className="flex h-14 justify-between xl:py-5 xl:text-xl"
            >
              <span>Club Chelsea - Buy Tickeys</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </li>
          <li className="mx-10 border-b border-white border-opacity-50 ">
            <a
              href="#"
              className="flex h-14 justify-between xl:py-5 xl:text-xl"
            >
              <span>Stadium Tours & Museum</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </li>
          <li className="mx-10 border-b border-white border-opacity-50 ">
            <a
              href="#"
              className="flex h-14 justify-between xl:py-5 xl:text-xl"
            >
              <span>Ticket Prices</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </li>
          <li className=" mx-10 mb-10 border-b border-white border-opacity-50 ">
            <a
              href="#"
              className="flex h-14 justify-between xl:py-5 xl:text-xl"
            >
              <span>Frequently Asked</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </li>
        </ul>
        <img
          src="src\assets\logo.png"
          className="w-12 justify-self-center pt-10 xl:w-32"
        ></img>
      </div>
    </div>
  );
}
