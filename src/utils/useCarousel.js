import { useState, useEffect } from 'react';

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

  return [carousel, setCarousel, src, label];
}
