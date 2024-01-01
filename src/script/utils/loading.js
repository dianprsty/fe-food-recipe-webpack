import $ from "jquery";

const loading = `<div
    id="loading"
      class="fixed opacity-30 bg-orange-200 w-screen h-screen z-50  flex top-0 left-0 justify-center gap-4 items-center"
    >
    <div
      class="rounded-full border-8 border-x-orange-600 border-y-orange-100 w-12 h-12 animate-spin"
    ></div>
    <p class="font-medium text-lg">Loading....</p>
</div>`;

export const showLoading = () => {
  $("body").append(loading);
};

export const hideLoading = () => {
  $("#loading").remove();
};
