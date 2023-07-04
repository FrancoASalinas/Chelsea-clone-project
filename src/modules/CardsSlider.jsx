import { useState } from 'react';
import Cards from './Cards';
import Arrows from './Arrows';

export default function CardsSlider({ label }) {
  const [index, setIndex] = useState(0);

  return (
    <section className="my-16 w-full overflow-x-hidden text-details">
      <div className="flex h-full justify-between">
        <h3 className="text-2xl font-bold">
          {label} <i className="fa-solid fa-arrow-right"></i>
        </h3>
        <div>
          <Arrows
            index={index}
            onNext={() => setIndex((prev) => prev + 1)}
            onPrev={() => setIndex((prev) => prev - 1)}
            max={3}
          />
        </div>
      </div>
      <div className="relative h-80 w-full xl:h-[30rem]">
        <div
          className={`relative flex w-[50rem] items-center transition-all duration-1000 sm:w-[80rem] lg:w-[130rem] xl:w-[180rem] 2xl:w-[220rem]`}
          style={{
            transform: `translateX(calc(-100%/6*${index}))`,
          }}
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
