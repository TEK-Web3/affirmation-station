import { useAffirmation } from "../utils/useAffirmation";
import { generateAffirmations } from "../utils/openai";
import Modal from "./modal";
import Affirmations from "./affirmations";

export default function Submit() {
  const { mood, category, isLoading, affirmations, resetState } =
    useAffirmation();

  const canSubmit = Boolean(mood.length > 0 && category.length > 0);
  const topFiveAffirmations =
    affirmations?.filter((a) => a.length > 0).map((af) => af.slice(3)) ?? [];

  const onClickHandler = () => {
    if (!canSubmit) return;

    useAffirmation.setState({ isLoading: true });
    generateAffirmations(mood).then((resp) => {
      useAffirmation.setState({
        affirmations: resp.choices[0].text?.split(/\r?\n/),
      });
      useAffirmation.setState({ isLoading: false });
    });
  };

  return (
    <>
      <div className="w-full lg:w-fit lg:py-0 lg:rounded-lg fixed lg:mx-auto lg:relative bottom-0 lg:bottom-auto lg:mb-10 left-0 bg-base-200 lg:mt-8">
        <label
          htmlFor={canSubmit ? "submit" : "disabled"}
          className={`btn ${
            canSubmit ? "bg-inherit" : "btn-disabled text-base-300"
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
            GET MY DAILY AFFIRMATIONS
          </span>
        </label>
      </div>

      <Modal closeHandler={resetState} isLoading={isLoading} id="submit">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center">
            <img src="/puff.svg" width="75" />
            <h2 className="mt-0 text-primary-content">
              Creating Affirmations...
            </h2>
          </div>
        ) : (
          <>
            <h2 className="mt-0">5 Daily Affirmations</h2>
            <Affirmations list={topFiveAffirmations} />
            <button
              onClick={onClickHandler}
              className="flex btn w-full btn-active border-none normal-case frank text-lg mt-4"
            >
              Refresh Affirmations
            </button>
          </>
        )}
      </Modal>
    </>
  );
}
