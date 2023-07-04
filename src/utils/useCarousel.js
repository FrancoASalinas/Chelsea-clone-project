import { useState, useEffect } from 'react';
import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel3.jpg';

export default function useCarousel(initialValue) {
  const [carousel, setCarousel] = useState(initialValue);
  useEffect(() => timeLoad(), [carousel]);

  function timeLoad() {
    const timeID = setTimeout(() => {
      if (carousel === 2) {
        setCarousel(0);
      } else {
        setCarousel((prev) => prev + 1);
      }
    }, 10000);
    return () => clearTimeout(timeID);
  }

  function carouselImg() {
    switch (carousel) {
      case 0:
        return {
          src: carousel1,
          label: 'Lorem Ipsum ',
        };
        break;
      case 1:
        return {
          src: carousel2,
          label: 'Lorem Ipsum',
        };
        break;
      case 2:
        return {
          src: carousel3,
          label: 'Lorem Ipsum',
        };
        break;
    }
  }

  const { src, label } = carouselImg();

  return [carousel, setCarousel, src, label];
}
