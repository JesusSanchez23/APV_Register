import { useState,useEffect } from "react"
import Alerta from "./Alerta";

const Formulario = ({setPacientes, pacientes, paciente,setPaciente}) => {
    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email,setEmail] = useState('');
    const [fecha,setFecha] = useState('');
    const [sintomas,setSintomas] = useState('');
    const [alerta, setAlerta] = useState({});
    


    
    useEffect(()=>{

        // con el key sabemos si el paciente tiene un elemnto o no
        if(Object.keys(paciente).length > 0){
            setMascota(paciente.mascota);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    },[paciente])

    
   

 const generarId = () => {
    const fecha = Date.now().toString(36);

    return `${fecha}${Math.random().toString().substr(-6)}`;

 }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if([mascota,propietario,email,fecha,sintomas].includes('')){
            setAlerta({msg: 'Todos los campos son obligatorios', error: true});
            return;
        }
        setAlerta({msg: '', error: false});

        // objeto de paciente

        const objetoPaciente={
            mascota,
            propietario,
            email,
            fecha,
            sintomas,
        };

        if(paciente.id){
            // actualizar paciente
            objetoPaciente.id = paciente.id;

            const pacientesActualizados = pacientes.map(pacienteState=>pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

            setPacientes(pacientesActualizados);
            setPaciente({});
            

        }else{
            // nuevo registro
            objetoPaciente.id=generarId();
            setPacientes([...pacientes, objetoPaciente])
        }



        // reiniciar el formulario
        setMascota('');
        setEmail('');
        setPropietario('');
        setFecha('');
        setSintomas('');
        

        
    }


  return (
    <div className="md:w-1/2 lg:w-2/5">
    <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
    <p className="text-lg text-center mt-5 mb-10 font-bold">Añade pacientes y {" "} <span className="text-indigo-600 ">Administralos</span></p>

{alerta.msg && <Alerta alerta={alerta}/>
}
{/* Formulario */}
    <form className="bg-white shadow-md rounded-xl py-10 px-5 mb-10" onSubmit={handleSubmit}>

    <div className="mb-5">
        <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
        <input type="text" id="mascota" placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={mascota} onChange={e=>setMascota(e.target.value)} />
    </div>

    <div className="mb-5">
        <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
        <input type="text" id="propietario" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={propietario} onChange={e=>setPropietario(e.target.value)} />
    </div>

    <div className="mb-5">
        <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
        <input type="email" id="email" placeholder="Email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={email} onChange={e=>setEmail(e.target.value)}/>
    </div>

    <div className="mb-5">
        <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
        <input type="date" id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={fecha} onChange={e=>setFecha(e.target.value)}/>
    </div>

    <div className="mb-5">
        <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
        <textarea type="text" id="sintomas" placeholder="Describe los sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={sintomas} onChange={e=> setSintomas(e.target.value)}/>
    </div>
        
        <input type="submit" className="bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={paciente?.id ? 'Editar Paciente' : 'Añadir Paciente'}/>
    </form>
    </div>
  )
}

export default Formulario