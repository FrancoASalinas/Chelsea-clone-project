import useCarousel from '../utils/useCarousel';
import { useState } from 'react';

export default function Carousel() {
  const [carousel, setCarousel] = useCarousel(0);

  function carouselImg() {
    switch (carousel) {
      case 0:
        return {
          src: 'src/assets/carousel1.jpg',
          label: 'Lorem Ipsum ',
        };
        break;
      case 1:
        return {
          src: 'src/assets/carousel2.jpg',
          label: 'Lorem Ipsum',
        };
        break;
      case 2:
        return {
          src: 'src/assets/carousel3.jpg',
          label: 'Lorem Ipsum',
        };
        break;
    }
  }

  const { src, label } = carouselImg();

  function onMouseEnter(e) {
    carousel !== Number(e.target.value)
      ? setCarousel(Number(e.target.value))
      : null;
  }
  return (
    <div className="relative h-[34rem] bg-gradient-to-b from-primary to-details text-white">
      <img
        onLoad={() => useCarousel}
        src={src}
        className="h-full w-full object-cover object-top transition-all"
      ></img>
      <div className="absolute bottom-0 w-full">
        <h2 className="text-3xl font-bold">{label}</h2>
        <div className=" flex h-12 w-full items-center justify-evenly ">
          <Button value={0} onMouseEnter={onMouseEnter} carousel={carousel} />
          <Button value={1} onMouseEnter={onMouseEnter} carousel={carousel} />
          <Button value={2} onMouseEnter={onMouseEnter} carousel={carousel} />
        </div>
      </div>
    </div>
  );
}

function Button({ value, onMouseEnter, carousel }) {
  return (
    <button
      onMouseEnter={onMouseEnter}
      value={value}
      className={
        carousel === value
          ? 'relative z-50 mx-2 h-1 flex-grow overflow-hidden rounded-xl bg-gray-300 before:absolute before:left-0 before:top-0 before:z-0 before:h-[5px] before:w-full before:translate-x-0 before:rounded-xl before:bg-details before:transition before:duration-[5000ms] before:ease-linear'
          : 'before:border-bg-details relative z-50 mx-2 h-1 flex-grow overflow-hidden rounded-xl bg-gray-300 before:absolute before:left-0 before:top-0 before:z-0 before:h-[5px] before:w-full before:translate-x-[-100%] before:rounded-xl before:bg-details'
      }
    ></button>
  );
}
