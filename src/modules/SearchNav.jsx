export default function ({ active, onClick }) {
  return (
    <div
      className={
        active
          ? 'opacity-1 visible absolute left-0 top-0 w-full transition-opacity'
          : 'invisible absolute left-0 top-0 h-0 w-0 overflow-hidden opacity-0 transition-opacity'
      }
    >
      <div className="grid w-full items-center space-y-5 bg-primary px-8 pb-10 text-sm text-white">
        <button
          onClick={onClick}
          className="absolute right-0 top-0 bg-blue-700 px-5 py-4"
        >
          X
        </button>
        <h2 className="pt-20 font-chiselled text-3xl">SEARCH</h2>
        <div className="flex w-full  items-center justify-between rounded-full border border-solid border-white bg-transparent">
          <input
            className=" w-full bg-transparent  object-contain px-4 py-2 focus:outline-none "
            placeholder="What are you looking for?"
          />
          <button className="h-8 w-12 text-xl">
            <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
          </button>
        </div>
        <h2 className="pt-16 text-2xl">USEFUL LINKS</h2>
        <ul className="space-y-8 pt-8">
          <li className="border-b border-white border-opacity-50 ">
            <a href="#" className="flex justify-between">
              <span>Chelsea FC Women's Tickets</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </li>
          <li className="border-b border-white border-opacity-50 ">
            <a href="#" className="flex justify-between">
              <span>Chelsea FC Women's Tickets</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </li>
          <li className="border-b border-white border-opacity-50 ">
            <a href="#" className="flex justify-between">
              <span>Chelsea FC Women's Tickets</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </li>
          <li className="border-b border-white border-opacity-50 ">
            <a href="#" className="flex justify-between">
              <span>Chelsea FC Women's Tickets</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </li>
          <li className="border-b border-white border-opacity-50 ">
            <a href="#" className="flex justify-between">
              <span>Chelsea FC Women's Tickets</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </li>
          <li className=" mb-10 border-b border-white border-opacity-50 ">
            <a href="#" className="flex justify-between">
              <span>Chelsea FC Women's Tickets</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </li>
        </ul>
        <img
          src="src\assets\logo.png"
          className="mt-3 w-12 justify-self-center"
        ></img>
      </div>
    </div>
  );
}
