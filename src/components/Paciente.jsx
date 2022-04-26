import React from 'react'

const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {

  const{mascota, propietario, fecha, email, sintomas,id} = paciente;

  const handleEliminar =()=>{
    const respuesta = confirm('Deseas eliminar el registro');

    if(respuesta){
      eliminarPaciente(id);
    }
  }
  return (
    <div className='shadow-md bg-white px-5 py-10 rounded-xl m-0 mx-3 mb-5'>
    <p className='font-bold mb-3 text-indigo-700 uppercase'>Nombre:{" "}<span className='font-normal normal-case text-black'>{mascota}</span> </p>

    <p className='font-bold mb-3 text-indigo-700 uppercase'>Propietario:{" "}<span className='font-normal normal-case text-black'>{propietario}</span> </p>

    <p className='font-bold mb-3 text-indigo-700 uppercase'>Email:{" "}<span className='font-normal normal-case text-black'>{email}</span> </p>

    <p className='font-bold mb-3 text-indigo-700 uppercase'>Fecha Alta:{" "}<span className='font-normal normal-case text-black'>{fecha}</span> </p>

    <p className='font-bold mb-3 text-indigo-700 uppercase'>Sintomas:{" "}<span className='font-normal normal-case text-black'>{sintomas}</span> </p>

    <div className='flex justify-evenly'>
      <button type='button' className='bg-indigo-400 text-white uppercase font-bold p-2 rounded-md py-2  px-10 hover:bg-indigo-600' onClick={()=> setPaciente(paciente)}>Editar</button>
      <button type='button' className='bg-red-400 text-white uppercase font-bold p-2 rounded-md py-2 px-10 hover:bg-red-600' onClick={handleEliminar}>Eliminar</button>
    </div>
  </div>
  )
}

export default Paciente