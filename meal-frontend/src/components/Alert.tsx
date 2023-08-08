const Alert = ({alerta}) => {
  return (
    <div className={ `${alerta.error ? 'bg-red-500' : 'bg-indigo-600'}
font-semibold text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animated-element`}>
      { alerta.msg }
    </div>
  )
}

export default Alert
