import { PencilIcon } from '@heroicons/react/24/outline';
import {  useState } from 'react';
import FormForEdit from './FormForEdit';

interface MealId{
  id :string;
}

const EditButton: React.FC<MealId> = ({id}) => {

//const [showSuccessMessage, setShowSuccessMessage] = useState(false);
const [showForm, setShowForm] = useState(false);

  const addMealEdit= async (id: string) => {

    if (id !== '') {
      setShowForm(true)
    }
  }

 // useEffect(() => {
 //    const timer = setTimeout(() => {
 //      setShowSuccessMessage(false);
 //    }, 6000);
 //
 //    return () => clearTimeout(timer); // Limpia el temporizador en el desmontaje del componente
 //  }, []);



  return (
    <>
      <button 
        onClick={() => addMealEdit(id)}
        type="submit" 
        value="Agregar al Carrito"
      >
        <PencilIcon
          className="h-6 w-6 text-blue-500" />    
      </button>

      {showForm && <FormForEdit
      id={id}/> }
    </>
  )
}

export default EditButton 
