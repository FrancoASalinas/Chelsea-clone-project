export default function Cards({ label, img, type }) {
  return (
    <div className="mx-2 h-min w-full cursor-pointer divide-y-2 divide-gray-200 border xl:h-max">
      <div className="h-40 w-full xl:h-[20rem] ">
        <img className="h-full w-full object-cover" src={img}></img>
        <span className="text-2xl text-primary">{label}</span>
      </div>
      <div className="mt-24 flex items-center justify-between">
        <span className="text-primary">{type}</span>
        <span className="text-gray-400">3 hours ago</span>
      </div>
    </div>
  );
}
