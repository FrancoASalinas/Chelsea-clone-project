import useCarousel from '../utils/useCarousel';
import { useState } from 'react';

export default function Carousel() {
  const [carousel, setCarousel] = useCarousel(0);

  function carouselImg() {
    switch (carousel) {
      case 0:
        return 'https://picsum.photos/seed/zero/5000/';
        break;
      case 1:
        return 'https://picsum.photos/seed/one/5000';
        break;
      case 2:
        return 'https://picsum.photos/seed/two/5000';
        break;
    }
  }

  function onMouseEnter(e) {
    carousel !== Number(e.target.value)
      ? setCarousel(Number(e.target.value))
      : null;
  }
  return (
    <div className="relative h-[34rem] bg-gradient-to-b from-primary to-details">
      <img
        onLoad={() => useCarousel}
        src={carouselImg()}
        className="h-full w-full object-cover transition-all"
      ></img>
      <div className="absolute bottom-0 flex h-12 w-full items-center justify-evenly ">
        <Button value={0} onMouseEnter={onMouseEnter} carousel={carousel} />
        <Button value={1} onMouseEnter={onMouseEnter} carousel={carousel} />
        <Button value={2} onMouseEnter={onMouseEnter} carousel={carousel} />
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
            ? 'relative mx-2 h-2 flex-grow overflow-hidden rounded-xl bg-white before:absolute before:left-0 before:top-0 before:h-full before:w-full before:translate-x-0 before:rounded-xl before:bg-primary before:transition before:duration-[5000ms] before:ease-linear'
            : 'relative mx-2 h-2 flex-grow overflow-hidden rounded-xl bg-white before:absolute before:left-0 before:top-0 before:h-full before:w-full before:translate-x-[-100%] before:rounded-xl before:bg-primary'
        }
      ></button>
    );
  }
  
