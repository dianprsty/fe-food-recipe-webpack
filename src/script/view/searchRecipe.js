import $ from "jquery";
import "../components/food-card";
import { searchFoods } from "../data/API";
import seeDetailRecipe from "./detailRecipe";

const searchRecipe = async () => {
  let search = $("#search-input").val();
  search = search.trim();
  if (!search) {
    $("#search-result-container").html("<div></div>");
    return;
  }

  const searchResult = await searchFoods(search);

  $("#search-result-container").html(
    `<h2 class="text-2xl text-slate-900 font-semibold">Food Seach Result</h2>
      <div
            class="food-group w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 relative"
            id="search-result-group"
          ></div>
      `,
  );

  $("#search-result-group").html(
    !searchResult
      ? "<p class='text-lg font-semibold text-center to-slate-600 absolute w-full'>Food Recipe NotFound</p>"
      : searchResult.map((food) => {
          const foodCard = document.createElement("food-card");
          foodCard.food = food;
          return foodCard;
        }),
  );

  $("button.see-detail").on("click", async (event) => {
    await seeDetailRecipe(event.target.id);
    $(window).scrollTop($("#search-result-container").height());
  });
};

export default searchRecipe;
