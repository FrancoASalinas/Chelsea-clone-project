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
      <header className="flex h-16 w-full items-center justify-between border border-x-[#aaa] bg-white py-10 shadow-2xl shadow-neutral-950 xl:relative xl:h-max xl:border-none xl:p-0">
        <img
          src="src/assets/logo.png"
          className="ml-5 w-16  bg-cover xl:w-20"
        ></img>
        <nav className="hidden h-[7.2rem] text-xl text-primary xl:flex">
          <ul className="flex h-full items-center">
            <ListItem label={'LATEST'}>
              <li className="my-2 cursor-pointer p-2">Lorem</li>
              <li className="my-2 cursor-pointer p-2">Lorem</li>
              <li className="my-2 cursor-pointer p-2">Lorem</li>
            </ListItem>
            <ListItem label="WATCH">
              <li className="my-2 cursor-pointer p-2">Lorem</li>
              <li className="my-2 cursor-pointer p-2">Lorem</li>
            </ListItem>
            <ListItem label={"MEN'S TEAM"}>
              <li className="my-2 cursor-pointer p-2">Lorem</li>
            </ListItem>
            <ListItem label={"WOMEN'S TEAM"}>
              <li className="my-2 cursor-pointer p-2">Lorem</li>
            </ListItem>
            <ListItem label="TICKETS & HOSPITALITY">
              <li className="my-2 cursor-pointer p-2">Lorem</li>
            </ListItem>
            <ListItem label="SHOP">
              <li className="my-2 cursor-pointer p-2">Lorem</li>
            </ListItem>
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

function ListItem({ label, children }) {
  return (
    <li
      className=" group flex h-full cursor-pointer items-center border-b-4
 border-primary border-opacity-0 px-5 font-extrabold hover:border-opacity-100  2xl:px-16"
    >
      <a className="">{label}</a>
      <ul className="absolute left-0 top-full z-50 hidden h-80 w-full bg-primary p-10 text-white group-hover:block">
        {children}
      </ul>
    </li>
  );
}
