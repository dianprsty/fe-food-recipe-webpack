class FoodDetail extends HTMLElement {
  #food;

  set food(food) {
    this.#food = food;
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2 class="text-2xl my-6 text-slate-900 font-semibold">${
      this.#food.strMeal
    }</h2>
        <div class="w-full flex mb-6 flex-col gap-8" id="food-detail">
          <div
            class="w-full flex flex-col gap-8 items-center lg:items-start lg:flex-row"
          >
            <div class="max-w-96 w-full flex flex-col gap-2">
              <div
                class="w-full object-cover overflow-hidden rounded aspect-square border-2 border-orange-400"
              >
                <img
                src="${this.#food.strMealThumb}"
                alt="food-image"
                class="w-full"
                />
              </div>
              <div class="w-full p-2 rounded border-2 border-orange-400 bg-orange-100 text-orange-500 font-semibold text-center">${
                this.#food.strArea
              }</div>
              <div class="w-full p-2 rounded border-2 border-orange-400 bg-orange-100 text-orange-500 font-semibold text-center">${
                this.#food.strCategory
              }</div>
              <a href="${
                this.#food.strYoutube
              }" target="_blank" class="w-full p-2 rounded bg-red-600 text-white font-semibold text-center">Watch in Youtube</a>
            </div>
            <div class="flex flex-col items-center gap-6 p-6 rounded  bg-orange-100">
            <p class="text-2xl text-slate-900 font-semibold">Ingredients</p>

            <div
            class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 md:gap-6 gap-2 "
            >${this.#food.ingredients
              .map((ingredient) => {
                return `<div class="p-2 flex flex-col justify-between">
                  <div
                    class="w-full object-covar overflow-hidden rounded aspect-square"
                  >
                    <img
                      src="https://www.themealdb.com/images/ingredients/${ingredient.name}-Small.png"
                      alt="food-image"
                      class="w-full"
                    />
                  </div>
                  <p class="text-center font-medium text-slate-900">${ingredient.quantity}</p>
                  <p class="text-center font-medium text-slate-900">
                    ${ingredient.name}
                  </p>
                </div>`;
              })
              .join("")}
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-6 p-6 rounded  bg-orange-100">
            <p class="font-bold text-lg">Instruction</p>
            <div class="flex flex-col  font-medium gap-4">
            ${this.#food.instructions
              .map((step) => {
                return `<p class="text-justify" >
                  ${step}
                </p>`;
              })
              .join("")}

            </div>
          </div>
        </div>
    `;
  }
}

customElements.define("food-detail", FoodDetail);
