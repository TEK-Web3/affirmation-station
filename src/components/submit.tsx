import { useAffirmation } from "../utils/useAffirmation";
import { generateAffirmations } from "../utils/openai";

export default function Submit() {
  const { mood, category, isLoading } = useAffirmation();
  const canSubmit = Boolean(mood.length > 0 && category.length > 0);

  const onClickHandler = () => {
    useAffirmation.setState({ isLoading: true });
    generateAffirmations(mood).then((resp) => {
      useAffirmation.setState({
        affirmations: resp.choices[0].text?.split(/\r?\n/),
      });
      useAffirmation.setState({ isLoading: false });
    });
  };

  return (
    <div className="w-full lg:w-fit py-2 lg:py-0 lg:rounded-lg fixed lg:mx-auto lg:relative bottom-0 lg:bottom-auto lg:mb-10 left-0 bg-base-200 lg:mt-8">
      <button
        disabled={!canSubmit}
        className={`btn ${
          canSubmit ? "bg-inherit" : "bg-base-300"
        } border-none frank w-full btn-lg normal-case text-white shadow-lg ${
          isLoading ? "loading" : "".trim()
        }`}
        onClick={onClickHandler}
      >
        {!isLoading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 ${
              canSubmit ? "text-success" : "text-disabled"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        )}
        <span className="text-md md:text-xl font-normal ml-3">
          {isLoading ? "Loading Affirmations" : "Give Me My Affirmations!"}
        </span>
      </button>
    </div>
  );
}
