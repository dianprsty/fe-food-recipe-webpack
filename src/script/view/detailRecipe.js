import $ from "jquery";
import { getRecipeById } from "../data/API";
import "../components/food-detail";
import extractDetailRecipe from "../utils/extractDetailRecipe";

const seeDetailRecipe = async (id) => {
  const food = await getRecipeById(id);
  const foodData = extractDetailRecipe(food);

  const foodDetail = document.createElement("food-detail");
  foodDetail.food = foodData;

  $("#food-recipe-container").html(() => {
    return foodDetail;
  });
};

export default seeDetailRecipe;
