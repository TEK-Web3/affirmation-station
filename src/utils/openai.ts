import { Configuration, OpenAIApi } from "openai";
const config = new Configuration({
  apiKey: import.meta.env.VITE_OPEN_API_KEY,
});

const chatGptClient = new OpenAIApi(config);

const generateAffirmations = async (mood: string) => {
  const { data } = await chatGptClient.createCompletion({
    model: "text-davinci-003",
    prompt: `Create a list of 5 positive affirmations for someone who is ${mood}`,
    temperature: 0.5,
    max_tokens: 2048,
  });

  return data;
};

export { generateAffirmations };
