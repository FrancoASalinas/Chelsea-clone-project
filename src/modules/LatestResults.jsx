import { useState } from 'react';
import NextMatches from './NextMatches';

export default function LatestResults() {
  const [isActive, setIsActive] = useState(1);

  function handleClick(e) {
    setIsActive(Number(e.target.value));
  }

  return (
    <div className="relative mt-20 h-80 w-full bg-primary px-2 pb-56">
      <div className=" absolute left-0 right-0 mx-auto flex h-12 w-min -translate-y-1/2 items-center justify-between gap-2 rounded-full bg-gray-200">
        <Button
          label={'Mens'}
          onClick={handleClick}
          value={1}
          isActive={isActive}
        />
        <Button
          label={'Women'}
          onClick={handleClick}
          value={2}
          isActive={isActive}
        />
        <Button
          label={'Academy'}
          onClick={handleClick}
          value={3}
          isActive={isActive}
        />
      </div>
      <div className="relative top-1/2">
        <NextMatches />
      </div>
    </div>
  );
}

function Button({ label, value, isActive, onClick }) {
  return (
    <button
      value={value}
      className={
        isActive === value
          ? 'm-3 mx-1 rounded-full bg-white  p-2 text-primary shadow-sm shadow-black'
          : 'm-3 mx-1 p-2  text-primary'
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
}
