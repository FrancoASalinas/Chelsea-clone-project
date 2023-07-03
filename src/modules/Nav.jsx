export default function Nav({ active, onClick }) {
  return (
    <nav
      className={
        active
          ? 'opacity-1 visible absolute left-0 top-0 w-full transition-opacity'
          : 'invisible absolute left-0 top-0 h-0 w-0 overflow-hidden opacity-0 transition-opacity'
      }
    >
      <div className="w-full bg-details text-white xl:h-screen xl:bg-primary ">
        <button
          className="top absolute right-0 bg-blue-700 px-5 py-4 text-2xl"
          onClick={onClick}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <ul className="space-y-4 px-10 py-20 text-2xl xl:w-1/2 xl:px-20 xl:py-40">
          <li className="group h-10  grid-cols-2 xl:grid">
            <span className="cursor-pointer">Latest</span>
            <ul className="hidden border-l border-white border-opacity-30 p-5 xl:invisible xl:grid xl:group-hover:visible">
              <li className=" mt-1 cursor-pointer">Lorem</li>{' '}
              <li className=" mt-1 cursor-pointer">Lorem</li>{' '}
              <li className=" mt-1 cursor-pointer">Lorem</li>
            </ul>
          </li>
          <li className="group h-10  grid-cols-2 xl:grid">
            <span className="cursor-pointer">Watch</span>
            <ul className="hidden border-l border-white border-opacity-30 p-5 xl:invisible xl:grid xl:group-hover:visible">
              <li className=" mt-1 cursor-pointer">Lorem</li>{' '}
              <li className=" mt-1 cursor-pointer">Lorem</li>{' '}
              <li className=" mt-1 cursor-pointer">Lorem</li>
            </ul>
          </li>
          <li className="group h-10  grid-cols-2 xl:grid ">
            Men's Team
            <ul className="hidden border-l border-white border-opacity-30 p-5 xl:invisible xl:grid xl:group-hover:visible">
              <li>Lorem</li> <li>Lorem</li> <li>Lorem</li>
            </ul>
          </li>
          <li className="group h-10  grid-cols-2 xl:grid">
            <span className="cursor-pointer">Women's Team</span>
            <ul className="hidden border-l border-white border-opacity-30 p-5 xl:invisible xl:grid xl:group-hover:visible">
              <li className=" mt-1 cursor-pointer">Lorem</li>{' '}
              <li className=" mt-1 cursor-pointer">Lorem</li>{' '}
              <li className=" mt-1 cursor-pointer">Lorem</li>
            </ul>
          </li>
          <li className="group h-10  grid-cols-2 xl:grid">
            <span className="cursor-pointer">Tickets & Hospitality</span>
            <ul className="hidden border-l border-white border-opacity-30 p-5 xl:invisible xl:grid xl:group-hover:visible">
              <li className=" mt-1 cursor-pointer">Lorem</li>{' '}
              <li className=" mt-1 cursor-pointer">Lorem</li>{' '}
              <li className=" mt-1 cursor-pointer">Lorem</li>
            </ul>
          </li>
          <li className="group h-10  grid-cols-2 xl:grid ">
            Shop
            <ul className="hidden border-l border-white border-opacity-30 p-5 xl:invisible xl:grid xl:group-hover:visible">
              <li>Lorem</li> <li>Lorem</li> <li>Lorem</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="w-full bg-primary text-white">
        <ul className="space-y-5 px-10 py-10 text-base xl:hidden">
          <li className="cursor-pointer">About The Club</li>
          <li className="cursor-pointer">Our History</li>
          <li className="cursor-pointer">Community</li>
          <li className="cursor-pointer">Fans</li>
          <li className="cursor-pointer">Stamford bridge</li>
          <li className="cursor-pointer">Our venues</li>
        </ul>
        <ul className="space-y-4 px-10 pb-24 pt-10 text-sm ">
          <li className="cursor-pointer">Useful Links</li>
          <li className="cursor-pointer">FAQs</li>
          <li className="cursor-pointer">Contact Us</li>
          <li className="cursor-pointer">The 5th Stand App</li>
        </ul>
      </div>
      <div className="fixed bottom-0 flex w-full divide-x-2 divide-gray-300 text-xl font-bold xl:hidden">
        <button className=" w-1/2   bg-white  p-5 text-primary">Sign In</button>
        <button className=" w-1/2    bg-white  p-5 text-primary">
          Register
        </button>
      </div>
    </nav>
  );
}
