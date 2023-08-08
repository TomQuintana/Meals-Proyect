import { useState } from 'react';
import Alert from './Alert';
import axios from 'axios';

const FormForEdit = ({id}) => {

const [saveMeal, setSaveMeal] = useState({});
  const [alerta, setAlerta] = useState({})

  const [stock, setStock] = useState('')
  const [bowl, setBowl] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setSaveMeal({
      stock,
      bowl
    })

    const data = await axios.put(`http://localhost:4000/api/meal/update/${id}`, saveMeal)
    console.log(data.status);

    if(data.status == 200) {
      setAlerta({
        msg: 'The food was Edited and Saved correctly',
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
              htmlFor="email"
              className="text-gray uppercase font-bold"
            >
              Stock
            </label>
            <input 
              id="stock"
              type="number"
              placeholder="Updated stock"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
              value={stock}
              onChange={e => setStock(e.target.value)}

            />
          </div>
          <div className="mb-5">
            <label 
              htmlFor="email"
              className="text-gray uppercase font-bold"
            >
             Bowl or Taper 
            </label>
            <input 
              id="text"
              type="text"
              placeholder="Updated stock"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
              value={bowl}
              onChange={e => setBowl(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            value="Agregar al Carrito"
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

export default FormForEdit
