
const isValidCategory = (category: string): boolean => {
  const validCategory = ['Meal', 'Dish', 'Ingredient'];

  if (validCategory.includes(category)) {
    return true;
  }

  return false;
};


export {
  isValidCategory,
};
