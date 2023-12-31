import { useState, useRef } from 'react';
import Cards from './Cards';
import Arrows from './Arrows';

export default function CardsSlider({ label }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);

  const animationRef = useRef();

  window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  console.log(currentTranslate);

  function getPositionX(event) {
    return event.touches[0].clientX;
  }

  function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
  }

  function setSliderPosition() {
    return `translateX(${currentTranslate}px)`;
  }

  function handleTouchStart(event) {
    setStartPos(getPositionX(event));
    setIsDragging(true);

    animationRef.current = requestAnimationFrame(animation);
  }

  function handleTouchMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      setCurrentTranslate(currentPosition - startPos);
    }
  }

  function handleTouchEnd() {
    setIsDragging(false);
    cancelAnimationFrame(animationRef.current);
  }

  return (
    <section className=" my-16 ml-5 w-full overflow-x-hidden border text-details">
      <div className="flex h-full justify-between">
        <h3 className="text-2xl font-bold">
          {label} <i class="fa-solid fa-arrow-right"></i>
        </h3>
        <Arrows />
      </div>
      <div className="relative h-80 w-full">
        <div
          className="absolute left-0 top-0 flex items-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ transform: setSliderPosition() }}
        >
          <Cards
            label="something"
            img={'https://picsum.photos/1000'}
            type={'video'}
          />
          <Cards
            label="something"
            img={'https://picsum.photos/1000'}
            type={'video'}
          />
          <Cards
            label="something"
            img={'https://picsum.photos/1000'}
            type={'video'}
          />
          <Cards
            label="something"
            img={'https://picsum.photos/1000'}
            type={'video'}
          />
          <Cards
            label="something"
            img={'https://picsum.photos/1000'}
            type={'video'}
          />
          <Cards
            label="something"
            img={'https://picsum.photos/1000'}
            type={'video'}
          />
        </div>
      </div>
    </section>
  );
}
