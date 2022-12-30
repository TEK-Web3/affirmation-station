import { animated, useTransition } from "@react-spring/web";

export function TypeWritterText({ list }: { list: string[] }) {
  const transitions = useTransition(list, {
    trail: 1000,
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });

  return transitions((style, item, _ts, index) => {
    return (
      <div className="flex flex-row items-center gap-3 my-1">
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

export default TypeWritterText;
