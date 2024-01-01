class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<header
    class="w-full z-10 m-0 bg-orange-600 text-white py-4 sm:px-12 sticky top-0 flex flex-col sm:flex-row justify-center sm:justify-start gap-4 md:gap-8 items-center"
  >
    <h1 class="text-xl font-bold text-center text-nowrap cursor-pointer" id="home-logo">
      Delicious Recipe
    </h1>
    <div
      class="bg-white w-5/6 lg:w-3/5 flex gap-1 sm:gap-4 shadow-lg border border-slate-200 p-1 rounded-md overflow-hidden"
    >
      <input
        class="flex-1 border-none focus:outline-none text-slate-900 sm:ml-4"
        id="search-input"
        type="text"
        placeholder="Search Recipe"
      />
      <button
        class="bg-orange-500 p-2 font-semibold text-white rounded"
        id="search-button"
      >
        Search
      </button>
    </div>
  </header>`;
  }
}

customElements.define("header-component", HeaderComponent);
