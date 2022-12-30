import { useState } from "react";
import { MOODS, CATEGORIES } from "./utils/constants";
import { generateAffirmations } from "./utils/openai";
import { TypeWritterText } from "./TypeWritterText";

function App() {
  const [mood, setMood] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [affirmations, setAffirmations] = useState<string[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const canSubmit = Boolean(mood.length > 0 && category.length > 0);
  const resetState = () => {
    setMood("");
    setCategory("");
    setAffirmations(undefined);
  };

  const moodIcon = (mood: string) => {
    const { emoji } = MOODS.find((m) => m.name === mood) || {};
    return emoji;
  };

  const onClickHandler = () => {
    setIsLoading(true);
    generateAffirmations(mood).then((resp) => {
      setAffirmations(resp.choices[0].text?.split(/\r?\n/));
      setIsLoading(false);
    });
  };

  const topFiveAffirmations =
    affirmations?.filter((a) => a.length > 0).map((af) => af.slice(3)) ?? [];

  return (
    <div className="prose max-w-none w-full">
      <div className="max-w-xl mx-auto px-4">
        <h3 className="mt-3 text-center md:text-left text-4xl md:text-2xl">
          Mood: {moodIcon(mood)}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {MOODS.map(({ color, name, emoji }) => (
            <button
              key={name}
              onClick={() => setMood(name)}
              className={`shadow border gap-2 flex flex-row lg:flex-col rounded-lg btn normal-case ${
                mood === name
                  ? `${color}`
                  : "bg-base-200 text-base-content btn-ghost"
              }`}
            >
              <span>{name}</span> <span>{emoji}</span>
            </button>
          ))}
        </div>

        <h3 className="flex flex-col md:flex-row text-center md:text-left text-4xl md:text-2xl items-center gap-1">
          Affirmation category:
          <span className="text-xl md:text-2xl">{category}</span>
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`shadow border-base-300 btn rounded-lg btn-ghost normal-case bg-base-200 ${
                category === c ? "btn-active" : "".trim()
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {topFiveAffirmations.length > 0 && (
          <div className="text-md text-primary mt-5 card bg-base-200 p-8 shadow-lg">
            <TypeWritterText list={topFiveAffirmations} />
          </div>
        )}

        <div className="w-full flex flex-col justify-center items-center mt-10">
          <button
            disabled={!canSubmit}
            className={`btn w-full md:w-fit btn-lg btn-primary normal-case text-white shadow-lg ${
              isLoading ? "loading" : "".trim()
            }`}
            onClick={onClickHandler}
          >
            {!canSubmit
              ? "Choose mood & Category"
              : `${isLoading ? "Generating" : "Generate"} Affirmations`}
          </button>

          {canSubmit && (
            <button onClick={resetState} className="btn btn-ghost my-2 gap-2">
              reset
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
