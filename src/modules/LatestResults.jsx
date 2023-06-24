import { useState } from 'react';

export default function LatestResults() {
  const [isActive, setIsActive] = useState(1);
  console.log(isActive);

  function handleClick(e) {
    setIsActive(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="relative bg-primary">
      <div className=" absolute left-0 right-0 mx-auto flex h-12 w-min items-center justify-between rounded-full bg-gray-200">
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
      <div></div>
    </div>
  );
}

function Button({ label, value, isActive }) {
  return (
    <button
      value={value}
      className={
        isActive === value
          ? 'shadow-black-500 m-3  bg-white px-3 text-primary shadow-md'
          : 'm-3 px-3  text-primary'
      }
    >
      {label}
    </button>
  );
}
