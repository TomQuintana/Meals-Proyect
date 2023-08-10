import { useState, useEffect } from "react"
import axios from "axios"
import RemoveIcon from "./components/RemoveIcon";
import EditButton from "./components/EditButton";
import AddMealButton from "./components/AddMealButton";

function App() {

  type Meals = {
    name: string;
    category: string;
    stock: number;
    use?: boolean;
    bowl?: string;
    date?: Date;
    price?: number;
    _id?: string 
  }

  const [meals, setMeals] = useState([])

  useEffect( () => {
    const getMeals= async () => {
      const { data } = await axios.get('http://localhost:4000/api/meal/all')
      setMeals(data.meals)
    }

    getMeals()
  }, [])


  return (
    <>
      <div className="flex justify-center mt-20 div-container mb-10">
        <div className="bg-white shadow-2xl centered-div h-auto">
          <div className="bg-sky-200 rounded-xl flex justify-center">
            <h1 className="text-3xl font-thin">Your Meals</h1>
           
         </div>
          <div className="flex justify-start">
            <div className="grid grid-cols-1">
              <div className="ml-16">
                <AddMealButton />
              </div>
            </div>
          </div>
         {meals.map((meal: Meals , index) =>
            <div className="border-dotten mt-2 flex justify-center">
              <div className="m-1">
                <h1 key={index} className="text-xl bg-yellow-200 rounded-xl p-1 font-mono">{meal.name}</h1>
                <div className="grid grid-cols-2 gap-4">
                  {meal.stock > 1000 ? <p className="font-bold text-lg">Stock: <span className="text-indigo-500 font-mono">{meal.stock}kg</span></p> : <p className="font-bold text-lg">Stock: <span className="text-indigo-500 font-mono">{meal.stock}g</span></p> }
                  <p className="font-bold text-lg">
                    Category: <span className="font-mono text-lime-500">{meal.category}</span>
                  </p>
                </div>
                <div className="flex justify-center gap-20 mt-2">
                  <div>
                    <RemoveIcon
                      id={meal._id}
                    />
                  </div>
                  <div>
                    <EditButton 
                      id={meal._id}
                    />
                  </div>
                </div>
             </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
