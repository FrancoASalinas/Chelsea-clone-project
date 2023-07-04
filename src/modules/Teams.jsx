export default function Teams() {
  return (
    <article className=" bg-details py-16 ">
      <div className=" ml-5 flex h-[22rem] w-full overflow-x-auto sm:justify-center">
        <Team label={'MEN'} />
        <Team label={'WOMEN'} />
      </div>
    </article>
  );
}

function Team({ label }) {
  return (
    <div
      style={{ writingMode: 'vertical-lr' }}
      className="group relative mx-5 h-full min-w-[13rem] cursor-pointer overflow-hidden bg-white"
    >
      <span className="inline-block px-3 py-4 text-4xl">{label}</span>
      <div className="absolute left-full top-0 h-full w-1/2 bg-yellow-500 transition-all duration-500 group-hover:-translate-x-3/4"></div>
    </div>
  );
}
