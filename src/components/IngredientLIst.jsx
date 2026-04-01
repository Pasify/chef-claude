import { useRecipeGenerator } from "../hooks/UseRecipeGenerator";

function IngredientLIst({ ingredients, toggleRecipeVisibility }) {
  const { generateRecipe, isPending } = useRecipeGenerator();
  function getRecipe(ingredients) {
    console.log("Fetching recipe for:", ingredients);
    generateRecipe(ingredients);
  }

  return (
    <section className="ingredient-list-section">
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      {ingredients.length >= 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>

          <button onClick={() => getRecipe(ingredients)} disabled={isPending}>
            {isPending ? "Getting Recipe..." : "Get Recipe!"}
          </button>
        </div>
      )}
    </section>
  );
}

export default IngredientLIst;
