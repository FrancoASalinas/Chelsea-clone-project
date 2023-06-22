import useCarousel from '../utils/useCarousel';

export default function Main() {
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
    <main className="relative">
      <div className="relative h-[34rem]">
        {/* <img
          onLoad={() => useCarousel}
          src={carouselImg()}
          className="h-full w-full object-cover"
        ></img> */}
        <div className="absolute bottom-0 flex h-12 w-full items-center justify-evenly ">
          <Button value={0} onMouseEnter={onMouseEnter} carousel={carousel} />
          <Button value={1} onMouseEnter={onMouseEnter} carousel={carousel} />
          <Button value={2} onMouseEnter={onMouseEnter} carousel={carousel} />
        </div>
      </div>
      <div
        className="fixed right-0 top-1/2 flex h-32 w-10 rotate-180 flex-col-reverse bg-primary text-center text-white"
        style={{ writingMode: 'vertical-rl' }}
      >
        Feedback
      </div>
    </main>
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
