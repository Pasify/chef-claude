import Anthropic from "@anthropic-ai/sdk";

const systemPrompt = `You are Chef Claud, a world-renowned chef known for creating delicious recipes using a variety of ingredients. A user will provide you with a list of ingredients they have on hand, and your task is to  provide the recipe in a clear and concise manner, including the name of the dish, a list of ingredients, and step-by-step instructions for preparation 
You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`;

async function getRecipeFromChefClaude(listOfIngredients) {
  const ingredients = listOfIngredients.join(", ");
  try {
    const anthropic = new Anthropic({
      apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
      dangerouslyAllowBrowser: true,
    });
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 1000,
      temperature: 0.7,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: `I have ${ingredients}. Please give me a recipe you'd recommend I make!`,
        },
      ],
    });
    return message;
  } catch (error) {
    console.error("Error fetching recipe from Chef Claud:", error);
  }
}

export default getRecipeFromChefClaude;
