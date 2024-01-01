const extractDetailRecipe = (food) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = {};
    ingredient.name = food[`strIngredient${i}`];
    ingredient.quantity = food[`strMeasure${i}`];
    if (ingredient.name) ingredients.push(ingredient);
  }

  const instructions = food.strInstructions.split("\r\n");
  console.log(instructions);

  return {
    strMeal: food.strMeal,
    strMealThumb: food.strMealThumb,
    strCategory: food.strCategory,
    strArea: food.strArea,
    strYoutube: food.strYoutube,
    ingredients,
    instructions,
  };
};

export default extractDetailRecipe;
