import Carousel from './Carousel';
import Feedback from './Feedback';
import CardsSlider from './CardsSlider';
import LatestResults from './LatestResults';
import { useState } from 'react';

export default function Main() {
  return (
    <main className="relative bg-white">
      {/* <Carousel /> */}
      <Feedback />
      <CardsSlider label={'Latest Video'} />
      <CardsSlider label={'Latest News'} />
      <LatestResults />
    </main>
  );
}
