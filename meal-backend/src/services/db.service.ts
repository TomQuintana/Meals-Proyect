import Meal from '../models/meal.model'

export default class MongoService {
  constructor() {
  }

  async findMealByName(name: string) {

    try {
      return await Meal.findOne({name}); 

    } catch (error) {
      console.log(error);
    }
  }

  async createFood(body: object) {

    try {
      const mealData = new Meal(body);
      return await mealData.save();

    } catch (error) {
      console.log(error);
      
    }
  }

}
