class FoodCard extends HTMLElement {
  #food;

  set food(food) {
    this.#food = food;
    this.render();
  }

  render() {
    this.innerHTML = `<div
    class="min-w-64 p-2 shadow-lg rounded border border-slate-200 flex flex-col h-full justify-between gap-2 bg-orange-100"
  >
    <div
      class="w-full object-cover overflow-hidden rounded aspect-square"
    >
      <img
        src="${this.#food.strMealThumb}"
        alt="food-image"
        class=" border border-slate-200"
      />
    </div>
    <h3 class="text-center font-semibold to-slate-900">${this.#food.strMeal}</h3>
    <button class="w-full p-2 rounded-sm bg-orange-600 text-white see-detail" id="${this.#food.idMeal}"
    >
      See Recipe
    </button>
  </div>`;
  }
}

customElements.define("food-card", FoodCard);
