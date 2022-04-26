


const Alerta = ({alerta}) => {
 const {msg, error} = alerta;
  console.log(alerta);
  return (
    <div className="bg-red-700 text-white text-center p-2 rounded-md uppercase font-bold mb-4">
       {msg}
    </div>
  )
}

export default Alerta