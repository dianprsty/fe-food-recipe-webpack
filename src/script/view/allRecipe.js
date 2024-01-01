import $ from "jquery";
import "../components/food-card";
import { getAllRecipe } from "../data/API";
import seeDetailRecipe from "./detailRecipe";

const renderAllRecipe = async () => {
  const recipe = await getAllRecipe();

  $("#food-container").html(
    `<h2 class="text-2xl text-slate-900 font-semibold">All Food</h2>
    <div
          class="food-group w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 "
          id="food-group"
        ></div>
    `,
  );

  $("#food-group").html(
    recipe.map((food) => {
      const foodCard = document.createElement("food-card");
      foodCard.food = food;
      return foodCard;
    }),
  );

  $("button.see-detail").on("click", async (event) => {
    await seeDetailRecipe(event.target.id);
    $(window).scrollTop($("#search-result-container").height());

    // $(window).scrollTop(0);
  });
};

export default renderAllRecipe;
