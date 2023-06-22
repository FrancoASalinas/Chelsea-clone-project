import { useState } from 'react';

export default function Header({ onOpenSearch, onOpenNav }) {
  return (
    <header className=" flex h-24 w-full items-center justify-between bg-white shadow-2xl">
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
