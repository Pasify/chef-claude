import { useState } from "react";
import IngredientLIst from "./IngredientLIst";
import Recommendation from "./Recommendation";
import useRecipe from "../hooks/useRecipe";

function Main() {
  let ingredients = [];
  const [ingredientList, setIngredientList] = useState(ingredients);
  const [isRecipeVisible, setIsRecipeVisible] = useState(false);
  const { data } = useRecipe();

  function handleAddIngredient(newIngredient) {
    setIngredientList((previousIngredients) => [
      ...previousIngredients,
      newIngredient,
    ]);
  }
  function handleFormSubmit(formData) {
    const { ingredient } = Object.fromEntries(formData);
    handleAddIngredient(ingredient);
  }
  function toggleRecipeVisibility() {
    setIsRecipeVisible((prev) => !prev);
  }

  // if (isSuccess && data) console.log(`data is available here:`, data);
  return (
    <main>
      <form action={handleFormSubmit} className="ingredient-form">
        <input
          type="text"
          placeholder="e.g Tomatoes"
          aria-label="Add Ingredient"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>

      <section>
        {ingredientList.length === 0 ? (
          <p>Add some ingredients to find best recipes</p>
        ) : (
          <>
            <IngredientLIst
              ingredients={ingredientList}
              toggleRecipeVisibility={toggleRecipeVisibility}
            />
          </>
        )}
      </section>

      {data ? <Recommendation /> : null}
    </main>
  );
}

export default Main;
