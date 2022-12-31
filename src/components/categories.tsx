import { CATEGORIES, MOODS } from "../utils/constants";
import { useAffirmation } from "../utils/useAffirmation";

export default function Categories() {
  const { category, mood, affirmations } = useAffirmation();

  const getMoodColor = () => {
    const moodColor = MOODS.find((m) => m.name === mood);
    return `${moodColor?.color ?? "bg-black/50"} ${
      moodColor?.color ? "text-black" : "text-white"
    }`;
  };

  return (
    <div className="border-t border-base-300 pt-4 mt-8 md:text-center">
      <h1 className="mt-3 text-3xl mb-0 text-primary-content">
        Affirmation Type
      </h1>
      <p className="mt-0 italic text-primary-content/80 text-sm">
        Select the category of affirmation you need
      </p>
      <div className="flex flex-row flex-wrap justify-start md:justify-center gap-2.5">
        {CATEGORIES.map((c) => (
          <div
            key={c}
            onClick={() => useAffirmation.setState({ category: c })}
            className={`shadow hover:cursor-pointer px-2.5 text-md sm:text-sm active:scale-95 transition duration-100 py-2 border-none rounded-lg normal-case bg-base-300 ${
              category === c ? getMoodColor() : "text-white/60"
            }`}
            style={{ fontSize: "1rem" }}
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
