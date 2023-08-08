import { useState } from "react"
import axios from "axios";
import Alert from "./Alert";

const FormToAdd = () => {

  const [saveMeal, setSaveMeal] = useState({});
  const [alerta, setAlerta] = useState({})

  const [name, setName] = useState('')
  const [stock, setStock] = useState('')
  const [category, setCategory] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()

    setSaveMeal({
      name,
      stock,
      category
    })

    const data = await axios.post('http://localhost:4000/api/meal/register', saveMeal)
    console.log(data.status);

    if(data.status == 200) {
      setAlerta({
        msg: 'The food was saved correctly',
        error: false
      })
    }
  }

  const {msg} = alerta

  return (
    <>
      <div className='flex justify-center '>
        <form
          onSubmit={handleSubmit}
          className="bg-white py-10 px-5 lg:mb-0 shadow-md rounded-md font-mono"
        >
          <div className="mb-5">
            <label 
              htmlFor="nombre"
              className="text-gray font-mono"
            >
              Name of Food or Meal 
            </label>
            <input 
              id="name"
              type="text"
              placeholder="Name of Meal"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label 
              htmlFor="email"
              className="text-gray uppercase font-bold"
            >
              Stock
            </label>
            <input 
              id="stock"
              type="number"
              placeholder="Stock of Meal"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
              value={stock}
              onChange={e => setStock(e.target.value)}
            />
          </div>
          <div className="mb-5">

            <label 
              htmlFor="mascota"
              className="text-gray uppercase font-bold"
            >
              Category
            </label>
            <input 
              id="category"
              type="text"
              placeholder="Category of Meal - Dish, Meal or Ingredient"
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
            />
          </div>
          <button 
            type="submit" 
            value="Add Meal"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          >Save</button>
        </form>
      </div> 
      <div className="mt-4">
        {msg && <Alert 
          alerta={alerta}
        />}

      </div>
    </>
  )
}

export default FormToAdd 
