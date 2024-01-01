import axios from "axios";
import { hideLoading, showLoading } from "../utils/loading";

export const getAllRecipe = async () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  showLoading();
  const data = await Promise.all(
    alphabet.map(async (char) => {
      let result = [];
      try {
        result = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${char}`,
        );
      } catch (error) {
        console.log(error);
        hideLoading();
      }
      return result.data.meals;
    }),
  );

  hideLoading();
  const result = [];
  data.forEach((meals) => {
    if (meals) result.push(...meals);
  });

  return result;
};

export const getRecipeById = async (id) => {
  let result = [];
  try {
    showLoading();
    result = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
  } catch (error) {
    console.log(error);
  } finally {
    hideLoading();
  }
  return result.data.meals[0];
};

export const searchFoods = async (search) => {
  let result = [];
  try {
    showLoading();
    result = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
    );
  } catch (error) {
    console.log(error);
  } finally {
    hideLoading();
  }
  return result.data.meals;
};
