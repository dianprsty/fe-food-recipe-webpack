import "regenerator-runtime";
import "./css/style.css";
import $ from "jquery";
import "./script/components/header-component";
import renderAllRecipe from "./script/view/allRecipe";
import searchRecipe from "./script/view/searchRecipe";

$(async () => {
  renderAllRecipe();
  $("#search-button").on("click", searchRecipe);
  $("#search-input").on("keydown", (event) => {
    const key = event.which;
    if (key === 13) searchRecipe();
  });
  $("#home-logo").on("click", () => {
    $(window).scrollTop(0);
  });
});
