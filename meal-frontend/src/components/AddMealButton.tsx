import {  PlusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import FormToAdd from './FormToAdd';

const AddMealButton = () => {

const [showForm, setShowForm] = useState(false);

  const addMeal= async () => {
    
    setShowForm(true)
  }

  return (
    <>
      <button 
        onClick={() => addMeal()}
        type="submit" 
        value="Agregar al Carrito"
      >
        <PlusIcon 
          className="h-6 w-6 mt-1 bg-indigo-400 rounded-2xl text-white hover:cursor-pointer"
        />
      </button>

      {showForm && <FormToAdd />}
    </>
  )
}

export default AddMealButton
