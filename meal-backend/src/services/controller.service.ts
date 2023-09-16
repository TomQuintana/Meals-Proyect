import MongoService from './db.service'


const mongoService = new MongoService()

export default class Controller {
  body: object

  constructor(body: object) {
    this.body = body
  }

  async createMeal (body: any) {

    const isMealExists = await mongoService.findMealByName(body.name)

    if(isMealExists) {
      return false
    }
  
    return await mongoService.createFood(body)
    
    // if(!isMealExists) {
    //   return true
    // } 
    // else {
    //   await mongoService.createFood(body)
    //   return 
    // }
  }

}
