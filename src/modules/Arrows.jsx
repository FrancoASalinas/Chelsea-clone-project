export default function Arrows({ index, max, onPrev, onNext }) {
  return (
    <div className="flex w-min">
      <button
        onClick={onPrev}
        disabled={index === 0 ? true : false}
        className="mx-1 mb-4 bg-light px-5 py-3 font-extrabold text-white transition-all duration-300 disabled:bg-opacity-40"
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button
        onClick={onNext}
        disabled={index === max ? true : false}
        className="mb-4  bg-light px-5 py-3 font-extrabold text-white transition-all duration-300 disabled:bg-opacity-40"
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
}
