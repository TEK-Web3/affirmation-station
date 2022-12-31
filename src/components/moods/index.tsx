import { MOODS } from "../../utils/constants";
import { useAffirmation } from "../../utils/useAffirmation";
import MoodButton from "./button";

export default function Moods() {
  const { mood } = useAffirmation();
  return (
    <>
      <h1 className="mt-5 md:mt-10 text-3xl mb-0 text-primary-content md:text-center">
        Welcome Back
      </h1>
      <p className="mt-0 italic text-primary-content/80 text-sm md:text-center">
        Select a color that corresponds to your mood
      </p>

      <div className="grid grid-cols-3 gap-3 md:gap-10 max-w-md mx-auto">
        {MOODS.map(({ color, name }) => (
          <div
            key={name}
            className="flex flex-1 justify-center items-center h-24 md:h-auto"
            onClick={() => useAffirmation.setState({ mood: name })}
          >
            <MoodButton color={color} isActive={Boolean(mood === name)} />
          </div>
        ))}
      </div>
    </>
  );
}
