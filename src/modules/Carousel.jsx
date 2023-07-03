import useCarousel from '../utils/useCarousel';
import { useState } from 'react';
import Arrows from './Arrows';

export default function Carousel() {
  const [carousel, setCarousel, src, label] = useCarousel(0);

  function onPrev() {
    setCarousel((prev) => prev - 1);
  }

  function onNext() {
    setCarousel((prev) => prev + 1);
  }

  function onMouseEnter(e) {
    carousel !== Number(e.currentTarget.value)
      ? setCarousel(Number(e.currentTarget.value))
      : null;
  }
  return (
    <div className="relative h-[34rem] bg-gradient-to-b from-primary to-details text-white xl:h-[50rem]">
      <img
        onLoad={() => useCarousel}
        src={src}
        className="h-full w-full object-cover object-top transition-all duration-500"
      ></img>
      <div className="absolute bottom-0 w-full xl:bottom-[10%] ">
        <h2 className="text-3xl font-bold xl:p-6">{label}</h2>
        <div className="flex h-12 w-full items-center justify-evenly divide-opacity-30 xl:hidden ">
          <Button value={0} onMouseEnter={onMouseEnter} carousel={carousel} />
          <Button value={1} onMouseEnter={onMouseEnter} carousel={carousel} />
          <Button value={2} onMouseEnter={onMouseEnter} carousel={carousel} />
        </div>
        <div className="relative mx-auto mt-10 hidden h-12 w-max items-center justify-center  divide-x-2 divide-gray-500 divide-opacity-30 p-6 xl:flex">
          <div className="absolute -top-24 right-6 z-10">
            <Arrows index={carousel} max={2} onPrev={onPrev} onNext={onNext} />
          </div>
          <ButtonCardStyle
            value={0}
            onMouseEnter={onMouseEnter}
            carousel={carousel}
          />
          <ButtonCardStyle
            value={1}
            onMouseEnter={onMouseEnter}
            carousel={carousel}
          />
          <ButtonCardStyle
            value={2}
            onMouseEnter={onMouseEnter}
            carousel={carousel}
          />
        </div>
      </div>
    </div>
  );
}

function ButtonCardStyle({ value, onMouseEnter, carousel }) {
  return (
    <button
      value={value}
      onMouseEnter={onMouseEnter}
      className={`${
        carousel === value && 'bg-white'
      } relative flex h-[7rem] w-[26rem] flex-col justify-start bg-gray-300 p-3 font-extrabold transition-all duration-500`}
    >
      <h4 className="text-details">Type</h4>
      <p className=" text-xl text-primary">Bla bla bla bla</p>
      <div
        className={`absolute bottom-0 left-0 h-1 w-full overflow-hidden before:absolute before:left-0 before:h-full before:w-full before:-translate-x-full before:bg-primary ${
          carousel === value &&
          ' before:translate-x-0 before:transition-all before:duration-[10s] before:ease-linear'
        }`}
      ></div>
    </button>
  );
}

function Button({ value, onMouseEnter, carousel }) {
  return (
    <>
      <button
        onMouseEnter={onMouseEnter}
        value={value}
        className={
          carousel === value
            ? 'relative z-50 mx-2 h-1 flex-grow overflow-hidden rounded-xl bg-gray-300 before:absolute before:left-0 before:top-0 before:z-0 before:h-[5px] before:w-full before:translate-x-0 before:rounded-xl before:bg-details before:transition before:duration-[10s] before:ease-linear'
            : 'xl relative z-50 mx-2 h-1 flex-grow overflow-hidden rounded-xl bg-gray-300 before:absolute before:left-0 before:top-0 before:z-0 before:h-[5px] before:w-full before:translate-x-[-100%] before:rounded-xl before:border-details before:bg-details'
        }
      ></button>
    </>
  );
}
