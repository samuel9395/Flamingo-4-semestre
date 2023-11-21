import React, {useState, useEffect} from "react";
import axios from "axios";
import './../consulta/consulta.css';
import Logo from '../logo/logo'
import {Scrollbars} from 'react-custom-scrollbars-2';
import { Link } from "react-router-dom";


function ConsultaMedico() {
    const [medicos, setMedicos] = useState([]);
    

    useEffect (() => {
        //FAZER UMA CHAMADA À API PARA OBTER A LISTA DE MÉDICOS
        axios.get(`http://localhost:3001/api/medico`)
        .then(response => {
            setMedicos(response.data);
           
        })
        .catch(error => {
            console.error('Erro ao buscar médicos:', error);
        });
    }, []);

    return (
        <div className="return">
            
            <Logo/>

            <div>
                <h1>Consulta de médicos</h1>
            </div>

            <div className='consulta'>
            <Scrollbars style={{ height: "100%"}}>
                {medicos.map((medicos) => (
                    <ol key={medicos.id}>
                        <h5>
                            Nome: {medicos.nome_medico}<p/>    
                            CRM: {medicos.crm_medico} <p/>
                            CPF: {medicos.cpf_medico} <p/>
                            Especialidade: {medicos.especialidade_medico}<p/>
                            Telefone: {medicos.tel_medico}<p/><br/>   
                        </h5>
                    </ol>
                ))}
                </Scrollbars>
            </div>
            <div>
            <button className="btn" type="submit"><Link to='/voltar'>Voltar</Link>
            </button>
            </div>
        </div>
    );
}

export default ConsultaMedico;