export default function Header({ onOpenSearch, onOpenNav }) {
  return (
    <>
      <nav className="hidden h-14 w-full items-center justify-between overflow-hidden xl:flex">
        <ul className="flex gap-6  p-5 text-gray-500">
          <li>
            <a className="cursor-pointer">CHELSEA FOUNDATION</a>
          </li>
          <li>
            <a className="cursor-pointer">NO TO HATE</a>
          </li>
        </ul>
        <ul className="flex gap-6 p-5 text-gray-500">
          <li>
            <a className="cursor-pointer">SIGN IN</a>
          </li>
          <li>
            <a className="cursor-pointer">REGISTER</a>
          </li>
        </ul>
      </nav>
      <header className=" flex h-16 w-full items-center justify-between border border-x-[#aaa] bg-white py-10 shadow-2xl shadow-neutral-950 xl:h-32 ">
        <button
          style={{
            backgroundImage:
              'url(https://upload.wikimedia.org/wikibooks/en/1/1b/Chelsea_Logo.jpg)',
          }}
          className="ml-5 h-16 w-16 bg-black bg-cover"
        ></button>
        <nav className="hidden text-xl  text-primary xl:block">
          <ul className="flex gap-6">
            <li>
              <a className="cursor-pointer font-extrabold">LATEST</a>
            </li>
            <li>
              <a className="cursor-pointer font-extrabold">WATCH</a>
            </li>
            <li>
              <a className="cursor-pointer font-extrabold">MEN'S TEAM</a>
            </li>
            <li>
              <a className="cursor-pointer font-extrabold">WOMEN'S TEAM</a>
            </li>
            <li>
              <a className="cursor-pointer font-extrabold">
                TICKETS & HOSPITALITY
              </a>
            </li>
            <li>
              <a className="cursor-pointer font-extrabold">SHOP</a>
            </li>
          </ul>
        </nav>
        <div className="flex w-min justify-center text-xl">
          <button className="p-5 xl:p-8" onClick={onOpenSearch}>
            <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
          </button>
          <button
            onClick={onOpenNav}
            className="p-5 text-primary xl:grid xl:bg-primary xl:px-10 xl:py-8 xl:text-sm xl:text-white"
          >
            <i className="fa-solid fa-bars text-primary xl:text-2xl xl:text-white"></i>
            <span className="hidden xl:inline">MORE</span>
          </button>
        </div>
      </header>
    </>
  );
}
