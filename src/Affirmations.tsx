import { animated, useTransition } from "@react-spring/web";

export function Affirmations({ affirmations }: { affirmations: string[] }) {
  const transitions = useTransition(affirmations, {
    trail: 2500,
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });

  return transitions((style, item, ts, index) => {
    return (
      <div className="flex flex-row items-center gap-3 mb-3">
        <animated.span className="text-xl font-bold" style={style}>
          {index + 1}
        </animated.span>
        <animated.span className="leading-5" style={style}>
          {item}
        </animated.span>
      </div>
    );
  });
}

export default Affirmations;
