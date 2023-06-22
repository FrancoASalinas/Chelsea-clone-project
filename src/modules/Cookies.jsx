import { useState } from 'react';

export default function Cookies() {
  const [cookies, setCookies] = useState(true);
  return (
    <div
      className={
        cookies
          ? 'align-center border-3 fixed bottom-0 flex h-52 w-full flex-col items-center  justify-around rounded-t-3xl border-solid border-details bg-primary text-xs'
          : 'hidden'
      }
    >
      <p className="px-4 pb-2 pt-8 text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ullam aut
        delectus doloremque, cum, veritatis nam facilis illo quia, aperiam
        provid Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button
        onClick={() => setCookies(false)}
        className="border-1 w-64 rounded-2xl border border-solid border-white bg-yellow-500 px-5 py-3"
      >
        Aceptar todas las cookies
      </button>
    </div>
  );
}
