export default function Nav({ active, onClick }) {
  return (
    <nav
      className={
        active
          ? 'opacity-1 visible absolute left-0 top-0 w-full transition-opacity'
          : 'invisible absolute left-0 top-0 h-0 w-0 overflow-hidden opacity-0 transition-opacity'
      }
    >
      <div className="w-full bg-primary text-white">
        <button
          className="top absolute right-0 bg-blue-700 px-5 py-4"
          onClick={onClick}
        >
          X
        </button>
        <ul className="space-y-4 px-10 py-20 text-2xl ">
          <li>Latest</li>
          <li>Watch</li>
          <li>Men's Team</li>
          <li>Women's Team</li>
          <li>Tickets & Hospitality</li>
          <li>Shop</li>
        </ul>
      </div>
      <div className="w-full bg-details text-white">
        <ul className="space-y-5 px-10 py-10 text-base ">
          <li>About The Club</li>
          <li>Our History</li>
          <li>Community</li>
          <li>Fans</li>
          <li>Stamford bridge</li>
          <li>Our venues</li>
        </ul>
        <ul className="space-y-4 px-10 pb-24 pt-10 text-sm ">
          <li>Useful Links</li>
          <li>FAQs</li>
          <li>Contact Us</li>
          <li>The 5th Stand App</li>
        </ul>
      </div>
      <div className="fixed bottom-0 flex w-full divide-x-2">
        <button className=" w-1/2  divide-solid divide-gray-500 bg-white  p-5 text-primary">
          Sign In
        </button>
        <button className=" w-1/2  divide-solid divide-gray-500 bg-white  p-5 text-primary">
          Register
        </button>
      </div>
    </nav>
  );
}
