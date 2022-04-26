
import Paciente from './Paciente'


const ListadoPacientes = ({pacientes, setPaciente,eliminarPaciente}) => 
{
return (
<div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

{pacientes && pacientes.length ? (
  <>
    <h2 className='font-black text-3xl text-center mb-5'>Listado de pacientes</h2>
    <p className='font-bold text-lg text-center mb-10'> Administra tus {" "} <span className='text-indigo-600'>Pacientes</span></p>

{pacientes.map((paciente)=>
    <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
)}   
    
  </>
) : (
<>
<h2 className='font-black text-3xl text-center mb-5'>Registra y Administra tus pacientes</h2>
<p className='font-bold text-lg text-center mb-10'> Comienza agregando tus {" "} <span className='text-indigo-600'>Pacientes</span></p>

</>


)}

</div>
  )
}

export default ListadoPacientes