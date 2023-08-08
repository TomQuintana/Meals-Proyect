import { Request, Response } from 'express';
import Meal from '../models/meal.model';
import { isValidCategory } from '../helpers/mealsHelper';

const registerMeal = async (req: Request, res: Response) => {
  const {name} = req.body; 
  const mealData = new Meal(req.body);

  const existName = await Meal.findOne({name}); 
  
  if (existName) {
    return res.status(400).json({
      msg: `Name: ${name}, is already register`
    });  
  }

  const validationCategory = isValidCategory(mealData.category);
    
  if (!validationCategory) {
    return res.status(400).json({
      msg: 'Invalid category'
    });  
  }

  try {
    const mealSave = await mealData.save();
    return res.status(200).json({
      mealSave
    });
    
  } catch (error) {
    res.status(500).json({ 
      error: 'An internal server error occurred.'
    });
  }
  
};

const updatedMeal = async (req: Request, res: Response) => {
  
  const {id} = req.params;
  const {stock, bowl} = req.body;

  const data = {
    stock,
    bowl
  };

  try {
    const mealForUpdated = await Meal.findByIdAndUpdate(id, data, {new: true});
    const mealSave = await mealForUpdated?.save();

    return res.status(200).json({
      mealSave
    });

  } catch (error) {
    res.status(500).json({ 
      error: 'Meal Not Found'
    });
  }
  
};

const obtainMeals = async ( req: Request, res: Response) => {
  
  const meals = await Meal.find(); 
  return res.status(200).json({
    meals
  });
};

const deleteMeals = async (req: Request, res: Response) => {
  const {id} = req.params;

  try {
    const meals = await Meal.findByIdAndDelete(id);

    return res.status(200).json({
      msg: `${meals?.name} is Delete` 
    });
    
  } catch (error) {
    res.status(500).json({ 
      error: 'Meal Not Found'
    });
  }
};

//NOTE: filterType - not implented yet

export {
  registerMeal,
  obtainMeals,
  updatedMeal,
  deleteMeals,
};
