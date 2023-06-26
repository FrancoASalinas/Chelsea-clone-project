export default function Header({ onOpenSearch, onOpenNav }) {
  return (
    <header className=" flex h-16 w-full items-center justify-between bg-white py-10 shadow-2xl shadow-neutral-950">
      <button
        style={{
          backgroundImage:
            'url(https://upload.wikimedia.org/wikibooks/en/1/1b/Chelsea_Logo.jpg)',
        }}
        className="ml-5 h-16 w-16 bg-black bg-cover"
      ></button>
      <div className="flex w-min justify-center text-xl">
        <button className="p-5" onClick={onOpenSearch}>
          <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
        </button>
        <button onClick={onOpenNav} className="p-5">
          <i className="fa-solid fa-bars text-primary"></i>
        </button>
      </div>
    </header>
  );
}
