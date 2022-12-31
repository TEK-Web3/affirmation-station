import create from "zustand";

type State = {
  mood: string;
  category: string;
  affirmations: string[] | undefined;
  isLoading: boolean;
};

export const useAffirmation = create<State>((set) => ({
  mood: "",
  category: "",
  affirmations: undefined,
  isLoading: false,
}));
