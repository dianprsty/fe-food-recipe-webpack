import axios from "axios";
import { hideLoading, showLoading } from "../utils/loading";

const LOCAL_KEY = "foods_data";

export const getAllRecipe = async () => {
  showLoading();

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const localData = localStorage.getItem(LOCAL_KEY);

  if (localData) {
    hideLoading();
    return JSON.parse(localData);
  }

  const data = await Promise.all(
    alphabet.map(async (char) => {
      let result = [];
      try {
        result = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${char}`,
        );
      } catch (error) {
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

  localStorage.setItem(LOCAL_KEY, JSON.stringify(result));

  return result;
};

export const getRecipeById = async (id) => {
  let result = [];
  const localData = localStorage.getItem(LOCAL_KEY);

  if (localData) {
    result = JSON.parse(localData).find((food) => {
      return food.idMeal === id;
    });
    return result;
  }
  try {
    showLoading();
    result = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
  } catch (error) {
    //
  } finally {
    hideLoading();
  }
  return result.data.meals[0];
};

export const searchFoods = async (search) => {
  const localData = localStorage.getItem(LOCAL_KEY);

  let result = [];
  if (localData) {
    result = JSON.parse(localData).filter((food) => {
      return food.strMeal.toLowerCase().includes(search.toLowerCase());
    });
    return result;
  }
  try {
    showLoading();
    result = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
    );
  } catch (error) {
    //
  } finally {
    hideLoading();
  }
  return result.data.meals;
};
