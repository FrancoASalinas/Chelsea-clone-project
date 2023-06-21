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
    }, 5000);
    return () => clearTimeout(timeID);
  }

  return [carousel, setCarousel];
}
