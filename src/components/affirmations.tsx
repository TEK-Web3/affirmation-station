import TypeWritterText from "./TypeWritterText";
import { useAffirmation } from "../utils/useAffirmation";

export default function Affirmations() {
  const { affirmations } = useAffirmation();

  if (!affirmations) return null;

  const topFiveAffirmations =
    affirmations?.filter((a) => a.length > 0).map((af) => af.slice(3)) ?? [];

  return (
    <div className="text-md text-primary mt-5 card bg-base-200 p-4 px-8 shadow-lg mb-28 lg:mb-5">
      <TypeWritterText list={topFiveAffirmations} />
    </div>
  );
}
