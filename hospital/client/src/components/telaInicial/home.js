import React from 'react';
import "../../components/telaInicial/home.css";
import { Link } from 'react-router-dom';
import image from '../image/hospital.jpg';

export function Home() {
    return (
        <div className='home'>

            <div className='logo'>
                <img src={image} alt='' />
                <div className='main'>
                    <h1>Portal Nova Esperança</h1>
                </div>
            </div>
<br/><br/><br/>

            <div className='menu'>
                <div className='cadastro'>
                    <h3>Cadastrar</h3>
                    <ul>
                        <li><Link to="/medico">Médico</Link></li>
                        <li><Link to="/enfermeiro">Enfermeiro</Link></li>
                        <li><Link to="/paciente">Paciente</Link></li>
                    </ul>
                </div>
                <div className='consulta'>
                    <h3>Consultar</h3>
                    <ul>
                        <li><Link to="/consultaMedico">Médico</Link></li>
                        <li><Link to="/consultaEnfermeiro">Enfermeiro</Link></li>
                        <li><Link to="/consultaPaciente">Paciente</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
