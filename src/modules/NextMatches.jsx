import Match from './Match';

export default function NextMatches() {
  return (
    <div className=" relative left-0 top-0 flex w-full items-center overflow-x-scroll bg-transparent">
      <Match
        date={'SUN 28 MAY 2023'}
        competition={'Premier League'}
        result={[1, 1]}
      />
      <Match
        date={'SUN 28 MAY 2023'}
        competition={'Premier League'}
        result={[1, 1]}
      />
      <Match
        date={'SUN 28 MAY 2023'}
        competition={'Premier League'}
        result={[1, 1]}
      />
    </div>
  );
}
