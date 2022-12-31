import { animated, useTransition } from "@react-spring/web";

export default function Affirmations({ list }: { list: string[] }) {
  const transitions = useTransition(list, {
    trail: 1000,
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });

  return transitions((style, item, _ts, index) => {
    return (
      <div className="flex flex-row items-center my-0 text-primary-content">
        <p className="my-1">
          <animated.span className="leading-5" style={style}>
            {item}
          </animated.span>
        </p>
      </div>
    );
  });
}
