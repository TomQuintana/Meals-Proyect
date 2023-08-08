import express from 'express';
import { obtainMeals, registerMeal, updatedMeal, deleteMeals } from '../controllers/meal.controller';

const router = express.Router();

router.post('/register', registerMeal);
router.get('/all', obtainMeals);
router.put('/update/:id', updatedMeal);
router.delete('/delete/:id', deleteMeals);
//router.get('/listToBuy', generateListForBuy);


// TODO: complete swagger endpoints
/**
   * @swagger
   * /register:
   *   post:
   *     description: Register a new meals
   *     parameters:
   *       - in: body
   *         name: body
   *         description: "Meal"
   *         schema: 
   *          type: object
   *          properties:
   *            name : 
   *              type: string
   *            category : 
   *              type: string
   *            stock : 
   *              type: number
   *     responses:
   *       200:
   */
export default router;
