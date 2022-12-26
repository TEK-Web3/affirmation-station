import { useState } from "react";
import { MOODS, CATEGORIES } from "./utils/constants";

function App() {
  const [mood, setMood] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const canSubmit = Boolean(mood.length > 0 && category.length > 0);
  const resetState = () => {
    setMood("");
    setCategory("");
  };

  return (
    <div className="prose max-w-none w-full">
      <div className="max-w-3xl mx-auto px-4">
        <h3>Pick your Mood: {mood}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {MOODS.map(({ color, name, emoji }) => (
            <button
              key={name}
              onClick={() => setMood(name)}
              className={`shadow rounded-none btn ${color} ${
                mood === name ? "border-2 border-base-content" : ""
              }`}
            >
              {name} {emoji}
            </button>
          ))}
        </div>

        <h3>Pick affirmation category: {category}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`border rounded-none border-base-300 btn btn-ghost normal-case ${
                category === c ? "btn-active" : "".trim()
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-10">
          <button
            disabled={!canSubmit}
            className="btn w-fit btn-lg btn-primary normal-case text-white shadow-lg"
          >
            {!canSubmit ? "Choose mood & Category" : "Generate Affirmations"}
          </button>

          {canSubmit && (
            <button onClick={resetState} className="btn btn-ghost mt-2 gap-2">
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
