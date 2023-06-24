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
        <h2 className="pt-20 text-3xl">SEARCH</h2>
        <div className="flex w-full  items-center rounded-full border border-solid border-white bg-transparent">
          <input className=" bg-transparent  object-contain px-4 py-2 focus:outline-none " />
          <button className="h-8 w-8">
            <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
          </button>
        </div>
        <h2 className="pt-16 text-2xl">USEFUL LINKS</h2>
        <ul className="space-y-8 pt-8">
          <li className="border-b border-white border-opacity-50">
            How to Buy New Tickets
          </li>
          <li className="border-b border-white border-opacity-50">
            Chelsea FC Women's Tickets
          </li>
          <li className="border-b border-white border-opacity-50">
            Club Chelsea - Buy Tickets
          </li>
          <li className="border-b border-white border-opacity-50">
            Stadium Tours & Museum
          </li>
          <li className="border-b border-white border-opacity-50">
            Ticket Prices
          </li>
          <li className="mb-10 border-b border-white border-opacity-50">
            Frequently Asked Questions
          </li>
        </ul>
      </div>
    </div>
  );
}
