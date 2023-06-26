export default function Match({ date, competition, result }) {
  return (
    <div className=" mx-5  h-max min-w-max bg-white">
      <div className="flex flex-col items-center justify-between p-5 px-10">
        <span className="text-sm text-gray-500">{date}</span>
        <span className="text-xs text-gray-400">{competition}</span>
        <div className="pb-10">
          <div>
            <img></img>
            <span></span>
          </div>
          <div className="flex w-16 justify-evenly border border-solid border-gray-500 text-2xl text-primary">
            <span>{result[0]}</span>-<span>{result[1]}</span>
          </div>
          <div>
            <img></img>
            <span></span>
          </div>
        </div>
      </div>
      <div className="w-full bg-primary  px-10 py-5 text-white">
        Match Centre
      </div>
    </div>
  );
}
