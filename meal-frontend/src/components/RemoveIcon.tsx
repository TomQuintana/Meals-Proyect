import { TrashIcon } from '@heroicons/react/24/outline';
import {  useState } from 'react';
import axios from 'axios';
import Alert from './Alert';

interface Meal{
  id :string;
}

const RemoveIcon: React.FC<Meal> = ({id}) => {

  const [alerta, setAlerta] = useState({})

  const addMealRemove= async (id: string) => {
    if (id !== '') {
       await axios.delete(`http://localhost:4000/api/meal/delete/${id}`)


      setAlerta({
        msg: 'The Food was removed',
        error: true 
      })
    }
  }

  //NOTE: mejor el tipado
  const {msg} = alerta

  return (
    <>
      <button 
        onClick={() => addMealRemove(id)}
        type="submit" 
        value="Agregar al Carrito"
      >
        <TrashIcon 
          className="h-6 w-6 text-red-500" />    
      </button>
      {msg && <Alert  
        alerta={alerta}
      />}
    </>
  )
}

export default RemoveIcon
