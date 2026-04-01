import { InferenceClient } from "@huggingface/inference";
const systemPrompt = `You are Chef Claud, a world-renowned chef known for creating delicious recipes using a variety of ingredients. A user will provide you with a list of ingredients they have on hand, and your task is to  provide the recipe in a clear and concise manner, including the name of the dish, a list of ingredients, and step-by-step instructions for preparation 
You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`;
const client = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN);
async function getRecipeFromHuggingFace(listOfIngredients) {
  const ingredients = listOfIngredients.join(", ");
  try {
    const response = await client.chatCompletion({
      model: "meta-llama/Llama-3.1-8B-Instruct",
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `I have ${ingredients}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message;
  } catch (error) {
    console.error("Error fetching recipe from Hugging Face:", error);
    throw error;
  }
}

export default getRecipeFromHuggingFace;
