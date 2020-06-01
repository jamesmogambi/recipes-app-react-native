import { Text } from 'react-native';
import React, { Component } from 'react';
// import { recipes, categories, ingredients } from './dataArrays';

export function getCategoryById(categories,categoryId) {
  let category;
  categories.map(data => {
    if (data.id == categoryId) {
      category = data;
    }
  });
  return category;
}

export function getIngredientName(ingredientID) {
  let name;
  ingredients.map(data => {
    if (data.ingredientId == ingredientID) {
      name = data.name;
    }
  });
  return name;
}

export function getIngredientUrl(ingredientID) {
  let url;
  ingredients.map(data => {
    if (data.ingredientId == ingredientID) {
      url = data.photo_url;
    }
  });
  return url;
}

export function getCategoryName(categories,categoryId) {
  let name;
  categories.map(data => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getMenu(menu,categoryId) {
  const menuArray = [];
  menu.map(data => {
    if (data.categoryId == categoryId) {
      menuArray.push(data);
    }
  });
  return menuArray;
}

// modifica
export function getRecipesByIngredient(ingredientId) {
  const menuArray = [];
  recipes.map(data => {
    data.ingredients.map(index => {
      if (index[0] == ingredientId) {
        menuArray.push(data);
      }
    });
  });
  return menuArray;
}

export function getNumberOfRecipes(categoryId) {
  let count = 0;
  recipes.map(data => {
    if (data.categoryId == categoryId) {
      count++;
    }
  });
  return count;
}

export function getAllIngredients(idArray) {
  const ingredientsArray = [];
  idArray.map(index => {
    ingredients.map(data => {
      if (data.ingredientId == index[0]) {
        ingredientsArray.push([data, index[1]]);
      }
    });
  });
  return ingredientsArray;
}

// functions for search
export function getRecipesByIngredientName(ingredients,ingredientName) {
  const nameUpper = ingredientName.toUpperCase();
  const menuArray = [];
  ingredients.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      // data.name.yoUpperCase() == nameUpper
      const recipes = getRecipesByIngredient(data.ingredientId);
      const unique = [...new Set(recipes)];
      unique.map(item => {
        menuArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(menuArray)];
  return uniqueArray;
}

export function getRecipesByCategoryName(categories,menu,categoryName) {
  const nameUpper = categoryName.toUpperCase();
  const menuArray = [];
  categories.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const list = getMenu(menu,data.id); // return a vector of recipes
      list.map(item => {
        menuArray.push(item);
      });
    }
  });
  return menuArray;
}

export function getRecipesByRecipeName(recipes,recipeName) {
  const nameUpper = recipeName.toUpperCase();
  const menuArray = [];
  recipes.map(data => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      menuArray.push(data);
    }
  });
  return menuArray;
}
