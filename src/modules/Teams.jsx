export default function Teams() {
  return (
    <article className=" bg-details py-16 ">
      <div className="ml-5 flex h-[22rem] w-full overflow-x-scroll px-8">
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
      className="mx-5 h-full min-w-[13rem] bg-white "
    >
      <span className="inline-block px-3 py-4 text-4xl">{label}</span>
    </div>
  );
}
