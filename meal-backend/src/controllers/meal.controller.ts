import { Request, Response } from 'express';
import Meal from '../models/meal.model';
//import { isValidCategory } from '../helpers/mealsHelper';
import Controller from '../services/controller.service';
import ErrorHandler from '../services/errorHandlers';

const createMeal = async (req: Request, res: Response) => {
  const service = new Controller(req.body)

  const createMeal = await service.createMeal(req.body)
  
  if(!createMeal) {
    return ErrorHandler.badRequest(res, `The Meal ${req.body.name} already created`)
  }

  return res.status(201).json({msg: 'The food was created successfully'})
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
  createMeal,
  obtainMeals,
  updatedMeal,
  deleteMeals,
};
